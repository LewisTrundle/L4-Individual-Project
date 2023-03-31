let isColourTracking = true;

const colours = {
  'red': {r: 200, g: 30, b: 30},
  'black': {r: 0, g: 0, b: 0},
  'blue': {r: 30, g:30, b: 200},
  'green': {r: 30, g: 200, b: 30}
};


export const colourTracker = (host, tracking, canvas, context): void => {
  for (const [colourName, colourValues] of Object.entries(colours)) {
    registerColour(tracking, colourName, colourValues);
  };
  var colors = new tracking.ColorTracker(['black', 'red', 'green', 'blue']);

  colors.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (event.data.length === 0) {
      console.log("no colours")
    } else {
      event.data.forEach(function(rect) {
        context.strokeStyle = rect.color;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        context.font = '11px Helvetica';
        context.fillStyle = "#fff";
        context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
        context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
      });
    };
  });

  var colourTracking = tracking.track('#video', colors, {fps: 60});
  toggleColourTrackingBtn(host, colourTracking);
};


const registerColour = (tracking: any, colourName: string, values): void => {
  const uncertainty = 50;
  tracking.ColorTracker.registerColor(colourName, function(r, g, b) {
    if  ( (r >= values.r-uncertainty) && (r <= values.r+uncertainty) &&
      (g >= values.g-uncertainty) && (g <= values.g+uncertainty) &&
      (b >= values.b-uncertainty) && (b <= values.b+uncertainty) ) {
        return true;
    } else {
      return false;
    }
  });
};


const toggleColourTrackingBtn = (host, trackerTask): void => {
  let colourTrackingBtn = document.getElementById("colourTrackingBtn");
  toggleColourTracking(host, trackerTask, colourTrackingBtn, isColourTracking);
  
  colourTrackingBtn.addEventListener("click", () => {
    toggleColourTracking(host, trackerTask, colourTrackingBtn, isColourTracking);
  });
};

const toggleColourTracking = (host, trackerTask, button, isColourTracking): void => {
  isColourTracking = host.getIsColourTrackingEnabled();
  if (!isColourTracking) {
    trackerTask.run();
    button.innerHTML = `Stop Colour Tracking`;
    host.setIsColourTrackingEnabled(true);
  } else {
    trackerTask.stop();
    button.innerHTML = `Start Colour Tracking`;
    host.setIsColourTrackingEnabled(false);
  };
};