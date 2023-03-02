// get page components
import { selfDrivingPage } from "../components/host";
import { peerPage } from "../components/peer";
// get classes
import { Robot } from '../classes/Robot';
import { VideoTransfer } from "../classes/VideoFeed";
// import settings
import { settings } from '../settings/settings';
// import vision pipeline
import { visionPipeline } from "../vision/visionPipeline";
// import styles
import "../styles/app.scss";

let robot = new Robot();
let connection = new VideoTransfer(window.location.origin + "/peer.html");


export const videoTransfer = (): void => {
  connection.videoTransfer();
};
export const videoDisplay = async (data?: any, isRecieving: boolean = false): Promise<void> => {
  connection.displayVideo(data, isRecieving);
};
export const connectRobot = (): void => {
  robot.connectRobot();
};
export const disconnectRobot = ():void => {
  robot.disconnectRobot();
};
export const startRobot = (): void => {
  robot.start();
};
export const stopRobot = (): void => {
  robot.stop();
};



if (window.location.toString().includes("host")) {
  window.onload = async function () {
    selfDrivingPage();
    settings(robot, false);
    detectCameras();

    let video = document.querySelector('#video') as HTMLVideoElement;
    connection.setHostVideo(video);

    video.addEventListener('loadeddata', function() {
      visionPipeline(connection, video, robot);
    }, false);

    connection.getHost().getVideo(async function (data: any) {
      await videoDisplay(data, true);
    });
  };
}

else if (window.location.toString().includes("peer")) {
  window.onload = function () {
    peerPage();
    detectCameras(true);

    let video = document.querySelector('#video') as HTMLVideoElement;
    connection.setPeerVideo(video);
  };
};


/**
 * Gets camera permissions from the user and displays a drop-down list of all connected cameras.
 * @param isPeer is the device a peer or host
 */
const detectCameras = async (isPeer: boolean = false): Promise<void> => {
  // try getting camera permissions
  try {
    await navigator.mediaDevices.getUserMedia({video: true});
  } catch (err) {
    alert("Please give camera permissions");
  };

  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter((device) => device.kind === "videoinput")
  var select = document.getElementById("select") as HTMLSelectElement;

  // set active camera
  select.addEventListener("change", () => {
    const camera = connection.getCameras().filter((camera) => camera.label==select.value)[0];
    if (isPeer) {
      connection.setActivePeerCamera(camera);
    } else {
      connection.setActiveHostCamera(camera);
    };
  });

  // add devices to list
  videoDevices.forEach((device) => {
    const d = document.createElement("option");
    d.innerHTML = device.label;
    select.appendChild(d);
    connection.addCamera(device);
  });
};