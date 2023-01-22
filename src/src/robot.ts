import { DeviceController } from "@espruino-tools/core";

var Piecewise = require('piecewise-function');
const angles = [0, 44.9, 45, 90, 135, 135.1, 180, 225, 259.9, 260, 270, 280, 280.1, 315, 360];
const delay = ms => new Promise(res => setTimeout(res, ms));


// speed should not be set less that 0.3
export class Robot extends DeviceController {
  connected: boolean;
  left_dir: number;
  right_dir: number;
  speeds: any[];
  sendCode: any;
  maxSpeed: number;
  minSpeed: number;
  angle_mapping_left: any;
  angle_mapping_right: any;
  

  constructor() {
    super();
    this.connected = false;
    this.left_dir = 0;
    this.right_dir = 0;
    this.speeds = [];
    this.sendCode = null;
    this.maxSpeed = 1;
    this.minSpeed = 0.4;
    this.angle_mapping_left = Piecewise(angles, 
                                          [this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, this.minSpeed, 0, 0, 0, 0, -this.maxSpeed, -this.maxSpeed, -this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed]);
    this.angle_mapping_right = Piecewise(angles, 
                                          [0, 0, this.minSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, -this.maxSpeed, -this.maxSpeed, -this.maxSpeed, 0, 0, 0]);
    }

  // ----- BUTTONS -----
  connectRobot() {
    this.connect(() => {
      this.connected = true;
      console.log("connected");
    });
  };

  disconnectRobot() {
    this.disconnect(() => {
      this.connected = false;
      console.log("disconnected");
    });
  };

  getBatteryRobot() {
    this.getBattery().then((percentage) => {
      console.log(`Battery percentage is: ${percentage['data']}%`);
    });
  };


  // ----- MOVEMENT -----
  start() {
    console.log("Started moving joystick.\nChecking connection...");
    if (!this.checkConnection()) {
      this.connect();
      return;
    }
    this.Call.switchMotor("D8", 0);
    this.Call.switchMotor("D7", 0);
    this.sendCode = window.setInterval(this.moveRobot.bind(this), 600);
  };
      
  stop() {
    console.log("Stopped moving joystick.\nChecking connection...");
    if (!this.checkConnection()) return;
    window.clearInterval(this.sendCode);
    this.Call.stop();
    this.speeds = [];
  };
      
  getSpeeds(angle) {
    console.log("Moving robot.\nChecking connection...");
    if (!this.checkConnection()) return;
    const a = angle; //Math.round(angle);
    var l_speed = this.angle_mapping_left(a);
    var r_speed = this.angle_mapping_right(a);
    console.log(`Angle: ${angle}\t Left: ${l_speed}\t Right: ${r_speed}`);
      
    this.switchDirections(l_speed, r_speed);
    l_speed = Math.abs(l_speed);
    r_speed = Math.abs(r_speed);
      
    if (l_speed < this.minSpeed && l_speed > 0) l_speed = this.minSpeed;
    if (r_speed < this.minSpeed && r_speed > 0) r_speed = this.minSpeed;
    if (l_speed > this.maxSpeed) l_speed = this.maxSpeed;
    if (r_speed > this.maxSpeed) r_speed = this.maxSpeed;
    this.speeds.push([l_speed, r_speed]);
  };
      
  moveRobot() {
    const speed = this.speeds[(this.speeds).length-1];
    if (speed) {
      this.Call.turn(speed[0], speed[1]);
    }
  };
      
  switchDirections(l_speed, r_speed) {
    if (l_speed > 0 && this.left_dir == 1) {
      this.Call.switchMotor("D8", 0);
      this.left_dir = 0;
        }
    else if (l_speed < 0 && this.left_dir == 0) {
      this.Call.switchMotor("D8", 1);
      this.left_dir = 1;
    }
    if (r_speed > 0 && this.right_dir == 1) {
      this.Call.switchMotor("D7", 0);
      this.right_dir = 0;
    }
    else if (r_speed < 0 && this.right_dir == 0) {
      this.Call.switchMotor("D7", 1);
      this.right_dir = 1;
    }
  };


  async diagnostic(angle?: number) {
    console.log("\n\n\nEntering diagnostic mode\n\n\n");
    if (!this.checkConnection()) return;
    this.stop();

    if (angle >= 0) {
      await this.test(angle);
    } 
    else {
      for (var i = 0; i < angles.length; i++) {
        await this.test(angles[i]);
      }
    }
  };

  async test(angle: number) {
    this.getSpeeds(angle);
    this.moveRobot();
    await delay(5000);
    this.stop();
  }

  checkConnection() {
    if (!this.connected) {
      console.log("\nNot connected to robot!\n\n");
      return false;
    }
    console.log("\n Device is connected!\n\n");
    return true;
  };
}