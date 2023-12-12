import { Dimensions, LinearGradientIds } from "./constants";
import { LinearGradients } from "./linear-gradients";
import { ProgressIndicatorGroup } from "./progress-indicator-group";
import styles from '../../../styles/modules/components/progress/svg/progress-bar-svg.module.scss';

export function ProgressIndicatorSVG() {
  return (
    <svg viewBox={`0 0 ${Dimensions.VIEWBOX_WIDTH} ${Dimensions.VIEWBOX_HEIGHT}`} className={styles.progress_bar_svg}>
      <LinearGradients />
      <ProgressIndicatorGroup fillId={`#${LinearGradientIds.TEAL_YELLOW_GRADIENT_ID}`} />
      <ProgressIndicatorGroup fillId={`#${LinearGradientIds.TRANSPARENT_GRAY_GRADIENT_ID}`} />
    </svg>
  )
}