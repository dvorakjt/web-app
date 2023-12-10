import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProgressBar } from '../../components/progress/progress-bar';
import { ProgressPercent } from '@/components/progress/progress-percent';

const meta : Meta<typeof ProgressBar> = {
  component : ProgressBar,
  parameters : {
    layout : 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

function InteractiveProgressBar() {
  const [progress, setProgress] = useState<25 | 50 | 75 | 100>(25);

    return (
      <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center' }}>
        <ProgressBar progressPercent={progress} />
        <button onClick={() => {
          let updatedProgress = progress + 25;
          if(updatedProgress > 100) updatedProgress = 25;

          setProgress(updatedProgress as ProgressPercent);
        }}>Increment Progress</button>
      </div>
    )
}

export const Interactive : Story = {
  render : () => {
    return (
      <InteractiveProgressBar />
    );
  }
}
