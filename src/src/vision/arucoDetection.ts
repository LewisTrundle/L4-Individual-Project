const aruco = require('js-aruco');
var detector = new aruco.AR.Detector();
var POS = aruco.POS1;


export const detectArucoMarkers = (canvas, context): void => {
  var markers = detector.detect(context.getImageData(0, 0, canvas.width, canvas.height));
  if (markers.length > 0) {
    var posit = new POS.Posit(50, canvas.width);
    var corners = markers[0].corners;

    for (var i = 0; i < corners.length; ++ i){
      var corner = corners[i];
      corner.x = corner.x - (canvas.width / 2);
      corner.y = (canvas.height / 2) - corner.y;
    };
    var pose = posit.pose(corners);
    console.log("pose", pose.bestTranslation)
  };
};