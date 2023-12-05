import { FieldMessages as BaseFieldMessages, FieldMessagesProps } from "modeled-forms-react";
import styles from '../../styles/modules/components/form-elements/field-messages.module.scss';

export function FieldMessages(props : FieldMessagesProps) {
  return <BaseFieldMessages {...props} containerClassName={styles.messages_container} messageClassName={styles.message} />
}