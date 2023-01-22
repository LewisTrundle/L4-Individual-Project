import { indexPage, joystickPage, selfDrivingPage, joyZone } from "./components";
import { mappings } from "./angleMotorMappings";
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
};
export function diagnostic(angle?: number) {
  robot.diagnostic(angle);
};
export function setMapping(mapping) {
  robot.setMapping(mapping);
};


/* RENDER HTML PAGES */

/* JOYSTICK PAGE */
if (window.location.href.includes('joystick.html')) {
  window.onload = function () {
    joystickPage();
    setMapping(mappings["tightControl"]);

    Object.keys(mappings).forEach(key => {
      var btn = document.getElementById(key);
      btn.onclick = function () {
        setMapping(mappings[key]);
      };
    });

    var joystick;
    var joysticks = {
      static: {
        zone: joyZone,
        mode: 'static',
        size: 200,
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
