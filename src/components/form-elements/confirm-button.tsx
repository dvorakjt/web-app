import { 
  ConfirmButton as BaseConfirmButton, 
  ConfirmButtonProps as BaseConfirmButtonProps, 
  PropsWithoutClassName 
} from "modeled-forms-react";
import { PropsWithChildren } from "react";
import styles from '../../styles/modules/components/form-elements/confirm-button.module.scss';

type ConfirmButtonProps = PropsWithoutClassName<BaseConfirmButtonProps>;

export function ConfirmButton(props : PropsWithChildren<ConfirmButtonProps>) {
  return (
    <BaseConfirmButton {...props} className={styles.confirm_btn}>{props.children}</BaseConfirmButton>
  );
}