import { selfDrivingPage } from "../components/host";
import { settings } from '../settings/settings';
import { Robot } from '../classes/Robot';
import { VideoFeed } from "../classes/VideoFeed";
import { pickCamera } from "../helpers/pickCamera";
import { visionPipeline } from "../vision/visionPipeline";
import "../styles/app.scss";
import { isCameraSelected, detectCameras } from "../helpers/displayVideo";


let robot = new Robot();
let host = new VideoFeed(window.location.origin + "/peer.html");

let video;
let stream;


window.onload = async function () {
  selfDrivingPage();
  settings(robot, false);
  detectCameras(host);
  pickCamera();

  host.getVideo(async function (data) {
    await stopVideo();
    displayVideo(data);
  });
  
  video = document.querySelector('#video') as HTMLVideoElement;
  video.addEventListener('loadeddata', function() {
    visionPipeline(host, video, robot);
 }, false);

 video.addEventListener('onended', function() {
    alert("video ended");
 }, false);
};



export const videoDisplay = async (): Promise<void> => {
  isCameraSelected(host);
  await stopVideo();
  displayVideo(stream);
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


const stopVideo = async (): Promise<void> => {
  try {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true});
  }
  catch (e) {
    alert(e);
  };
};



const displayVideo = (data): void => {
  video.srcObject = data;
  video.play();
};