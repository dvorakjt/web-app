import { Meta, StoryObj } from '@storybook/react';
import { RootFormProvider, RootFormTemplate, required } from 'modeled-forms-react';
import Input from '../../components/form-elements/input';
import FloatingLabel from '../../components/form-elements/floating-label';
import styles from '../../styles/modules/components/form-elements/form.module.scss';
import { FieldMessages } from '../../components/form-elements/field-messages';

const meta : Meta<typeof Input> = {
  component : Input,
  parameters : {
    layout : 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

const rootFormTemplate : RootFormTemplate = {
  fields : {
    name : {
      defaultValue : '',
      syncValidators : [
        required('Please enter your first name.')
      ]
    }
  },
  submitFn : ({ value }) => {
    return new Promise(resolve => resolve(value));
  }
}

export const WithFloatingLabel : Story = {
  render : () => {
    return (
      <RootFormProvider template={rootFormTemplate}>
        <form className={styles.form}>
          <FloatingLabel fieldName='name'>Name*</FloatingLabel>
          <Input fieldName='name' type='text'/>
          <FieldMessages fieldName='name' />
        </form>
      </RootFormProvider>
    );
  }
}