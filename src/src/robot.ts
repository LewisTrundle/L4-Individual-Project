import { DeviceController } from "@espruino-tools/core";
const delay = ms => new Promise(res => setTimeout(res, ms));


export class Robot extends DeviceController {
  #motorDir: number[];
  #buffer: number[][];
  #sendCodeFunc: any;
  #maxForce: number;
  #sendCodeSpeed: number;
  mapping: any;


  constructor() {
    super();
    this.#motorDir = [0,0];
    this.#buffer = [];
    this.#sendCodeFunc = null;
    this.#maxForce = 1.5;
    this.#sendCodeSpeed = 100;
    this.connected = false;
    this.mapping = null;
  };


  // ----- BUTTONS -----
  connectRobot(): void {
    this.connect(() => {
      this.connected = true;
      this.switchDirections(1, 1);
      console.log("connected");
    });
  };

  disconnectRobot(): void {
    this.disconnect(() => {
      this.connected = false;
      console.log("disconnected");
    });
  };

  async diagnostic(angle?: number): Promise<void> {
    console.log("\n\n\nEntering diagnostic mode\n\n\n");
    if (!this.checkConnection()) return;
    this.stop();

    if (angle >= 0) {
      await this.test(angle);
    } 
    else {
      for (var i = 0; i < this.mapping.angles.length; i++) {
        await this.test(this.mapping.angles[i]);
      }
    }
  };

  async test(angle: number): Promise<void> {
    this.moveRobot(angle, this.#maxForce);
    this.sendCode();
    await delay(5000);
    this.stop();
  };



  // ----- MOVEMENT -----
  start(): void {
    console.log("Started moving joystick");
    if (!this.checkConnection()) {
      this.connect();
      return;
    }
    this.#sendCodeFunc = window.setInterval(this.sendCode.bind(this), this.#sendCodeSpeed);
  };
      

  stop(): void {
    console.log("Stopped moving joystick");
    if (!this.checkConnection()) return;
    window.clearInterval(this.#sendCodeFunc);
    this.Call.stop();
    this.#buffer = [];
  };
      

  moveRobot(angle, force): void {
    if (!this.checkConnection()) return;

    const forceRatio = force < this.#maxForce ? force / this.#maxForce : 1;
    var lSpeed = this.mapping.leftMotorMapping(angle)*forceRatio;
    var rSpeed = this.mapping.rightMotorMapping(angle)*forceRatio;

    console.log(`Angle: ${angle}\t Force: ${Math.round(forceRatio * 100)}% of ${this.#maxForce}\n
      Left: ${lSpeed}\t Right: ${rSpeed}`);
      
    this.switchDirections(lSpeed, rSpeed);
    lSpeed = Math.abs(lSpeed);
    rSpeed = Math.abs(rSpeed);
  
    this.#buffer.push([lSpeed, rSpeed]);
  };
      

  switchDirections(l_speed, r_speed): void {
    const leftMotorDir = this.#motorDir[0];
    const rightMotorDir = this.#motorDir[1];

    if (l_speed > 0 && leftMotorDir == 1) {
      this.Call.switchMotor("D8", 0);
      this.#motorDir[0] = 0;
    }
    else if (l_speed < 0 && leftMotorDir == 0) {
      this.Call.switchMotor("D8", 1);
      this.#motorDir[0] = 1;
    };
    if (r_speed > 0 && rightMotorDir == 1) {
      this.Call.switchMotor("D7", 0);
      this.#motorDir[1] = 0;
    }
    else if (r_speed < 0 && rightMotorDir == 0) {
      this.Call.switchMotor("D7", 1);
      this.#motorDir[1] = 1;
    };
  };



  // ----- CODE SENT TO ROBOT -----
  sendCode(): void {
    console.log("sending code at speed of", String(this.#sendCodeSpeed));
    const speed = this.#buffer[(this.#buffer).length-1];
    if (speed) {
      this.Call.turn(0, 0);
    }
  };



  // ----- SETTER & GETTER METHODS -----
  setSendCodeSpeed(speed: number) {
    this.#sendCodeSpeed = speed;
  };
  getSendCodeSpeed() {
    return this.#sendCodeSpeed;
  };

  setMapping(mapping): void {
    this.mapping = mapping;
  };



  // ----- MISC -----
  checkConnection(): boolean {
    if (!this.connected) {
      console.log("\nNot connected to robot!\n\n");
      return false;
    }
    return true;
  };
};


console["logOld"] = console.log;

const deviceMessages = {
  "Device" : "pink",
  "Connected" : "pink",
  "Sending" : "orange",
  "Sent" : "green",
  "Received": "blue",
  "Busy" : "red",
  "Executing" : "red",
};

// currently console.log will crash if not a string
// console.log = function(data) {
//   if (data.startsWith("<UART>")) {
//     const op = data.split(" ")[1];
//     if (String(op) in deviceMessages) {
//       console["logOld"](`%c ROBOT DATA:\n${data}`, `background: ${deviceMessages[op]}; color: #ffffff`);
//     } else {
//       console["logOld"](`%c ROBOT DATA:\n${data}`, 'background: black; color: #ffffff');
//     }

//   } else {
//     console["logOld"](data);
//   }
// };