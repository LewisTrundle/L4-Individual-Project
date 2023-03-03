const jsQR = require("jsqr");
const aruco = require('js-aruco');
var detector = new aruco.AR.Detector();
let canvasMidpoint;

/**
 * The main function for controlling marker detection.
 * @param connection the camera connection
 * @param robot the connected robot
 */
export const detectMarkers = (connection, robot): void => {
  canvasMidpoint = {x: connection.getCanvas().width / 2, y: connection.getCanvas().height / 2};
  drawMidpoint(connection);
  detectQRMarkers(connection, robot);
};


/**
 * Draws a central point on the canvas.
 * @param connection the camera connection
 * @param canvasMidpoint the central point of the canvas
 */
const drawMidpoint = (connection): void => {
  let c = connection.getContext();
  let canvas = connection.getCanvas();
  c.strokeStyle = 'white';
  c.lineWidth = 2;

  c.moveTo(0, canvasMidpoint.y);
  c.lineTo(canvas.width, canvasMidpoint.y);
  c.stroke();
  c.moveTo(canvasMidpoint.x, 0);
  c.lineTo(canvasMidpoint.x, canvas.height);
  c.stroke();

  c.beginPath();
  c.arc(canvasMidpoint.x, canvasMidpoint.y, 10, 0, 2 * Math.PI);
  c.stroke();
};


const detectQRMarkers = (connection, robot): void => {
  let canvas = connection.getCanvas();
  let imageData = new Uint8Array();
  imageData = connection.getContext().getImageData(0, 0, canvas.width, canvas.height);
  
  const qrCode = jsQR(imageData["data"], canvas.width, canvas.height);
  var markers = detector.detect(connection.getContext().getImageData(0, 0, canvas.width, canvas.height));
  let angle;

  if (qrCode) {
    robot.continue();
    angle = getAngleToTurn(qrCode, true);
    robot.moveRobot(angle, 1.0);
  }
  else if (markers.length > 0) {
    robot.continue();
    var aruco = markers[0].corners;
    angle = getAngleToTurn(aruco, false);
    robot.moveRobot(angle, 1.0);
  }
  else {
    robot.stop();
  };
};


const getAngleToTurn = (marker, isQR: boolean): number => {
  let orientationVector;
  let directionVector;
  if (isQR) {
    orientationVector = getOrientationVector(marker.location.topLeftCorner, marker.location.topRightCorner);
    directionVector = getDirectionVector(marker.location.bottomLeftCorner, marker.location.topRightCorner);
  }
  else {
    orientationVector = getOrientationVector(marker[0], marker[1]);
    directionVector = getDirectionVector(marker[0], marker[2]);
  }

  // gets the degree of alignment between the orientation and direction vector
  const dotProduct = directionVector.x * orientationVector.x + directionVector.y * orientationVector.y;
  // gets vector which is perpendicular to both the direction vector and orientation vector
  const crossProduct = (directionVector.x * orientationVector.y) - (directionVector.y * orientationVector.x);
  // gets the angle between the robot's orientation vector and the direction vector
  const angleToTurn = Math.atan2(crossProduct, dotProduct);
  const adjustedAngle = ((angleToTurn * 180 / Math.PI) +360) % 360;

  return adjustedAngle;
}


const getDirectionVector = (c1, c2) => {
  // get direction vector from mid-point of qr code to canvas center
  let x = (c1.x + c2.x)/2
  let y = (c1.y + c2.y)/2
  const dx = canvasMidpoint.x - x;
  const dy = canvasMidpoint.y - y;
  return { x: dx, y: dy };
};


// calculate angle between top right and top left corner
// atan2 takes sign into account allowing for correct angle in all 4 quadrants
const getQROrientation = (qrCode) => {
  const topLeft = qrCode.location.topLeftCorner;
  const topRight = qrCode.location.topRightCorner;
  const dx = topRight.x - topLeft.x;
  const dy = topRight.y - topLeft.y;
  const orientation =  Math.atan2(dy, dx);
  return { x: Math.cos(orientation), y: Math.sin(orientation) };
};

const getOrientationVector = (c1, c2) => {
  const dx = c2.x - c1.x;
  const dy = c2.y - c1.y;
  const orientation =  Math.atan2(dy, dx);
  return { x: Math.cos(orientation), y: Math.sin(orientation) };
};