export const convertToGreyscale = (host, button, context): void => {
  const isGreyscale = host.getIsGreyscaleEnabled();
  if (isGreyscale) {
    button.innerHTML = "Convert to greyscale";
  } else {
    button.innerHTML = "Unconvert from greyscale";
    context.filter = 'grayscale(1)';
  };
};

export const convertColourSpace = (host, button, canvas, context): void => {
  const isColourSpaceEnabled = host.getIsColourSpaceConversionEnabled();
  if (isColourSpaceEnabled) {
    button.innerHTML = "Convert colour space";
  } else {
    button.innerHTML = "Unconvert colour space";

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i+=4) {
      if (imageData.data[i] <= 100 && imageData.data[i+1] >= 80 && imageData.data[i+1] <= 160 && imageData.data[i+2] >= 100) {
        imageData.data[i] = 0; // red
        imageData.data[i + 1] = 255; // green
        imageData.data[i + 2] = 0; // blue
        imageData.data[i + 3] = 255;
      };
    };
    context.putImageData(imageData, 0, 0);
  };
};