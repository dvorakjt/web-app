import { CheckboxInput as BaseCheckboxInput, CheckboxInputProps as BaseCheckboxInputProps } from "modeled-forms-react";
import styles from '../../styles/modules/components/form-elements/checkbox-input.module.scss';

type CheckboxInputProps = Omit<BaseCheckboxInputProps, 'labelClassName' | 'checkboxClassName'>;

export function CheckboxInput({fieldName, value, labelText} : CheckboxInputProps) {
  return (
    <div className={styles.container}>
      <BaseCheckboxInput 
        fieldName={fieldName} 
        value={value} 
        checkboxClassName={styles.checkbox} 
        labelText={labelText}  
        labelClassName={styles.label} 
      />
    </div>
  )
};