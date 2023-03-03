import { Host, Connector } from "@espruino-tools/peer";


export class VideoTransfer {
  #isColourTrackingEnabled: boolean;
  #isGreyscaleEnabled: boolean;
  #isColourSpaceConversionEnabled: boolean;
  #host: Host;
  #peer: Connector;
  #hostVideo: HTMLVideoElement | null;
  #peerVideo: HTMLVideoElement | null;
  #stream: MediaStream | null;
  #activeHostCamera: InputDeviceInfo | null;
  #activePeerCamera: InputDeviceInfo | null;
  #cameras: MediaDeviceInfo[];
  canvas: any;
  context: any;

  constructor(peerDomain: string) {
    this.#host = new Host(peerDomain);
    this.#peer = new Connector();
    this.#hostVideo = null;
    this.#peerVideo = null;
    this.#stream = null;
    this.#isColourTrackingEnabled = false;
    this.#isGreyscaleEnabled = false;
    this.#isColourSpaceConversionEnabled = false;
    this.#activeHostCamera = null;
    this.#activePeerCamera = null;
    this.#cameras = [];
  };

  getHost = (): Host => {
    return this.#host;
  };
  getPeer = (): Connector => {
    return this.#peer;
  };

  getIsColourTrackingEnabled = (): boolean => {
    return this.#isColourTrackingEnabled;
  };
  setIsColourTrackingEnabled = (value: boolean) => {
    this.#isColourTrackingEnabled = value;
  };

  getIsGreyscaleEnabled = (): boolean => {
    return this.#isGreyscaleEnabled;
  };
  setIsGreyscaleEnabled = (value: boolean) => {
    this.#isGreyscaleEnabled = value;
  };

  getIsColourSpaceConversionEnabled = (): boolean => {
    return this.#isColourSpaceConversionEnabled;
  };
  setIsColourSpaceConversionEnabled = (value: boolean) => {
    this.#isColourSpaceConversionEnabled = value;
  };

  getHostVideo = (): HTMLVideoElement | null => {
    return this.#hostVideo;
  };
  setHostVideo = (video: HTMLVideoElement): void => {
    this.#hostVideo = video;
  };
  getPeerVideo = (): HTMLVideoElement | null => {
    return this.#peerVideo;
  };
  setPeerVideo = (video: HTMLVideoElement): void => {
    this.#peerVideo = video;
  };

  getActiveHostCamera = (): InputDeviceInfo | null => {
    return this.#activeHostCamera;
  };
  setActiveHostCamera = (camera: InputDeviceInfo): void => {
    this.#activeHostCamera = camera
  };
  getActivePeerCamera = (): InputDeviceInfo | null => {
    return this.#activePeerCamera;
  };
  setActivePeerCamera = (camera: InputDeviceInfo): void => {
    this.#activePeerCamera = camera
  };

  getCameras = (): MediaDeviceInfo[] => {
    return this.#cameras;
  };
  addCamera = (camera: MediaDeviceInfo): void => {
    this.#cameras.push(camera);
  };

  getCanvas = (): any => {
    return this.canvas;
  };
  setCanvas = (canvas: any): void => {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  };
  getContext = (): any => {
    return this.context;
  }



  videoTransfer = async (): Promise<void> => {
    await this.getVideo(true, false);
  };

  displayVideo = async (data: any = null, isRecieving: boolean = false): Promise<void> => {
    await this.getVideo(false, isRecieving);
    if (this.#hostVideo) {
      this.#hostVideo.srcObject = data != null ? data : this.#stream;
      this.#hostVideo.play();
    };
  };


  getVideo = async (isPeer: boolean = false, isRecieving: boolean = false) => {
    try {
      if (this.#stream) {
        this.#stream.getTracks().forEach(track => track.stop());
      }
      if (isPeer) {
        if (this.#activePeerCamera) {
          alert(`Transferring video from ${this.#activePeerCamera.label} camera`);
          await (navigator as any).getUserMedia(
            { audio: false, video: { deviceId: { exact: this.#activePeerCamera.deviceId }}},
            (stream: any) => { 
              var call = this.#peer.peer.call(this.#getPeerId(), stream);
            });
        } else {
          alert("Please select a peer camera");
        };
      } 
      else {
        if (this.#activeHostCamera) {
          this.#stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { deviceId: { exact: this.#activeHostCamera.deviceId}}});
        } else {
          if (!isRecieving) alert("Please select a host camera");
          return;
        };
      };
    }
    catch (e) {
      alert(e);
    };
  };

  #getPeerId(): string {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.id;
  }
};