import type { Meta, StoryObj } from '@storybook/react';

import ImageStepsProgressBar from '.';
import dogImage from '../../../assets/dog.png';
import poopImage from '../../../assets/poop.png';
import boneImage from '../../../assets/cookie.jpeg';

const meta: Meta<typeof ImageStepsProgressBar> = {
  title: 'Components/Atomic/ImageStepsProgressBar',
  component: ImageStepsProgressBar,
  argTypes: {
    currentStep: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
        step: 1,
      },
    },
  },
};

export default meta;

const prevImg = (
  <img
    src={poopImage}
    style={{
      width: '40px',
      height: '30px',
      marginTop: '30px',
      marginRight: '15px',
    }}
  />
);

const currentImg = (
  <img
    src={dogImage}
    style={{
      width: '90px',
      height: '70px',
      marginRight: '10px',
    }}
  />
);

const nextImg = (
  <img
    src={boneImage}
    style={{
      width: '50px',
      marginRight: '30px',
      rotate: '-40deg',
    }}
  />
);

type Story = StoryObj<typeof ImageStepsProgressBar>;

export const Primary: Story = {
  args: {
    totalSteps: 6,
    currentStep: 1,
    prevImg,
    currentImg,
    nextImg,
  },
};
