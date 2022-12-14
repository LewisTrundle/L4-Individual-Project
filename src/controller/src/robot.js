import DeviceController from "@espruino-tools/core";

// speed should not be set less that 0.3
export class Robot extends DeviceController {
  constructor() {
    super();
    this.speed = 50 / 100;
    this.MAX_FORCE = 2.5;
    this.MAX_SPEED = 50 / 100;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  switch_forward() {
    this.Pin.digitalOn("D7", 0);
    this.Pin.digitalOn("D8", 0);
  }

  move(l_speed, r_speed) {
    this.turn(l_speed, r_speed);
    //this.forward();
  }
  
  turn(l_speed, r_speed) {
    this.switch_forward();
    this.Pin.analogOn("D9", r_speed);
    this.Pin.analogOn("D10", l_speed);
  }

  forward() {
    this.switch_forward();
    this.Pin.analogOn("D9", this.speed);
    this.Pin.analogOn("D10", this.speed);
  }

  stop() {
    this.Pin.analogOn("D9", 0);
    this.Pin.analogOn("D10", 0);
  }

  backward() {
    this.Pin.digitalOn("D7", 1)
    this.Pin.digitalOn("D8", 1)
    this.Pin.analogOn("D9", this.speed);
    this.Pin.analogOn("D10", this.speed);
  }

  getInfo(pin) {
    this.Pin.getInfo(pin).then((pinInfo) => {
      console.log(pinInfo);
    })
  }
}