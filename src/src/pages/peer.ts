import { peerPage } from "../components/peer";
import { Peer } from "../classes/Peer";
import { pickCamera } from "../helpers/pickCamera";
import { transferVideo } from "../helpers/displayVideo";
import "../styles/app.scss";

let peer = new Peer();

export const videoTransfer = (): void => {
  transferVideo(peer);
};


window.onload = function () {
  peerPage();
  pickCamera();
};
