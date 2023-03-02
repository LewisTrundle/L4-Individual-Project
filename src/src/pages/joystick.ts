import { joystickPage } from "../components/joystick";
import { settings } from '../settings/settings';
import { Robot } from '../classes/Robot';
import * as nipplejs from 'nipplejs';
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
  robot.setSendCodeSpeed(100);
  joystickPage();
  settings(robot, true);
  createNipple('static', robot);
};


function createNipple(evt, robot) {
  const joyZone = document.getElementById("joyzone");
  joysticks[evt].zone = joyZone;
  var joystick = nipplejs.create(joysticks[evt]);
  bindNipple(joystick, robot);
};

function bindNipple(joystick, robot) {
  joystick.on('start', function(evt, data) {
    robot.start()
  }).on('end', function(evt, data) {
    robot.stop();
  }).on('move', function(evt, data) {
    robot.moveRobot(data.angle.degree, data.force);
  });
};


var joysticks = {
  static: {
    zone: null,
    mode: 'static',
    size: 150,
    position: {
      left: '50%',
      top: '50%'
    },
    color: '#FF0000',
    restOpacity: 0.8,
  }
};