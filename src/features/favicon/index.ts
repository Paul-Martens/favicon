import { palette, bitmap } from './data';

import { createCanvas } from './elements/canvas';

// Render the bitmap to canvas

const { canvas, context } = createCanvas(256, 256);

const pixelSize = canvas.width / 8;

bitmap.forEach((line, y) => {
  line.forEach((paletteIndex, x) => {
    context.fillStyle = palette[paletteIndex];
    context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
  });
});

// Export the canvas to PNG

const png = canvas.toDataURL('image/png');

const image = document.createElement('img');
image.src = png;

// Display the PNG image

const container = document.getElementById('favicon-container');

if (!container) {
  throw new Error('Favicon container not found');
}

container.appendChild(image);
