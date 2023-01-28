import { indexPage, joystickPage, selfDrivingPage, joyZone } from "./components";
import { mappings } from "./angleMotorMappings";
import { Host } from "@espruino-tools/peer";
import { Robot } from './robot';
import { setMapping, sendCodeSlider, uploadCodeButton } from './settings';
import * as nipplejs from 'nipplejs';
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



/* JOYSTICK PAGE */
if (window.location.href.includes('joystick.html')) {
  window.onload = function () {
    joystickPage();
    settings();

    var joystick;
    var joysticks = {
      static: {
        zone: joyZone,
        mode: 'static',
        size: 180,
        position: {
          left: '50%',
          top: '50%'
        },
        color: '#FF0000',
        restOpacity: 0.8,
      }
    };
    function bindNipple() {
      joystick.on('start', function(evt, data) {
        robot.start();
      }).on('end', function(evt, data) {
        robot.stop();
      }
      ).on('move', function(evt, data) {
        robot.moveRobot(data.angle.degree, data.force);
      });
    }
    function createNipple(evt) {
      if (joystick) {
        joystick.destroy();
      }
      joystick = nipplejs.create(joysticks[evt]);
      bindNipple();
    }
    createNipple('static');

  };
}

else if (window.location.href.includes('self-driving.html')) {
  window.onload = function () {
    let p = new Host(window.location.origin + "/peer.html");

    p.getData(function (data) {
      alert(data);
    });
  
    p.getVideo(function (data) {
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



function settings() {
  setMapping(robot, mappings["tightControl"]);
  uploadCodeButton(robot);
  sendCodeSlider(robot);

  Object.keys(mappings).forEach(key => {
    var btn = document.getElementById(key);
    btn.onclick = function () {
      setMapping(robot, mappings[key]);
    };
  });
};