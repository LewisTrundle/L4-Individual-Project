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
  let canvas = connection.getCanvas();

  canvasMidpoint = {x: canvas.width / 2, y: canvas.height / 2};
  drawMidpoint(connection);

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


/**
 * 
 * @param marker the marker which has been detected
 * @param isQR is the maker a qr code of aruco marker
 * @returns 
 */
const getAngleToTurn = (marker: any, isQR: boolean): number => {
  let orientationVector;
  let directionVector;
  if (isQR) {
    orientationVector = getOrientationVector(marker.location.topLeftCorner, marker.location.topRightCorner);
    directionVector = getDirectionVector(marker.location.bottomLeftCorner, marker.location.topRightCorner);
  }
  else {
    orientationVector = getOrientationVector(marker[3], marker[2]);
    directionVector = getDirectionVector(marker[0], marker[2]);
  };

  // gets the degree of alignment between the orientation and direction vector
  const dotProduct = directionVector.x * orientationVector.x + directionVector.y * orientationVector.y;
  // gets vector which is perpendicular to both the direction vector and orientation vector
  const crossProduct = (directionVector.x * orientationVector.y) - (directionVector.y * orientationVector.x);
  // gets the angle between the robot's orientation vector and the direction vector
  const angleToTurn = Math.atan2(crossProduct, dotProduct);
  return ((angleToTurn * 180 / Math.PI) + 360) % 360;
};


/**
 * Gets the direction vector from mid-point of marker to canvas center.
 * @param c1 corner 1
 * @param c2 corner 2
 * @returns direction vector
 */
const getDirectionVector = (c1, c2): {x: number, y: number} => {
  const x = (c1.x + c2.x)/2
  const y = (c1.y + c2.y)/2
  const dx = canvasMidpoint.x - x;
  const dy = canvasMidpoint.y - y;
  return { x: dx, y: dy };
};


/**
 * Calculates angle between top corners to get the orientation of the marker.
 * @param c1 top-left corner of marker
 * @param c2 top-right corner of marker
 * @returns orientation vector
 */
const getOrientationVector = (c1, c2): {x: number, y: number} => {
  const dx = c2.x - c1.x;
  const dy = c2.y - c1.y;
  // atan2 takes sign into account allowing for correct angle in all 4 quadrants
  const orientation =  Math.atan2(dy, dx);
  return { x: Math.cos(orientation), y: Math.sin(orientation) };
};