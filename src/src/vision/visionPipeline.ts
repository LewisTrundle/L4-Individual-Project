import { drawCanvas } from "./drawCanvas";
import { colourTracker } from "./colourTracker";

export const visionPipeline = async (tracking, video): Promise<void> => {
  let canvas = document.getElementById("canvas") as HTMLCanvasElement;
  let context = canvas.getContext('2d');

  drawCanvas(video, canvas, context);
  colourTracker(tracking, canvas, context);
};