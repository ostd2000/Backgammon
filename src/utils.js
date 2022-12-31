import {
  boardWidth,
  boardHeight,
  padding,
  innerRectangleWidth,
  innerRectangleHeight,
  traingleHeight,
  traingleWidth,
  trainglePadding,
  checkerBoxWidth,
  checkerBoxHeight,
} from "./constants";
const drawTraingles = (ctx, x, y, w, p, t, m) => {
  ctx.fillStyle = "black";
  for (let i = 0; i < 6; i++) {
    if (i % 2 === m) ctx.globalAlpha = 0.5;
    else ctx.globalAlpha = 0.2;
    ctx.beginPath();
    let x1 = x + i * w + p;
    let x2 = x + (i + 1) * w - p;
    ctx.moveTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.lineTo((x2 + x1) / 2, t);
    ctx.lineTo(x1, y);
    ctx.fill();
  }
};

const drawRectangle = (ctx, x, y, w, h) => {
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, w, h);
  ctx.globalAlpha = 0.1;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.strokeRect(x, y, w, h);
};
export const drawBoard = (ctx) => {
  //Outside white board
  ctx.globalAlpha = 0.1;
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 0, boardWidth, boardHeight);
  //Inside 1
  drawRectangle(
    ctx,
    padding,
    padding,
    innerRectangleWidth,
    innerRectangleHeight
  );
  //Inside 2
  drawRectangle(
    ctx,
    innerRectangleWidth + 3 * padding,
    padding,
    innerRectangleWidth,
    innerRectangleHeight
  );

  //CheckerBox 1
  drawRectangle(
    ctx,
    boardWidth - padding - checkerBoxWidth,
    padding,
    checkerBoxWidth,
    checkerBoxHeight
  );

  //CheckerBox 2
  drawRectangle(
    ctx,
    boardWidth - padding - checkerBoxWidth,
    boardHeight - padding - checkerBoxHeight,
    checkerBoxWidth,
    checkerBoxHeight
  );

  //The middle line
  ctx.beginPath();

  ctx.moveTo(innerRectangleWidth + 2 * padding, 0);
  ctx.lineTo(innerRectangleWidth + 2 * padding, boardHeight);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.stroke();

  //lower Traingles
  drawTraingles(
    ctx,
    padding,
    padding + 2,
    traingleWidth,
    trainglePadding,
    traingleHeight,
    0
  );
  drawTraingles(
    ctx,
    innerRectangleWidth + 3 * padding,
    padding + 2,
    traingleWidth,
    trainglePadding,
    traingleHeight,
    0
  );
  //Upper traingles
  drawTraingles(
    ctx,
    padding,
    boardHeight - padding - 2,
    traingleWidth,
    trainglePadding,
    boardHeight - padding - traingleHeight,
    1
  );

  drawTraingles(
    ctx,
    innerRectangleWidth + 3 * padding,
    boardHeight - padding - 2,
    traingleWidth,
    trainglePadding,
    boardHeight - padding - traingleHeight,
    1
  );
};
