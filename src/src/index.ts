import { indexPage, joystickPage, selfDrivingPage, joyZone } from "./components";
import { Host } from "@espruino-tools/peer";
import { Robot } from './robot';
import * as nipplejs from 'nipplejs';
import "./styles/app.scss";


var robot = new Robot();
// no whitespace allowed between () and {
// no whitespace allowed between functions
// get device code doesn't work
let code = `
function turn(args){
  speeds = args.split(',');
  analogWrite("D10", speeds[0]);
  analogWrite("D9", speeds[1]);
}
function switchMotor(args){
  args = args.split(',');
  pin = args[0];
  d = args[1];
  digitalWrite(pin, d);
}
function getPinValue(pin){
  return eval(pin +".getInfo()");
}
function stop(){
  digitalWrite("D9", 0);
  digitalWrite("D10", 0);
}
`;


// ----- BUTTONS -----
export function connect() {
  robot.connectRobot();
};
export function disconnect() {
  robot.disconnectRobot()
};
export function getBattery() {
  robot.getBatteryRobot();
}


// ----- MOVEMENT -----
function start() {
  robot.start();
}

function stop() {
  robot.stop();
};

function getSpeeds(angle) {
  robot.getSpeeds(angle);
};


/* RENDER HTML PAGES */

/* JOYSTICK PAGE */
if (window.location.href.includes('joystick.html')) {
  window.onload = function () {
    joystickPage();

    var joystick;
    var joysticks = {
      static: {
        zone: joyZone,
        mode: 'static',
        size: 230,
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
        console.log("moving robot");
        start();
      }).on('end', function(evt, data) {
        console.log("stopping robot");
        stop();
      }
      ).on('move', function(evt, data) {
        getSpeeds(data.angle);
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
}



/* CODE GRAVEYARD

export function upload() {
  console.log("Uploading code");
  robot.loadCode(code);
  console.log("Code Uploaded");
}

export function getDeviceCode() {
  robot.dump().then((deviceData) => {
    console.log(deviceData);
  });
}

export function reset() {
  console.log("Resetting code on device");
  robot.reset();
  console.log("Code reset");
}

*/
