import { Host } from "@espruino-tools/peer";
export class VideoFeed extends Host {
  isColourTrackingEnabled: boolean;
  isGreyscaleEnabled: boolean;
  isColourSpaceConversionEnabled: boolean;

  constructor(peerDomain: string) {
    super();
    this.otherDeviceDomain = peerDomain;
    this.isColourTrackingEnabled = false;
    this.isGreyscaleEnabled = false;
    this.isColourSpaceConversionEnabled = false;
  };

  getIsColourTrackingEnabled = (): boolean => {
    return this.isColourTrackingEnabled;
  };

  setIsColourTrackingEnabled = (value: boolean) => {
    this.isColourTrackingEnabled = value;
  };

  getIsGreyscaleEnabled = (): boolean => {
    return this.isGreyscaleEnabled;
  };

  setIsGreyscaleEnabled = (value: boolean) => {
    this.isGreyscaleEnabled = value;
  };

  getIsColourSpaceConversionEnabled = (): boolean => {
    return this.isColourSpaceConversionEnabled;
  };

  setIsColourSpaceConversionEnabled = (value: boolean) => {
    this.isColourSpaceConversionEnabled = value;
  };


};