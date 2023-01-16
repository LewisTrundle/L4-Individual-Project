import { DeviceController } from "@espruino-tools/core";

var Piecewise = require('piecewise-function');
//const angle_mapping_left = Piecewise([0, 45, 90, 135, 180, 225, 270, 315, 360], [1, 1, 1, 0, 0, 0, -1, 1, 1])
//const angle_mapping_right = Piecewise([0, 45, 90, 135, 180, 225, 270, 315, 360], [0, 0, 1, 1, 1, 1, -1, 0, 0])
 

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
    this.minSpeed = 0.3;
    this.angle_mapping_left = Piecewise([0, 45, 90, 135, 180, 225, 259, 260, 280, 281, 315, 360], [this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed/2, this.minSpeed, this.minSpeed, this.minSpeed, -this.maxSpeed, -this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed]);
    this.angle_mapping_right =Piecewise([0, 45, 90, 135, 180, 225, 259, 260, 280, 281, 315, 360], [this.minSpeed, this.maxSpeed/2, this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, this.maxSpeed, -this.maxSpeed, -this.maxSpeed, this.minSpeed, this.minSpeed, this.minSpeed]);
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

  start() {
    if (!this.connected) {
      this.connect();
      return;
    }
    this.Call.switchMotor("D8", 0);
    this.Call.switchMotor("D7", 0);
    this.sendCode = window.setInterval(this.moveRobot.bind(this), 600);
  };
      
  stop() {
    if (!this.connected) {
      return;
    }
    window.clearInterval(this.sendCode);
    this.Call.stop();
  };
      
  getSpeeds(angle) {
    if (!this.connected) return;
    const a = Math.round(angle.degree);
    var l_speed = this.angle_mapping_left(a);
    var r_speed = this.angle_mapping_right(a);
      
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
      console.log(`Left: ${speed[0]}\t Right: ${speed[1]}`);
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
}