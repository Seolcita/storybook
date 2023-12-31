/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, { Option } from '.';
import { useState } from 'react';
import { Box } from '@mui/material';

export default {
  title: 'Components/Atomic/Select',
  component: Select,
};

const selectOptions = [
  { label: 'Cold', value: 'Cold' },
  { label: 'Normal', value: 'Normal' },
  { label: 'Hot', value: 'Hot' },
];

const Template: any = (args: any) => {
  const [value, setValue] = useState<Option | undefined>();

  return (
    <Box width={600} display='flex' justifyContent='center' alignItems='center'>
      <Select
        {...args}
        value={value}
        options={selectOptions}
        onChange={(opt: Option) => setValue(opt)}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  width: 25,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  color: 'primary',
  fullWidth: true,
};
