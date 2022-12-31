export const boardWidth = 900;
export const boardHeight = 600;
export const padding = 0.025 * boardWidth;
export const checkerBoxWidth = (boardWidth - 5 * padding) / 13;
export const checkerBoxHeight = (boardHeight - 3 * padding) / 2;
export const traingleWidth = checkerBoxWidth;
export const traingleHeight = (boardHeight - 3 * padding) / 2;
export const trainglePadding = traingleWidth * 0.03;
export const innerRectangleWidth =
  (boardWidth - 5 * padding - checkerBoxWidth) / 2;
export const innerRectangleHeight = boardHeight - 2 * padding;
