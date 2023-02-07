import { colourTracker } from "./colourTracker";
import { convertToGreyscale } from "./colourSpaceConversion";
import { convertColourSpace } from "./colourSpaceConversion";
import { detectArucoMarkers } from "./arucoDetection";
import { lineTracking } from "./lineTracking";

const tracking = require('jstracking');

let greyscaleBtn;
let colourSpaceBtn;

export const visionPipeline = async (host, video, robot): Promise<void> => {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  let context = canvas.getContext('2d');

  canvasSetup(host);
  drawCanvas(host, video, canvas, context)
  colourTracker(host, tracking, canvas, context);
};


// ----------- CANVAS SETUP START ----------
const canvasSetup = (host): void => {
  convertToGreyscaleBtn(host);
  convertColourSpaceBtn(host);
};

const convertToGreyscaleBtn = (host): void => {
  greyscaleBtn = document.getElementById("greyscaleBtn");
  greyscaleBtn.addEventListener("click", () => { 
    host.setIsGreyscaleEnabled(!host.getIsGreyscaleEnabled());
  });
};

const convertColourSpaceBtn = (host): void => {
  colourSpaceBtn = document.getElementById("colourSpaceBtn");
  colourSpaceBtn.addEventListener("click", () => { 
    host.setIsColourSpaceConversionEnabled(!host.getIsColourSpaceConversionEnabled());
  });
};
// ----------- CANVAS SETUP END ----------




const drawCanvas = (host, video, canvas, context): void => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  if (canvas.width > 0 && canvas.height > 0) {
    
    convertToGreyscale(host, greyscaleBtn, context, video);

    convertColourSpace(host, colourSpaceBtn, canvas, context, video);

    //lineTracking(canvas, context);

    detectArucoMarkers(canvas, context);

  };

  setTimeout(function () {
    drawCanvas(host, video, canvas, context);
  }, 10);
};