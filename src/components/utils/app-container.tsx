import styles from '@/styles/modules/components/utils/app-container.module.scss';
import { PropsWithChildren } from 'react';

export default function AppContainer({children}:PropsWithChildren) {
  return (
  <div className={styles.outer_container}>
    <div className={styles.inner_container}>
      {children}
    </div>
  </div>
  );
}