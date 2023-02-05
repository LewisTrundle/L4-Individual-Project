import { canvasSetup } from "./drawCanvas";
import { colourTracker } from "./colourTracker";

const tracking = require('jstracking');
var AR = require('js-aruco').AR;
var detector = new AR.Detector();

export const visionPipeline = async (host, video): Promise<void> => {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  let context = canvas.getContext('2d');

  canvasSetup(host, video, canvas, context);
  colourTracker(host, tracking, canvas, context);
};