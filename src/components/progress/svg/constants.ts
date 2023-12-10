export enum Dimensions {
  CIRCLE_RADIUS = 7.5,
  X_OFFSET = Dimensions.CIRCLE_RADIUS,
  VERTICAL_CENTER = Dimensions.CIRCLE_RADIUS,
  BAR_HEIGHT = 4,
  BAR_WIDTH = 180,
  VIEWBOX_HEIGHT = CIRCLE_RADIUS * 2,
  VIEWBOX_WIDTH = BAR_WIDTH + CIRCLE_RADIUS * 2,
};

export enum LinearGradientIds {
  TEAL_YELLOW_GRADIENT_ID = "teal_yellow_gradient",
  TRANSPARENT_GRAY_GRADIENT_ID = "transparent_gray_gradient"
};