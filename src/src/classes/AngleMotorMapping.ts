var Piecewise = require('piecewise-function');

export class AngleMotorMapping {
  name: string;
  angles: any;
  leftMotorMapping: any;
  rightMotorMapping: any;

  constructor(name: string, angles: any, leftMotorMapping: any, rightMotorMapping: any) {
    this.name = name;
    this.angles = angles;
    this.leftMotorMapping = Piecewise(angles, leftMotorMapping);
    this.rightMotorMapping = Piecewise(angles, rightMotorMapping);
  };
};