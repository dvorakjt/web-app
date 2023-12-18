import { Input as BaseInput, InputProps as BaseInputProps, PropsWithoutClassName } from 'modeled-forms-react';
import styles from '../../styles/modules/components/form-elements/input.module.scss';

type InputProps = PropsWithoutClassName<BaseInputProps>;

export default function Input(props : InputProps) {
  return (
    <BaseInput {...props} className={styles.input} />
  );
}