import type { Meta, StoryObj } from '@storybook/react';
import Select, { Option } from '.';
import { useState } from 'react';
import { Box } from '@mui/material';

const meta: Meta<typeof Select> = {
  title: 'Components/Atomic/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const selectOptions = [
  { label: 'Cold', value: 'Cold' },
  { label: 'Normal', value: 'Normal' },
  { label: 'Hot', value: 'Hot' },
];

export const SingleSelect: Story = () => {
  const [value, setValue] = useState<Option>();

  return (
    <Box width={600} display='flex' justifyContent='center' alignItems='center'>
      <Select
        options={selectOptions}
        value={value}
        onChange={(opt) => setValue(opt)}
        multiple={false}
        width={200}
      />
    </Box>
  );
};

export const MultiSelect: Story = () => {
  const [value, setValue] = useState<Option[]>();

  return (
    <>
      <Select
        options={selectOptions}
        value={value}
        onChange={(opt) => setValue(opt)}
        multiple={true}
      />
    </>
  );
};
