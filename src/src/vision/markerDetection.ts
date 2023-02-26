const aruco = require('js-aruco');
const glMatrix = require('gl-matrix');
import { mat3, vec3, quat } from 'gl-matrix';
var detector = new aruco.AR.Detector();
var POS = aruco.POS1;
const jsQR = require("jsqr");

var angles = []
var robot;


const sendAngle = (): void => {
  const angle = angles.pop();
  if (angle) {
    robot.moveRobot(angle, 0.6);
  }
};

let sendAngleFunc = window.setInterval(sendAngle, 0.5);

// marker has to be at least 0.5m away from camera
export const detectMarkers = (canvas, context, r): void => {
  let canvasMidpoint = {x: canvas.width / 2, y: canvas.height / 2};
  robot = r
  drawMidpoint(canvas, context, canvasMidpoint);
  detectQRMarkers(canvas, context, canvasMidpoint, r);
  //detectArucoMarkers(canvas, context, canvasMidpoint);
};


const drawMidpoint = (canvas, context, canvasMidpoint): void => {
  context.strokeStyle = 'white';
  context.lineWidth = 2;

  context.moveTo(0, canvasMidpoint.y);
  context.lineTo(canvas.width, canvasMidpoint.y);
  context.stroke();
  context.moveTo(canvasMidpoint.x, 0);
  context.lineTo(canvasMidpoint.x, canvas.height);
  context.stroke();

  context.beginPath();
  context.arc(canvasMidpoint.x, canvasMidpoint.y, 10, 0, 2 * Math.PI);
  context.stroke();
};


const detectQRMarkers = (canvas, context, canvasMidpoint, robot): void => {
  let imageData = new Uint8Array();
  imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const qrCode = jsQR(imageData["data"], canvas.width, canvas.height);
  if (qrCode) {
    robot.continue();
    //console.log("Found QR code", qrCode);

    const orientation = getQROrientation(qrCode);

    let x = (qrCode.location.bottomLeftCorner.x + qrCode.location.topRightCorner.x)/2
    let y = (qrCode.location.bottomLeftCorner.y + qrCode.location.topRightCorner.y)/2
    
    const dx = canvasMidpoint.x - x;  // calculate the x-distance from robot to center
    const dy = canvasMidpoint.y - y;  // calculate the y-distance from robot to center
    const directionVector = { x: dx, y: dy };

    // Compute the angle between the robot's orientation vector and the direction vector
    const robotOrientationVector = { x: Math.cos(orientation), y: Math.sin(orientation) };
    const dotProduct = directionVector.x * robotOrientationVector.x + directionVector.y * robotOrientationVector.y;
    const crossProduct = directionVector.x * robotOrientationVector.y - directionVector.y * robotOrientationVector.x;
    const angleToTurn = Math.atan2(crossProduct, dotProduct);

    //console.log("angle to turn", angleToTurn * 180 / Math.PI);
    //console.log(x, y, canvasMidpoint.x, canvasMidpoint.y);
    //console.log("angle to turn", ((angleToTurn * 180 / Math.PI) +360) % 360);
    
    const adjustedAngle = ((angleToTurn * 180 / Math.PI) +360) % 360;
    angles.push(adjustedAngle);
    robot.moveRobot(adjustedAngle, 0.7);

    //const alpha = calcAlpha(canvasMidpoint.x, canvasMidpoint.y, x, y)
    //console.log("theta", alpha)
  }
  else {
    robot.stop();
  }
};


const detectArucoMarkers = (canvas, context, canvasMidpoint): void => {
  var markers = detector.detect(context.getImageData(0, 0, canvas.width, canvas.height));
  let acuroMidpoint = {x: null, y: null};
  if (markers.length > 0) {
    console.log(markers[0])
    var corners = markers[0].corners;

    // find the midpoint between corner 0 and 2
    acuroMidpoint.x = (corners[0].x + corners[2].x)/2
    acuroMidpoint.y = (corners[0].y + corners[2].y)/2
    let theta = calcAlpha(canvasMidpoint.x, canvasMidpoint.y, acuroMidpoint.x, acuroMidpoint.y);
    console.log("theta", theta)
    getOrientation(canvas, corners);
  };
}


const getQROrientation = (qrCode): number => {
  const topLeft = qrCode.location.topLeftCorner;
  const topRight = qrCode.location.topRightCorner;
  const dx = topRight.x - topLeft.x;
  const dy = topRight.y - topLeft.y;
  // calculate angle between top right and top left corner
  // atan2 takes sign into account allowing for correct angle in all 4 quadrants

  console.log("Orientation angle is ", Math.atan2(dy, dx) *180/Math.PI);
  return Math.atan2(dy, dx); // * (180 / Math.PI);
}



const getOrientation = (canvas, corners): void => {
  var posit = new POS.Posit(50, canvas.width);
  var pose = posit.pose(corners);
  console.log("pose", pose)
  let rotation = pose.bestRotation;

  // Assume that we have a 3x3 rotation matrix stored in the `rotation` variable
  console.log('rotation matrix:', rotation);

  // Flatten the matrix into a single array of 9 numbers
  rotation = [].concat(...rotation);
  console.log('rotation matrix:', rotation)
  
  // Convert the rotation matrix to a quaternion
  let q = quat.create();
  quat.fromMat3(q, rotation);


  // Calculate the magnitude of the quaternion
  let magnitude = Math.sqrt(q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3]);

  // Normalize the quaternion by dividing each component by the magnitude
  q[0] /= magnitude;
  q[1] /= magnitude;
  q[2] /= magnitude;
  q[3] /= magnitude;

  console.log(q)

  // Extract the angle of rotation from the quaternion
  let axisOfRotation = vec3.create();
  let angleInRadians = quat.getAxisAngle(axisOfRotation, q);
  let angle = angleInRadians * 180 / Math.PI;
  //let angle = 2 * Math.acos(q[3]) * 180 / Math.PI;
  console.log('angle of rotation:', angle);
};

const calcAlpha = (x1: number, y1: number, x2: number, y2: number): number => {
  let height = Math.abs(y2-y1);
  let width = Math.abs(x2-x1);
  let alpha;

  if (x2 > x1) {
    if (y2 < y1) {        // A quadrant
      alpha = 270 - (Math.atan(width / height) * 180 / Math.PI);
    }
    else if (y2 >= y1) {   // C quadrant
      alpha = 180 - (Math.atan(height / width) * 180 / Math.PI);
    };
  }
  else if (x2 < x1) { 
    if (y2 >= y1) {        // T quadrant
      alpha = Math.atan(height / width) * 180 / Math.PI;
    }
    else if (y2 < y1) {   // S quadrant
      alpha = 270 + (Math.atan(width / height) * 180 / Math.PI);
    };
  }
  else {
    if (y2 > y1) {        
      alpha = 270
    }
    else if (y2 < y1) {   
      alpha = 90
    }
    else {
      alpha = null;
    };
  };

  return alpha;
};


// get x and y coord of marker on canvas
// if coord less than middle point move forward - else 