export const lineTracking = (canvas, context): void => {
  outlineSensors(canvas, context);

  var left = getAverage(context.getImageData(0, canvas.height - 50, (canvas.width / 3), 50));
  var centre = getAverage(context.getImageData((canvas.width / 3), canvas.height - 50, (canvas.width / 3), 50));
  var right = getAverage(context.getImageData(2 * (canvas.width / 3), canvas.height - 50, (canvas.width / 3), 50));
  //moveRobot(left, centre, right)
};


const outlineSensors = (canvas, context): void => {
  const sensorHeight = 90;
  context.strokeStyle = 'white';
  context.lineWidth = 1;
  context.strokeRect(0, canvas.height - sensorHeight, (canvas.width / 3), sensorHeight);
  context.strokeRect((canvas.width / 3), canvas.height - sensorHeight, (canvas.width / 3), sensorHeight);
  context.strokeRect(2 * (canvas.width / 3), canvas.height - sensorHeight, (canvas.width / 3) , sensorHeight);
};


// Function returning the average integer of the pixel array 
const getAverage = (pixels) => {
  const pixelArr = [];
  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  for (let i = 0; i < pixels.data.length; i = i+4) {
    pixelArr.push(pixels.data[i])
  }
  // returns average integer to 2 decimal places
  return average(pixelArr).toFixed(2);
};