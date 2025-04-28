/**
 * Create Canvas element and return its element and context objects.
 *
 * @param width Canvas width
 * @param height Canvas height
 * @returns Canvas and Context objects
 */
function createCanvas(width: number, height: number) {
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Failed to get canvas context');
  }

  return { canvas, context };
}

export { createCanvas };
