import { ProgressPercent } from "../progress-percent";
import { AnimatedColorStop } from "./animated-color-stop";
import { LinearGradientIds } from "./constants";
import { calculateColorStopOffset } from "./util/calculate-gradient-stop";


export function TransparentGrayGradient() {
  return (
    <linearGradient id={LinearGradientIds.TRANSPARENT_GRAY_GRADIENT_ID} gradientUnits="userSpaceOnUse">
      <AnimatedColorStop color="transparent" />
      <AnimatedColorStop color="lightgray" />
    </linearGradient>
  )
}