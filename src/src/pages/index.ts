import { indexPage } from "../components/home";
import { Robot } from '../robot';
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


window.onload = function () {
  indexPage();
};