import { mappings } from "./angleMotorMappings";


export function settings(robot, isText: boolean = false) {
  setMapping(robot, mappings["tightControl"], isText);
  uploadCodeButton(robot);
  sendCodeSlider(robot, isText);

  Object.keys(mappings).forEach(key => {
    var btn = document.getElementById(key);
    btn.onclick = function () {
      setMapping(robot, mappings[key], isText);
    };
  });
};


function setMapping(robot, mapping, isText) {
  robot.setMapping(mapping);
  if (isText) {
    var mappingText = document.getElementById("mappingText");
    mappingText.innerHTML = `Angle-Motor Mapping: ${mapping.name}`;
  };
};


function sendCodeSlider(robot, isText) {
  var sendCodeSlider = document.getElementById("sendCodeSlider");
  var output = document.getElementById("output");
  if (isText) {
    var sendCodeSpeedText = document.getElementById("sendCodeSpeedText");
    sendCodeSpeedText.innerHTML = `Speed is sent to robot every: ${robot.getSendCodeSpeed()} ms`
  };

  sendCodeSlider.addEventListener('input', function () {
    const value = sendCodeSlider['value'];
    output.innerHTML = `${value} ms;`
    robot.setSendCodeSpeed(value);
    if (isText) {
      sendCodeSpeedText.innerHTML = `Speed is sent to robot every: ${robot.getSendCodeSpeed()} ms`
    };
  }, false);
};



function uploadCodeButton(robot) {
  const url = window.location.origin + "/robotCode/robotCode.txt";
  var uploadCodeBtn = document.getElementById("uploadCodeBtn");
  var getCodeBtn = document.getElementById("getCodeBtn");
  var resetCodeBtn = document.getElementById("resetCodeBtn");
  var codeToUpload = document.getElementById("codeToUpload");
  var codeOnRobot = document.getElementById("codeOnRobot");

  // get code to be uploaded to robot
  getText(url).then(async (rawCode: string) => {
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


async function getText(url: string) {
  let d = await fetch(url).then((res: any) => {
    if (!res.ok) throw new Error(res.status);
    return res;
  });
  if (!d) throw new Error(`fetch failed`);
  return await d.text();
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