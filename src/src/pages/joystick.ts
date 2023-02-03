import { joystickPage } from "../components/joystick";
import { settings, createNipple } from '../settings/settings';

import { Robot } from '../robot';
import "../styles/app.scss";

var robot = new Robot();


function addSettings(robot, isText: boolean = false) {
  settings(robot, isText);
};

window.onload = function () {
  joystickPage();
  addSettings(robot, true);
  createNipple('static', robot);
};