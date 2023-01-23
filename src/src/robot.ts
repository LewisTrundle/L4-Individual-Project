import { DeviceController } from "@espruino-tools/core";
const delay = ms => new Promise(res => setTimeout(res, ms));


// speed should not be set less that 0.3
export class Robot extends DeviceController {
  connected: boolean;
  left_dir: number;
  right_dir: number;
  speeds: any[];
  sendCodeFunc: any;
  maxSpeed: number;
  minSpeed: number;
  maxForce: number;
  angles: any;
  angle_mapping_left: any;
  angle_mapping_right: any;
  

  constructor() {
    super();
    this.connected = false;
    this.left_dir = 0;
    this.right_dir = 0;
    this.speeds = [];
    this.sendCodeFunc = null;
    this.maxSpeed = 1;
    this.minSpeed = 0;
    this.maxForce = 1.5;
    this.angles = null;
    this.angle_mapping_left = null;
    this.angle_mapping_right = null;
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

  async diagnostic(angle?: number) {
    console.log("\n\n\nEntering diagnostic mode\n\n\n");
    if (!this.checkConnection()) return;
    this.stop();

    if (angle >= 0) {
      await this.test(angle);
    } 
    else {
      for (var i = 0; i < this.angles.length; i++) {
        await this.test(this.angles[i]);
      }
    }
  };

  async test(angle: number) {
    this.moveRobot(angle, this.maxForce);
    this.sendCode();
    await delay(5000);
    this.stop();
  };

  setMapping(mapping) {
    console.log("Switching to", mapping.name);
    this.angles = mapping.angles;
    this.angle_mapping_left = mapping.leftMotorMapping;
    this.angle_mapping_right = mapping.rightMotorMapping;
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
    this.sendCodeFunc = window.setInterval(this.sendCode.bind(this), 600);
  };
      
  stop() {
    console.log("Stopped moving joystick.\nChecking connection...");
    if (!this.checkConnection()) return;
    window.clearInterval(this.sendCodeFunc);
    this.Call.stop();
    this.speeds = [];
  };
      
  moveRobot(angle, force) {
    console.log("Moving robot.\nChecking connection...");

    //if (!this.checkConnection()) return;
    var l_speed = this.angle_mapping_left(angle);
    var r_speed = this.angle_mapping_right(angle);
    const forceRatio = force / this.maxForce;
    console.log(`Angle: ${angle}\t Force: ${force} (${Math.round(forceRatio * 100)}%) of ${this.maxForce}\n
      \t\t\t\t\tLeft: ${l_speed}\t Right: ${r_speed}\n
      After force calc: Left: ${l_speed*forceRatio}\t Right: ${r_speed*forceRatio}`);
    l_speed = l_speed*forceRatio;
    r_speed = r_speed*forceRatio;
      
    this.switchDirections(l_speed, r_speed);
    l_speed = Math.abs(l_speed);
    r_speed = Math.abs(r_speed);
      
    if (l_speed < this.minSpeed && l_speed > 0) l_speed = this.minSpeed;
    if (r_speed < this.minSpeed && r_speed > 0) r_speed = this.minSpeed;
    if (l_speed > this.maxSpeed) l_speed = this.maxSpeed;
    if (r_speed > this.maxSpeed) r_speed = this.maxSpeed;
    this.speeds.push([l_speed, r_speed]);
  };
      
  sendCode() {
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


  checkConnection() {
    if (!this.connected) {
      console.log("\nNot connected to robot!\n\n");
      return false;
    }
    console.log("\n Device is connected!\n\n");
    return true;
  };
}