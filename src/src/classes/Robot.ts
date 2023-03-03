import { DeviceController } from "@espruino-tools/core";
import { uart } from "@espruino-tools/uart";

const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));


let UART = uart;
var connection: any;


export class Robot extends DeviceController {
  isConnected: boolean;
  #motorDir: number[];
  #buffer: number[][];
  #sendCodeFunc: any;
  #maxForce: number;
  #sendCodeSpeed: number;
  #mapping: any;
  #connecting: boolean;


  constructor() {
    super();
    this.isConnected = false;
    this.#motorDir = [0,0];       // directions of left and right motor ()
    this.#buffer = [];            // buffer to keep backlog of instructions
    this.#sendCodeFunc = null;
    this.#maxForce = 1.5;
    this.#sendCodeSpeed = 5;
    this.#mapping = null;
    this.#connecting = false;
  };

  
  // ----- SETTER & GETTER METHODS -----
  getConnected = (): boolean => {
    return this.isConnected;
  };
  setConnected = (isConnected: boolean): void => {
    this.isConnected = isConnected;
  };

  getMotorDir = (): number[] => {
    return this.#motorDir;
  };
  setMotorDir = (left: number, right: number): void => {
    this.#motorDir = [left, right];
  };

  popFromBuffer = (): number[][] => {
    return this.#buffer;
  };
  pushToBuffer = (speed: any): void => {
    this.#buffer.push(speed);
  };

  setSendCodeSpeed(speed: number) {
    this.#sendCodeSpeed = speed;
  };
  getSendCodeSpeed() {
    return this.#sendCodeSpeed;
  };

  getMaxForce = (): number => {
    return this.#maxForce;
  };
  setMaxForce = (maxForce: number): void => {
    this.#maxForce = maxForce;
  };

  getMapping = (): number => {
    return this.#mapping;
  }
  setMapping(mapping: any): void {
    this.#mapping = mapping;
  };


  // ----- BUTTONS -----
  connectRobot = (): void => {
    try {
      let r = this;
      r.#connecting = true;
      UART.connect((c: any) => {
        if (!c || null) {
          console.log("not connected")
        } else {
          connection = c;
          r.isConnected = true;
          r.#connecting = false;
          r.switchDirections(1, 1);
        };
      });
    }
    catch (err) {
      console.log(err)
    }
  };


  disconnectRobot = (): void => {
    UART.close();
    this.isConnected = false;
    console.log("disconnected");
  };

  diagnostic = async (angle?: number): Promise<void> => {
    if (!this.isConnected) {
      await this.connectRobot();
      return;
    };
    alert("Entering diagnostic mode");
    this.stop();

    if (angle && angle >= 0) {
      await this.#test(angle);
    } 
    else {
      for (var i = 0; i < this.#mapping.angles.length; i++) {
        await this.#test(this.#mapping.angles[i]);
      }
    };
  };

  #test = async (angle: number): Promise<void> => {
    alert(`Testing angle ${angle}`)
    this.moveRobot(angle, this.#maxForce);
    this.sendCode();
    await delay(5000);
    this.stop();
  };

  getBatteryLevel = (): void => {
    this.getBattery().then((percentage) => {
      console.log(percentage);
      if (percentage['log'] == 'success') {
        alert(`Battery percentage is: ${percentage['data']}%`);
      };
    });
  };



  // ----- MOVEMENT -----
  start = async (): Promise<void> => {
    if (!this.isConnected) {
      await this.connectRobot();
      return;
    }
    this.#sendCodeFunc = window.setInterval(this.sendCode.bind(this), this.#sendCodeSpeed);
  };
      

  stop = (): void => {
    if (!this.isConnected) {
      return;
    }
    window.clearInterval(this.#sendCodeFunc);
    connection.write("stop();\n");
    this.#buffer = [];
  };


  continue = (): void => {
    this.#sendCodeFunc = window.setInterval(this.sendCode.bind(this), this.#sendCodeSpeed);
  };
      

  moveRobot = async (angle: number, force: number, reverseDirection=false): Promise<void> => {
    if (!this.isConnected) {
      if (!this.#connecting) {
        await this.connectRobot();
      }
      return;
    };

    const forceRatio = force < this.#maxForce ? force / this.#maxForce : 1;
    var lSpeed = this.#mapping.leftMotorMapping(angle)*forceRatio;
    var rSpeed = this.#mapping.rightMotorMapping(angle)*forceRatio;

    console.log(`Angle: ${angle}\t Force: ${Math.round(forceRatio * 100)}% of ${this.#maxForce}\n
      Left: ${lSpeed}\t Right: ${rSpeed}`);
      
    if (!reverseDirection) {
      this.switchDirections(lSpeed, rSpeed);
    }
    lSpeed = Math.abs(lSpeed);
    rSpeed = Math.abs(rSpeed);
  
    this.#buffer.push([lSpeed, rSpeed]);
  };
      

  switchDirections(l_speed, r_speed): void {
    const leftMotorDir = this.#motorDir[0];
    const rightMotorDir = this.#motorDir[1];

    if (l_speed > 0 && leftMotorDir == 1) {
      this.#sendSwitchDirection("D8", 0);
      this.#motorDir[0] = 0;
    }
    else if (l_speed < 0 && leftMotorDir == 0) {
      this.#sendSwitchDirection("D8", 1);
      this.#motorDir[0] = 1;
    };
    if (r_speed > 0 && rightMotorDir == 1) {
      this.#sendSwitchDirection("D7", 0);
      this.#motorDir[1] = 0;
    }
    else if (r_speed < 0 && rightMotorDir == 0) {
      this.#sendSwitchDirection("D7", 1);
      this.#motorDir[1] = 1;
    };
  };

  #sendSwitchDirection = (motor, dir): void => {
    connection.write(`switchMotor("${motor}",${dir});\n`);
  };



  // ----- CODE SENT TO ROBOT -----
  sendCode(): void {
    const speed = this.#buffer.pop();
    if (speed) {
      connection.write(`turn(${speed[0]},${speed[1]});\n`);
    };
  };
};