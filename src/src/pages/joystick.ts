import { joystickPage } from "../components/joystick";
import { settings, createNipple } from '../settings/settings';
import { Robot } from '../classes/Robot';
import "../styles/app.scss";

var robot = new Robot();


// ----- BUTTONS -----
export const connect = (): void => {
  robot.connectRobot();
};
export const disconnect = (): void => {
  robot.disconnectRobot()
};
export const getBattery = (): void => {
  robot.getBattery().then((percentage) => {
    alert(`Battery percentage is: ${percentage['data']}%`);
  });
};
export const diagnostic = (angle?: number): void => {
  robot.diagnostic(angle);
};


window.onload = function () {
  joystickPage();
  settings(robot, true);
  createNipple('static', robot);
};