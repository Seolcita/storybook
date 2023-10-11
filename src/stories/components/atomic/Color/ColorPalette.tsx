import { type ReactElement } from 'react';

import Typography from '../Typography';

interface ColorPaletteProps {
  colorList: [];
}

const ColorPalette = ({ colorList }: ColorPaletteProps): ReactElement => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {colorList.map((color) => (
        <div
          style={{
            width: '150px',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              borderRadius: '20%',
              height: '50px',
              width: '50px',
              backgroundColor: Object.values(color),
            }}
          ></div>
          <div style={{ textAlign: 'center' }}>
            <Typography variant='textXS'>{Object.keys(color)}</Typography>
            <Typography variant='textXS'>{Object.values(color)}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
