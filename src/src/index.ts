import { indexPage, joystickPage, selfDrivingPage, joyZone } from "./components";
import { mappings } from "./angleMotorMappings";
import { Host } from "@espruino-tools/peer";
import { Robot } from './robot';
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

function setMapping(mapping) {
  robot.setMapping(mapping);
  var mappingText = document.getElementById("mappingText");
  mappingText.innerHTML = `Angle-Motor Mapping: ${mapping.name}`;
};

function uploadCodeButton() {
  const url = window.location.origin + "/robotCode.txt";
  var uploadCodeBtn = document.getElementById("uploadCodeBtn");
  var getCodeBtn = document.getElementById("getCodeBtn");
  var resetCodeBtn = document.getElementById("resetCodeBtn");
  var codeToUpload = document.getElementById("codeToUpload");
  var codeOnRobot = document.getElementById("codeOnRobot");

  // get code to be uploaded to robot
  fetchToText(url).then(async (rawCode: string) => {
    rawCode = formatCode(rawCode);
    codeToUpload.innerHTML = rawCode;
  });

  if (!robot.connected) {
    codeOnRobot.innerHTML = `Not connected to robot, please press <b>CONNECT<b>`
  };
  
  uploadCodeBtn.onclick = async function() {
    await robot.upload(url);
    getDeviceCode(codeOnRobot);
  };
  getCodeBtn.onclick = function() {
    getDeviceCode(codeOnRobot);
  };
  resetCodeBtn.onclick = async function() {
    await robot.reset();
    getDeviceCode(codeOnRobot);
  };
};


function getDeviceCode(text: HTMLElement) {
  robot.dump().then((deviceData) => {
    if (deviceData['data'].length > 0) {
      let formattedCode = formatCode(deviceData['data']);
      text.innerHTML = formattedCode;
    } else {
      text.innerHTML = `<b>THERE IS NO CODE ON THE ROBOT!<b>`
    }

  });
};


// TAKEN FROM https://github.com/espruino-tools/core/blob/production/src/device-controller.ts
async function fetchToText(url: string) {
  let data = await fetch(url).then((res: any) => {
    if (!res.ok) throw new Error(res.status);
    return res;
  });
  if (!data) throw new Error(`fetch on :${url} failed`);
  return await data.text();
}

const formatCode = (code) => {
  let formattedCode = code;
  const formats = {
    "{" : "<br>    ",
    ";" : "<br>    ",
    "}" : "<br><br>"
  };

  Object.keys(formats).forEach(key => {
    let idx = formattedCode.indexOf(key);
    while (idx !== -1) {
      formattedCode = [formattedCode.slice(0, idx+1), formats[key], formattedCode.slice(idx+1)].join('');
      idx = formattedCode.indexOf(key, idx+1);
    };
  });
  return formattedCode;
};



/* RENDER HTML PAGES */

/* JOYSTICK PAGE */
if (window.location.href.includes('joystick.html')) {
  window.onload = function () {
    joystickPage();
    setMapping(mappings["tightControl"]);
    uploadCodeButton();

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
}
