export const convertToGreyscale = (context): void => {
  context.filter = 'grayscale(1)';
};

export const convertColourSpace = (canvas, context): void => {
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