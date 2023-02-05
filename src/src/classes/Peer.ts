import { Connector } from "@espruino-tools/peer";

export class Peer extends Connector {
  #isPeerConnected: boolean;

  constructor() {
    super();
    this.#isPeerConnected = false;
  };

  videoTransfer = (mode: string) => {
    alert(`Transferring video from ${mode} camera`);
    this.connectVideo(mode);
  };


  getIsPeerConnected = (): boolean => {
    return this.#isPeerConnected;
  };

  setIsPeerConnected = (isPeerConnected: boolean) => {
    this.#isPeerConnected = isPeerConnected;
  };
};