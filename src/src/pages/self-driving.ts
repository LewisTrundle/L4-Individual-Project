import { selfDrivingPage } from "../components/self-driving";
import { settings } from '../settings/settings';

import { Host } from "@espruino-tools/peer";
import { Robot } from '../robot';
import "../styles/app.scss";

var robot = new Robot();


function addSettings(robot, isText: boolean = false) {
  settings(robot, isText);
};


window.onload = function () {
  selfDrivingPage();
  addSettings(robot);
  lineTracking();

  canvas = document.getElementById("canvas") as HTMLCanvasElement;
  context = canvas.getContext('2d');
  videoElm = document.querySelector('#video') as HTMLVideoElement;



  let p = new Host(window.location.origin + "/peer.html");
  p.getData(function (data) {
    alert(data);
    console.log("getDataHost ", data);
  });

  p.getVideo(function (data) {
    videoElm.srcObject = data;
    videoElm.play();
    robot.start();
    draw(videoElm);
  });
};

const lineTracking = () => {
  const cameras = {
    hostFront: {button: "frontHostBtn", facingMode: "user"},
    hostBack: {button: "backHostBtn", facingMode: "environment"},
    peerFront: {button: "frontPeerBtn", facingMode: "front"},
    peerBack: {button: "backPeerBtn", facingMode: "back"}
  };

  for (const [camera, info] of Object.entries(cameras)) {
    const button = document.getElementById(info.button);
    
    button.addEventListener("click", async () => {
      makeActive(button);
      //await robot.start();              // try to connect to robot
      //if (!robot.connected) return;     // if user doesn't connect to robot, don't connect to camera
      await capture(info.facingMode);
      //draw(videoElm);
    });
  };
};


const makeActive = (button) => {
  var activeCameraButton = document.querySelector(".active");
  activeCameraButton.classList.remove("active");
  button.classList.add("active");
  activeCameraButton = button;
};


let videoElm;
let stream;
var canvas;
var context;



const capture = async facingMode => {
  if (facingMode == "front" || facingMode == "back") {
    
  };


  const options = {
    audio: false,
    video: { facingMode },
  };

  try {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    stream = await navigator.mediaDevices.getUserMedia(options);
  } catch (e) {
    alert(e);
    return;
  }
  videoElm.srcObject = null;
  videoElm.srcObject = stream;
  videoElm.play();
};


/** 
   * Draws video stream onto canvas and adds greyscale filter.
   * Divides the bottom portion of the screen into three sections to act as sensors.
   */
function draw(videoElm) {

  canvas.width = videoElm.videoWidth;
  canvas.height = videoElm.videoHeight;


  // converting the canvas into greyscale filter 
  context.filter = 'grayscale(1)';

  context.drawImage(videoElm, 0, 0);

  if (canvas.height > 0) {
    var left = getAverage(context.getImageData(0, canvas.height - 50, (canvas.width / 3), 50));
    var centre = getAverage(context.getImageData((canvas.width / 3), canvas.height - 50, (canvas.width / 3), 50));
    var right = getAverage(context.getImageData(2 * (canvas.width / 3), canvas.height - 50, (canvas.width / 3), 50));

    /* Outline the sensors in a white rectangle border */
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    context.strokeRect(0, canvas.height - 50, (canvas.width / 3), 50);
    context.strokeRect((canvas.width / 3), canvas.height - 50, (canvas.width / 3), 50);
    context.strokeRect(2 * (canvas.width / 3), canvas.height - 50, (canvas.width / 3) , 50);
    

    // Calling function to start moving the robot using the retrieved sensors 
    moveRobot(centre, left, right);
  }

  setTimeout(function () {
    draw(videoElm);
  }, 10);
}


// Function returning the average integer of the pixel array 
function getAverage(pixels) {
  const pixelArr = [];
  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

  for (let i = 0; i < pixels.data.length; i = i+4) {
    pixelArr.push(pixels.data[i])
  }

  // returns average integer to 2 decimal places
  return average(pixelArr).toFixed(2);
}


/* Conditionals for each sensor signalling which direction to move the robot */
function moveRobot(centreSensor, leftSensor, rightSensor) {
  console.log(centreSensor, leftSensor, rightSensor);
  
  //console.log(centreSensor);
  if (centreSensor < 90) {
    console.log("robot moving forward");
    robot.moveRobot(90, 1);
  } else if (leftSensor < 90) {
    console.log("robot moving left");
    robot.moveRobot(180, 1);
  } else if (rightSensor < 90) {
    console.log("robot moving right");
    robot.moveRobot(0, 1);
  }
  return
}