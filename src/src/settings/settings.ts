import { mappings } from "./angleMotorMappings";
import * as nipplejs from 'nipplejs';


export function settings(robot) {
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


export function createNipple(evt, robot) {
  const joyZone = document.getElementById("joyzone");
  joysticks[evt].zone = joyZone;
  var joystick = nipplejs.create(joysticks[evt]);
  bindNipple(joystick, robot);
};


var joysticks = {
  static: {
    zone: null,
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

function bindNipple(joystick, robot) {
  joystick.on('start', function(evt, data) {
    robot.start();
  }).on('end', function(evt, data) {
    robot.stop();
  }
  ).on('move', function(evt, data) {
    robot.moveRobot(data.angle.degree, data.force);
  });
};


function setMapping(robot, mapping) {
  robot.setMapping(mapping);
  var mappingText = document.getElementById("mappingText");
  mappingText.innerHTML = `Angle-Motor Mapping: ${mapping.name}`;
};


function sendCodeSlider(robot) {
  var sendCodeSlider = document.getElementById("sendCodeSlider");
  var output = document.getElementById("output");
  var sendCodeSpeedText = document.getElementById("sendCodeSpeedText");
  sendCodeSpeedText.innerHTML = `Speed is sent to robot every: ${robot.getSendCodeSpeed()} ms`

  sendCodeSlider.addEventListener('input', function () {
    const value = sendCodeSlider['value'];
    output.innerHTML = `${value} ms;`
    robot.setSendCodeSpeed(value);
    sendCodeSpeedText.innerHTML = `Speed is sent to robot every: ${robot.getSendCodeSpeed()} ms`
  }, false);
};



function uploadCodeButton(robot) {
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
    getDeviceCode(robot, codeOnRobot);
  };
  getCodeBtn.onclick = function() {
    getDeviceCode(robot, codeOnRobot);
  };
  resetCodeBtn.onclick = async function() {
    await robot.reset();
    getDeviceCode(robot, codeOnRobot);
  };
};


function getDeviceCode(robot, text: HTMLElement) {
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