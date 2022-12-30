// Draws a triangle using the coordinates of the starting point (x1, y1),
// the width the height the color and an option for direction of the triangle (up)
const drawTriangle = (
  ctx,
  x1,
  y1,
  width,
  height,
  color = "rgba(0, 0, 0, 1)",
  up = true
) => {
  const x2 = x1 + width;
  const y2 = y1;
  const x3 = x1 + width / 2;
  let y3;

  if (up) {
    y3 = y1 - height;
  } else {
    y3 = y1 + height;
  }

  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
};

// Draws a set of triangles using drawTriangle() function
const drawGroupTriangle = (ctx, x1, y1, width, height, up = true) => {
  let x1C = x1;

  for (let i = 1; i <= 6; i++) {
    if (up) {
      if (i % 2 === 0) {
        drawTriangle(ctx, x1C, y1, width, height, "rgba(0, 0, 0, 0.2)", up);
      } else {
        drawTriangle(ctx, x1C, y1, width, height, "rgba(0, 0, 0, 0.5)", up);
      }

      x1C += width;
    } else {
      if (i % 2 === 0) {
        drawTriangle(ctx, x1C, y1, width, height, "rgba(0, 0, 0, 0.5)", false);
      } else {
        drawTriangle(ctx, x1C, y1, width, height, "rgba(0, 0, 0, 0.2)", false);
      }

      x1C += width;
    }
  }
};

export const drawBoard = (ctx) => {
  // Color of the inner boards and the checker boxes
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";

  // Left inner board
  ctx.fillRect(30, 30, 350, 540);
  ctx.strokeRect(30, 30, 350, 540);

  // Right inner board
  ctx.fillRect(440, 30, 350, 540);
  ctx.strokeRect(440, 30, 350, 540);

  // Top checker box
  ctx.fillRect(820, 50, 50, 220);
  ctx.strokeRect(820, 50, 50, 220);

  // Down checker box
  ctx.fillRect(820, 330, 50, 220);
  ctx.strokeRect(820, 330, 50, 220);

  // Line
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.fillRect(409, 0, 2, 600);

  drawGroupTriangle(ctx, 30, 570, 58, 220, true);
  drawGroupTriangle(ctx, 440, 570, 58, 220, true);
  drawGroupTriangle(ctx, 30, 30, 58, 220, false);
  drawGroupTriangle(ctx, 440, 30, 58, 220, false);
};
