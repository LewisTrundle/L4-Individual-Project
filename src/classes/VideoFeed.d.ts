import { Host, Connector } from "@espruino-tools/peer";
export declare class VideoTransfer {
    #private;
    canvas: any;
    context: any;
    constructor(peerDomain: string);
    getHost: () => Host;
    getPeer: () => Connector;
    getIsColourTrackingEnabled: () => boolean;
    setIsColourTrackingEnabled: (value: boolean) => void;
    getIsGreyscaleEnabled: () => boolean;
    setIsGreyscaleEnabled: (value: boolean) => void;
    getIsColourSpaceConversionEnabled: () => boolean;
    setIsColourSpaceConversionEnabled: (value: boolean) => void;
    getHostVideo: () => HTMLVideoElement | null;
    setHostVideo: (video: HTMLVideoElement) => void;
    getPeerVideo: () => HTMLVideoElement | null;
    setPeerVideo: (video: HTMLVideoElement) => void;
    getActiveHostCamera: () => InputDeviceInfo | null;
    setActiveHostCamera: (camera: InputDeviceInfo) => void;
    getActivePeerCamera: () => InputDeviceInfo | null;
    setActivePeerCamera: (camera: InputDeviceInfo) => void;
    getCameras: () => MediaDeviceInfo[];
    addCamera: (camera: MediaDeviceInfo) => void;
    getCanvas: () => any;
    setCanvas: (canvas: any) => void;
    getContext: () => any;
    videoTransfer: () => Promise<void>;
    displayVideo: (data?: any, isRecieving?: boolean) => Promise<void>;
    getVideo: (isPeer?: boolean, isRecieving?: boolean) => Promise<void>;
}
