import { selfDrivingPage } from "./components/self-driving";
import { joystickPage } from "./components/joystick";
import { indexPage } from "./components/home";
import { settings, createNipple } from './settings/settings';

import { Host } from "@espruino-tools/peer";
import { Robot } from './robot';
import "./styles/app.scss";


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

function addSettings(robot) {
  settings(robot);
};



/* JOYSTICK PAGE */
if (window.location.href.includes('joystick.html')) {
  window.onload = function () {
    joystickPage();
    addSettings(robot);
    createNipple('static', robot);

  };
}

else if (window.location.href.includes('self-driving.html')) {
  window.onload = function () {
    let p = new Host(window.location.origin + "/peer.html");
    p.getData(function (data) {
      alert(data);
      console.log("getDataHost ", data);
    });
  
    p.getVideo(function (data) {
      console.log("getVideoHost ", data);

      let body = document.getElementById("joystick");
      let video = document.createElement("video");
      video.srcObject = data;
      video.play();
      video.className = "video";
      body.appendChild(video);
    });

    selfDrivingPage();
  }
}

/* INDEX PAGE */
else {
  window.onload = function () {
    indexPage();
  };
};