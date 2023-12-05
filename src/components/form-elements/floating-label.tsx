import { PropsWithChildren } from 'react';
import { Label, LabelProps, PropsWithoutClassName } from "modeled-forms-react";
import styles from "../../styles/modules/components/form-elements/floating-label.module.scss";

type FloatingLabelProps = PropsWithoutClassName<LabelProps>;

export default function FloatingLabel(props : PropsWithChildren<FloatingLabelProps>) {
  return (
    <Label {...props} className={styles.floating_label}>{props.children}</Label>
  );
}