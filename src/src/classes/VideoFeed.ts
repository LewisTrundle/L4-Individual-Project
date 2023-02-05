import { Host } from "@espruino-tools/peer";
export class VideoFeed extends Host {
  activeCamera: any;

  constructor(peerDomain: string) {
    super();
    this.otherDeviceDomain = peerDomain;
    this.activeCamera = null;
  };

  getActiveCamera = (): any => {
    return this.activeCamera;
  };

  setActiveCamera = (camera: any):void => {
    this.activeCamera = camera;
  };
};