const colours = {
  "red": {r:90, g:80, b:80},
  "green": {r:80, g:100, b:150},
  "blue": {r:0, g:0, b:0},
  "black": {r:0, g:0, b:0},

}

export const convertToGreyscale = (host, button, context, video): void => {
  const isGreyscale = host.getIsGreyscaleEnabled();
  if (isGreyscale) {
    button.innerHTML = "Convert to greyscale";
  } else {
    button.innerHTML = "Unconvert from greyscale";
    context.filter = 'grayscale(1)';
  };
  context.drawImage(video, 0, 0);
};

export const convertColourSpace = (host, button, canvas, context, video, colour="green"): void => {
  context.drawImage(video, 0, 0);
  const isColourSpaceEnabled = host.getIsColourSpaceConversionEnabled();
  if (isColourSpaceEnabled) {
    button.innerHTML = "Convert colour space";
  } else {
    button.innerHTML = "Unconvert colour space";

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i+=4) {
      if (imageData.data[i] >= colours[colour].r && 
          imageData.data[i+1] <= colours[colour].g && 
          imageData.data[i+2] <= colours[colour].b) {
        imageData.data[i] = 255; // red
        imageData.data[i + 1] = 0; // green
        imageData.data[i + 2] = 0; // blue
        imageData.data[i + 3] = 255; //alpha
      };
    };
    context.putImageData(imageData, 0, 0);
  };
};