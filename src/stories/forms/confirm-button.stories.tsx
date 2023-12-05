import { Meta, StoryObj } from '@storybook/react';
import { RootFormProvider, RootFormTemplate } from 'modeled-forms-react';
import { ConfirmButton } from '../../components/form-elements/confirm-button';
import AppContainer from '../../components/utils/app-container';
import PageContainer from '../../components/utils/page-container';

const meta : Meta<typeof ConfirmButton> = {
  component : ConfirmButton,
  parameters : {
    layout : 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof ConfirmButton>;

const rootFormTemplate : RootFormTemplate = {
  fields : {},
  submitFn : ({ value }) => Promise.resolve(value)
};

export const Default : Story = {
  render : () => {
    return (
      <AppContainer>
        <PageContainer>
          <RootFormProvider template={rootFormTemplate}>
            <ConfirmButton>get started</ConfirmButton>
          </RootFormProvider>
        </PageContainer>
      </AppContainer>
    );
  }
}
