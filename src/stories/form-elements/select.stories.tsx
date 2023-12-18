import { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/form-elements/select';
import { RootFormProvider, RootFormTemplate, required } from 'modeled-forms-react';
import styles from '../../styles/modules/components/form-elements/form.module.scss';
import { FieldMessages } from '../../components/form-elements/field-messages';

const meta : Meta<typeof Select> = {
  component : Select,
  parameters : {
    layout : 'centered'
  }
};

export default meta;

const rootFormTemplate : RootFormTemplate = {
  fields : {
    state : {
      defaultValue : '',
      syncValidators : [
        required('Please enter your state')
      ]
    }
  },
  submitFn : ({ value }) => Promise.resolve(value)
}

type Story = StoryObj<typeof Select>;

export const Default : Story = {
  render : () => {
    return (
    <RootFormProvider template={rootFormTemplate}>
      <form className={styles.form}>
      <Select fieldName='state' label="State" options={[
        {
          text: 'AZ',
          value : 'AZ'
        },
        {
          text : 'PA',
          value : 'PA'
        }
      ]}/>
      <FieldMessages fieldName='state' />
      </form>
    </RootFormProvider>
    );
  }
}