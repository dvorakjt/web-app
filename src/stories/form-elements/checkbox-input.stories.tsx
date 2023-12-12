import { Meta, StoryObj } from '@storybook/react';
import { RootFormProvider, RootFormTemplate } from 'modeled-forms-react';
import { CheckboxInput } from '../../components/form-elements/checkbox-input';

const meta : Meta<typeof CheckboxInput> = {
  component : CheckboxInput,
  parameters : {
    layout : 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof CheckboxInput>;

const rootFormTemplate : RootFormTemplate = {
  fields : {
    usCitizen : ''
  },
  submitFn : ({ value }) => Promise.resolve(value)
}

export const Default : Story = {
  render : () => {
    return (
      <RootFormProvider template={rootFormTemplate}>
        <CheckboxInput fieldName='usCitizen' labelText='I am a US citizen' value='yes' />
      </RootFormProvider>
    )
  }
}