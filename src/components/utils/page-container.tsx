import { PropsWithChildren } from "react";
import styles from "../../styles/modules/components/utils/page-container.module.scss";

export default function PageContainer({children} : PropsWithChildren) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
}