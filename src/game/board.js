import Checker from "./checker";

class Board {
  constructor(boardWidth, boardHeight) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;

    this.padding = 0.025 * this.boardWidth;
    this.checkerBoxWidth = (this.boardWidth - 5 * this.padding) / 13;
    this.checkerBoxHeight = (this.boardHeight - 3 * this.padding) / 2;
    this.triangleWidth = this.checkerBoxWidth;
    this.triangleHeight = (this.boardHeight - 3 * this.padding) / 2;
    this.trianglePadding = this.triangleWidth * 0.03;
    this.innerRectangleWidth =
      (this.boardWidth - 5 * this.padding - this.checkerBoxWidth) / 2;
    this.innerRectangleHeight = this.boardHeight - 2 * this.padding;

    // o: other
    // m: me
    // e: empty
    this.gameLogic = [
      [2, "o"],
      [0, "e"],
      [0, "e"],
      [0, "e"],
      [0, "e"],
      [5, "m"],
      [0, "e"],
      [3, "m"],
      [0, "e"],
      [0, "e"],
      [0, "e"],
      [5, "o"],
      [5, "m"],
      [0, "e"],
      [0, "e"],
      [0, "e"],
      [3, "o"],
      [0, "e"],
      [5, "o"],
      [0, "e"],
      [0, "e"],
      [0, "e"],
      [0, "e"],
      [2, "m"],
    ];
  }

  draw = (ctx) => {
    //Outside white board
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";
    ctx.strokeRect(0, 0, this.boardWidth, this.boardHeight);

    //Inside 1
    this.drawRectangle(
      ctx,
      this.padding,
      this.padding,
      this.innerRectangleWidth,
      this.innerRectangleHeight
    );

    //Inside 2
    this.drawRectangle(
      ctx,
      this.innerRectangleWidth + 3 * this.padding,
      this.padding,
      this.innerRectangleWidth,
      this.innerRectangleHeight
    );

    //CheckerBox 1
    this.drawRectangle(
      ctx,
      this.boardWidth - this.padding - this.checkerBoxWidth,
      this.padding,
      this.checkerBoxWidth,
      this.checkerBoxHeight
    );

    //CheckerBox 2
    this.drawRectangle(
      ctx,
      this.boardWidth - this.padding - this.checkerBoxWidth,
      this.boardHeight - this.padding - this.checkerBoxHeight,
      this.checkerBoxWidth,
      this.checkerBoxHeight
    );

    //The middle line
    ctx.beginPath();

    ctx.moveTo(this.innerRectangleWidth + 2 * this.padding, 0);
    ctx.lineTo(this.innerRectangleWidth + 2 * this.padding, this.boardHeight);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.stroke();

    //lower Traingles
    this.drawTriangles(
      ctx,
      this.padding,
      this.padding + 2,
      this.triangleWidth,
      this.trianglePadding,
      this.triangleHeight,
      0
    );

    this.drawTriangles(
      ctx,
      this.innerRectangleWidth + 3 * this.padding,
      this.padding + 2,
      this.triangleWidth,
      this.trianglePadding,
      this.triangleHeight,
      0
    );

    //Upper traingles
    this.drawTriangles(
      ctx,
      this.padding,
      this.boardHeight - this.padding - 2,
      this.triangleWidth,
      this.trianglePadding,
      this.boardHeight - this.padding - this.triangleHeight,
      1
    );

    this.drawTriangles(
      ctx,
      this.innerRectangleWidth + 3 * this.padding,
      this.boardHeight - this.padding - 2,
      this.triangleWidth,
      this.trianglePadding,
      this.boardHeight - this.padding - this.triangleHeight,
      1
    );

    // let checker = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < this.gameLogic[i][0]; j++) {
        new Checker(
          this.boardWidth,
          this.boardHeight,
          this.triangleWidth / 2,
          i + 1,
          j,
          this.gameLogic[i][1] === "o" ? false : true
        ).draw(ctx);
      }
    }
  };

  drawRectangle = (ctx, x, y, width, height) => {
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, width, height);
    ctx.globalAlpha = 0.1;
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.strokeRect(x, y, width, height);
  };

  drawTriangles = (ctx, x, y, width, p, t, m) => {
    ctx.fillStyle = "black";
    for (let i = 0; i < 6; i++) {
      if (i % 2 === m) ctx.globalAlpha = 0.5;
      else ctx.globalAlpha = 0.2;
      ctx.beginPath();
      let x1 = x + i * width + p;
      let x2 = x + (i + 1) * width - p;
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.lineTo((x2 + x1) / 2, t);
      ctx.lineTo(x1, y);
      ctx.fill();
    }
  };
}

export default Board;
