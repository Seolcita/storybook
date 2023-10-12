import { type ReactElement } from 'react';

import Typography from '../Typography';
import { Box } from '@mui/material';

interface ColorPaletteProps {
  colorList: [];
}

const ColorPalette = ({ colorList }: ColorPaletteProps): ReactElement => {
  return (
    <Box display='flex' flexWrap='wrap'>
      {colorList.map((color) => (
        <Box
          width='150px'
          height='150px'
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='center'
        >
          <Box
            borderRadius='20%'
            height='50px'
            width='50px'
            bgcolor={Object.values(color)}
          ></Box>
          <Box textAlign='center'>
            <Typography variant='textXS'>{Object.keys(color)}</Typography>
            <Typography variant='textXS'>{Object.values(color)}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ColorPalette;
