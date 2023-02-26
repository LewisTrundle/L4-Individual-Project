import { DeviceController } from "@espruino-tools/core";
import { uart } from "@espruino-tools/uart";
const delay = ms => new Promise(res => setTimeout(res, ms));


let UART = uart;

var connection;

export class Robot extends DeviceController {
  #motorDir: number[];
  #buffer: number[][];
  #sendCodeFunc: any;
  #maxForce: number;
  sendCodeSpeed: number;
  mapping: any;


  constructor() {
    super();
    this.#motorDir = [0,0];       // directions of left and right motor ()
    this.#buffer = [];            // buffer to keep backlog of instructions
    this.#sendCodeFunc = null;
    this.#maxForce = 1.5;
    this.sendCodeSpeed = 10;
    this.connected = false;
    this.mapping = null;
  };

  
  // ----- SETTER & GETTER METHODS -----
  getMotorDir = (): number[] => {
    return this.#motorDir;
  };
  setMotorDir = (left: number, right: number): void => {
    this.#motorDir = [left, right];
  };

  setSendCodeSpeed(speed: number) {
    this.sendCodeSpeed = speed;
  };
  getSendCodeSpeed() {
    return this.sendCodeSpeed;
  };

  setMapping(mapping): void {
    this.mapping = mapping;
  };

  getBuffer() {
    return this.#buffer;
  };


  // ----- BUTTONS -----
  connectRobot = (): void => {
    // this.connect(() => {
    //   this.connected = true;
    //   this.switchDirections(1, 1);
    //   console.log("connected");
    // });

    UART.connect(function (c) {
      if (!c) {
        console.log("not connected")
        return
      }
      console.log("connected")
      connection = c;
    });
    this.connected = true;
    console.log("connection", connection);
  };

  disconnectRobot = (): void => {
    this.disconnect(() => {
      this.connected = false;
      console.log("disconnected");
    });
  };

  diagnostic = async (angle?: number): Promise<void> => {
    if (!this.checkConnection()) return;
    alert("Entering diagnostic mode");
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

  test = async (angle: number): Promise<void> => {
    alert(`Testing angle ${angle}`)
    this.moveRobot(angle, this.#maxForce);
    this.sendCode();
    await delay(5000);
    this.stop();
  };



  // ----- MOVEMENT -----
  async start(): Promise<void> {
    console.log("Started moving joystick");
    if (!this.checkConnection()) {
      await this.connect();
      return;
    }
    this.#sendCodeFunc = window.setInterval(this.sendCode.bind(this), this.sendCodeSpeed);
    console.log("connection", connection)
  };
      

  stop(): void {
    console.log("Stopped moving joystick");
    if (!this.checkConnection()) return;
    window.clearInterval(this.#sendCodeFunc);
    connection.write("stop();\n");
    this.#buffer = [];
  };

  continue(): void {
    this.#sendCodeFunc = window.setInterval(this.sendCode.bind(this), this.sendCodeSpeed);
  }
      

  moveRobot(angle, force, reverseDirection=false): void {
    if (!this.checkConnection()) return;

    const forceRatio = force < this.#maxForce ? force / this.#maxForce : 1;
    var lSpeed = this.mapping.leftMotorMapping(angle)*forceRatio;
    var rSpeed = this.mapping.rightMotorMapping(angle)*forceRatio;

    console.log(`Angle: ${angle}\t Force: ${Math.round(forceRatio * 100)}% of ${this.#maxForce}\n
      Left: ${lSpeed}\t Right: ${rSpeed}`);
      
    if (!reverseDirection) {
      this.switchDirections(lSpeed, rSpeed);
    }
    lSpeed = Math.abs(lSpeed);
    rSpeed = Math.abs(rSpeed);
  
    console.log("adding speeds")
    this.#buffer.push([lSpeed, rSpeed]);
  };
      

  switchDirections(l_speed, r_speed): void {
    const leftMotorDir = this.#motorDir[0];
    const rightMotorDir = this.#motorDir[1];

    if (l_speed > 0 && leftMotorDir == 1) {
      //this.Call.switchMotor("D8", 0);
      this.#motorDir[0] = 0;
    }
    else if (l_speed < 0 && leftMotorDir == 0) {
      //this.Call.switchMotor("D8", 1);
      this.#motorDir[0] = 1;
    };
    if (r_speed > 0 && rightMotorDir == 1) {
      //this.Call.switchMotor("D7", 0);
      this.#motorDir[1] = 0;
    }
    else if (r_speed < 0 && rightMotorDir == 0) {
      //this.Call.switchMotor("D7", 1);
      this.#motorDir[1] = 1;
    };
  };



  // ----- CODE SENT TO ROBOT -----
  sendCode(): void {
    console.log("Im happing")
    const speed = this.#buffer.pop();
    if (speed && connection) {
      console.log(`${connection} sending code for left: ${speed[0]}, right: ${speed[1]}`);
      connection.write(`turn(${speed[0]},${speed[1]});\n`)
      //this.Call.turn(speed[0], speed[1]);
    }
  };



  // ----- MISC -----
  checkConnection(): boolean {
    if (!this.connected) {
      alert("Not connected to robot!");
      return false;
    }
    return true;
  };
};