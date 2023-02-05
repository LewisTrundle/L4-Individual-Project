import { Camera } from '../classes/Camera';

const hostFront = new Camera("Host: Front", "frontHostBtn", "user", false);
const hostBack = new Camera("Host: Back", "backHostBtn", "environment", false);
const peerFront = new Camera("Peer: Front", "frontPeerBtn", "front", true);
const peerBack = new Camera("Peer: Back", "backPeerBtn", "back", true);


export const cameras = {
  "hostFront": hostFront,
  "hostBack": hostBack,
  "peerFront": peerFront,
  "peerBack": peerBack
};