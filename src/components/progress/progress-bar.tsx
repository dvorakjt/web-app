import type { ProgressPercent } from './progress-percent';
import styles from '../../styles/modules/components/progress/progress-bar.module.scss';
import { ProgressIndicatorSVG } from './svg/progress-indicator-svg';
import { ProgressBarContextProvider } from './progress-bar-context';

interface ProgressBarProps {
  progressPercent : ProgressPercent;
};


export function ProgressBar({ progressPercent } : ProgressBarProps) {
  return (
    <ProgressBarContextProvider progressPercent={progressPercent}>
      <ProgressIndicatorSVG />
    </ProgressBarContextProvider>
  );
}