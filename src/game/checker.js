class Checker {
  // In Backgammon, each of the triangles are called a point.
  // We have 24 points on a Backgammon board.
  constructor(boardWidth, boardHeight, radius, point, numCheckersInPoint, me) {
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.radius = radius;
    this.point = point;
    this.numCheckersInPoint = numCheckersInPoint;
    this.me = me;

    this.padding = 0.025 * this.boardWidth;
    this.checkerBoxWidth = (this.boardWidth - 5 * this.padding) / 13;

    this.triangleWidth = this.checkerBoxWidth;
    this.trianglePadding = this.triangleWidth * 0.03;

    this.initialX =
      this.boardWidth - 2 * this.padding - this.checkerBoxWidth - this.radius;

    this.initialY = this.boardHeight - this.radius;

    this.midX = this.padding + this.radius;
    this.midY = this.radius;

    this.calcPos();
  }

  // Calculates the postion of a checker based on the point that it's on and the number of checkers on that point.
  calcPos() {
    if (this.point <= 6) {
      this.x = this.initialX - (this.point - 1) * this.radius * 2;
      this.y =
        this.initialY - this.padding - this.numCheckersInPoint * this.radius;
    } else if (this.point > 6 && this.point <= 12) {
      this.x =
        this.initialX - this.padding * 2 - (this.point - 1) * this.radius * 2;
      this.y =
        this.initialY - this.padding - this.numCheckersInPoint * this.radius;
    } else if (this.point > 12 && this.point <= 18) {
      this.x = this.midX + (this.point - 12 - 1) * this.radius * 2;
      this.y = this.midY + this.padding + this.numCheckersInPoint * this.radius;
    } else {
      this.x =
        this.midX + this.padding * 2 + (this.point - 12 - 1) * this.radius * 2;
      this.y = this.midY + this.padding + this.numCheckersInPoint * this.radius;
    }
  }

  // ctx is the rendering context of the board canvas.
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius - this.trianglePadding, 0, 2 * Math.PI);
    ctx.globalAlpha = 1;

    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius / 3,
      this.x,
      this.y,
      this.radius
    );

    if (this.me) {
      gradient.addColorStop(0, "#BFEAF5");
      gradient.addColorStop(1, "#F8F8FF");

      ctx.strokeStyle = "#BFEAF5";
    } else {
      gradient.addColorStop(0, "#b22222");
      gradient.addColorStop(1, "#ff4500");

      ctx.strokeStyle = "#b22222";
    }

    ctx.fillStyle = gradient;

    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius / 2.5, 0, 2 * Math.PI);
    ctx.globalAlpha = 0.3;

    if (this.me) {
      ctx.fillStyle = "#F8F8FF";
    } else {
      ctx.fillStyle = "#ff4500";
    }

    ctx.fill();
  }
}

export default Checker;
