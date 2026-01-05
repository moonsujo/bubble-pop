export const BOX_WIDTH = 16
export const BOX_HEIGHT = 32
export const BUBBLE_RADIUS = 1
export const Y_GAP = (Math.sin(Math.PI / 3) * 2 * BUBBLE_RADIUS) // vertical gap for close rows
export const NUM_BUBBLES_TO_REMOVE = 3
export const NUM_BUBBLES_EVEN = 8
export const NUM_BUBBLES_ODD = NUM_BUBBLES_EVEN - 1
export const NUM_SHOTS_PENALTY = 7
export const NUM_ROWS_LOST = 16;
// export const NUM_ROWS_LOST = Math.floor((BOX_HEIGHT - BUBBLE_RADIUS) / Y_GAP);
export const DIRECTIONS_EVEN = [
  [-1, 1], [0, 1],
  [-1, 0], [1, 0],
  [-1, -1], [0, -1]
]
export const DIRECTIONS_ODD = [
  [0, 1], [1, 1],
  [-1, 0], [1, 0],
  [0, -1], [1, -1]
]
export const LEVEL_OFFSET_X = -(BOX_WIDTH / 2) + BUBBLE_RADIUS
export const LEVEL_OFFSET_Y = (BOX_HEIGHT / 2) - BUBBLE_RADIUS

export const PHOTO_HEIGHT = 10
export const PHOTO_WIDTH = 10
export const NUM_PHOTO_ROWS = 4
export const NUM_PHOTO_COLUMNS = 8
export const PHOTO_X_SPACE = -0.1 * PHOTO_WIDTH // negative value for overlap
export const BOX_POSITION = [-38, -1, 0]
export const PHOTO_POSITION = [8, 0, 0]
export const NUM_LEVELS = 3

// didn't work when I put it in a separate file
export const photos = [
    { url: "images/57dbd82bb84146f34334d257aacbadc2.png", row: 2, col: 4 },
    { url: "images/e4967b3fcd73dbc6d8c78cbfa4bb0f01.png", row: 9, col: 3 },
    { url: "images/e835156dd54933aef08e569ba9eec659.png", row: 8, col: 3 },
    { url: "images/ecfb7a64b19acb508ff386123757d39e.png", row: 2, col: 5 },
    { url: "images/IMG_0412.png", row: 5, col: 4 },
    { url: "images/IMG_3694.png", row: 4, col: 4 },
    { url: "images/IMG_3781.png", row: 5, col: 6 },
    { url: "images/IMG_3820.png", row: 1, col: 2 },
    { url: "images/IMG_3928.png", row: 6, col: 5 },
    { url: "images/IMG_3964.png", row: 2, col: 1 },
    { url: "images/IMG_3972.png", row: 8, col: 2 },
    { url: "images/IMG_4279.png", row: 2, col: 0 },
    { url: "images/IMG_4281.png", row: 4, col: 3 },
    { url: "images/IMG_4307.png", row: 7, col: 2 },
    { url: "images/IMG_4336.png", row: 3, col: 2 },
    { url: "images/IMG_4344.png", row: 4, col: 2 },
    { url: "images/IMG_4450.png", row: 4, col: 0 },
    { url: "images/IMG_4496.png", row: 5, col: 1 },
    { url: "images/IMG_4579.png", row: 7, col: 3 },
    { url: "images/IMG_4602.png", row: 1, col: 1 },
    { url: "images/IMG_4670.png", row: 3, col: 6 },
    { url: "images/IMG_4686.png", row: 7, col: 4 },
    { url: "images/IMG_4773.png", row: 6, col: 2 },
    { url: "images/IMG_4789.png", row: 2, col: 2 },
    { url: "images/IMG_4854.png", row: 3, col: 5 },
    { url: "images/IMG_4869.png", row: 5, col: 2 },
    { url: "images/IMG_4903.png", row: 8, col: 4 },
    { url: "images/IMG_5148.png", row: 6, col: 3 },
    { url: "images/IMG_5150.png", row: 4, col: 6 },
    { url: "images/IMG_5263.png", row: 7, col: 5 },
    { url: "images/IMG_5336.png", row: 6, col: 1 },
]