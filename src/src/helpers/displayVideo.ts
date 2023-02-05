import { cameras } from '../settings/cameras';

export const transferVideo = (peer): void => {
  var activeCameraButton = document.querySelector(".active");
  let activeCamera;
  switch(activeCameraButton?.id) {
    case "frontPeerBtn":
      activeCamera = cameras.peerFront;
      break;
    case "backPeerBtn":
      activeCamera = cameras.peerBack;
      break;
    default:
      alert("Please select a camera");
      return;
  };
  peer.videoTransfer(activeCamera.getMode());
};


export const isCameraSelected = (host): void => {
  var activeCameraButton = document.querySelector(".active");
  let activeCamera;
  switch(activeCameraButton?.id) {
    case "frontHostBtn":
      activeCamera = cameras.hostFront;
      break;
    case "backHostBtn":
      activeCamera = cameras.hostBack;
      break;
    default:
      alert("Please select a camera");
      return;
  };
};

export const detectCameras = async (host): Promise<void> => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter((device) => device.kind === "videoinput")

  var select = document.getElementById("select");

  videoDevices.forEach((device) => {
    const d = document.createElement("option");
    d.innerHTML = device.label;
    select.appendChild(d);

    d.addEventListener("onclick", () => {
      host.setActiveCamera(d);
    });
  });
};