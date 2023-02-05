import { joystickPage } from "../components/joystick";
import { settings, createNipple } from '../settings/settings';
import { Robot } from '../classes/Robot';
import "../styles/app.scss";

var robot = new Robot();


// ----- BUTTONS -----
export function connect() {
  robot.connectRobot();
};
export function disconnect() {
  robot.disconnectRobot()
};
export function getBattery() {
  robot.getBattery().then((percentage) => {
    console.log(`Battery percentage is: ${percentage['data']}%`);
  });
};
export function diagnostic(angle?: number) {
  robot.diagnostic(angle);
};


function addSettings(robot, isText: boolean = false) {
  settings(robot, isText);
};

window.onload = function () {
  joystickPage();
  addSettings(robot, true);
  createNipple('static', robot);
};