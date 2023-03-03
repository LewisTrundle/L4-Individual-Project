import { colourTracker } from "./colourTracker";
import { convertToGreyscale } from "./colourSpaceConversion";
import { convertColourSpace } from "./colourSpaceConversion";
import { detectMarkers } from "./markerDetection";

const tracking = require('jstracking');
const FRAME_RATE: number = 20;

let greyscaleBtn;
let colourSpaceBtn;

export const visionPipeline = async (connection, video, robot): Promise<void> => {
  connection.setCanvas(document.getElementById("canvas") as HTMLCanvasElement);

  canvasSetup(connection);
  drawCanvas(connection, video, robot)
  colourTracker(connection, tracking, connection.getCanvas(), connection.getContext());
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




const drawCanvas = (connection, video, robot): void => {
  connection.getCanvas().width = video.videoWidth;
  connection.getCanvas().height = video.videoHeight;

  if (connection.getCanvas().width > 0 && connection.getCanvas().height > 0) {
    
    convertToGreyscale(connection, greyscaleBtn, connection.getContext(), video);

    convertColourSpace(connection, colourSpaceBtn, connection.getCanvas(), connection.getContext(), video);

    detectMarkers(connection, robot);

  };

  setTimeout(function () {
    drawCanvas(connection, video, robot);
  }, FRAME_RATE);
};