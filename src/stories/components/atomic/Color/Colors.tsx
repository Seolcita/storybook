import { ColorPalette, ColorItem } from '@storybook/blocks';
import { colors } from './token';
import Typography from '../Typography';

export type ColorVariants =
  | 'white'
  | 'black'
  | 'greyBackground'
  | 'greyExtraLight'
  | 'greyLight'
  | 'grey'
  | 'greyDark'
  | 'primaryBackground'
  | 'primaryExtraLight'
  | 'primaryLight'
  | 'primary'
  | 'primaryDark'
  | 'errorBackground'
  | 'errorExtraLight'
  | 'errorLight'
  | 'error'
  | 'errorDark'
  | 'warningBackground'
  | 'warningExtraLight'
  | 'warningLight'
  | 'warning'
  | 'warningDark'
  | 'successBackground'
  | 'successExtraLight'
  | 'successLight'
  | 'success'
  | 'successDark';

export const ColorVariantMap: Record<ColorVariants, string> = {
  white: colors.white.hex,
  black: colors.black.hex,
  greyBackground: colors.greyBackground.hex,
  greyExtraLight: colors.greyExtraLight.hex,
  greyLight: colors.greyLight.hex,
  grey: colors.greyMedium.hex,
  greyDark: colors.greyDark.hex,
  primaryBackground: colors.blueBackground.hex,
  primaryExtraLight: colors.blueExtraLight.hex,
  primaryLight: colors.blueLight.hex,
  primary: colors.blueMedium.hex,
  primaryDark: colors.blueDark.hex,
  errorBackground: colors.redBackground.hex,
  errorExtraLight: colors.redExtraLight.hex,
  errorLight: colors.redLight.hex,
  error: colors.redMedium.hex,
  errorDark: colors.redDark.hex,
  warningBackground: colors.yellowBackground.hex,
  warningExtraLight: colors.yellowExtraLight.hex,
  warningLight: colors.yellowLight.hex,
  warning: colors.yellowMedium.hex,
  warningDark: colors.yellowDark.hex,
  successBackground: colors.greenBackground.hex,
  successExtraLight: colors.greenExtraLight.hex,
  successLight: colors.greenLight.hex,
  success: colors.greenMedium.hex,
  successDark: colors.greenDark.hex,
};

const colorArray = [];
const colorKeys = Object.keys(ColorVariantMap);
const colorValues = Object.values(ColorVariantMap);

function convertToObjArray(
  colorKeysArray: string[],
  colorValueArray: string[]
) {
  colorKeysArray.forEach((color, index) => {
    const obj = {};
    obj[color] = colorValueArray[index];
    colorArray.push(obj);
  });
}

convertToObjArray(colorKeys, colorValues);

const Colors = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '1000px',
          height: '500px',
        }}
      >
        {colorArray.map((color) => (
          <div
            style={{
              width: '150px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '50%',
                height: '50px',
                width: '50px',
                backgroundColor: Object.values(color),
              }}
            ></div>
            <div style={{ textAlign: 'center' }}>
              <Typography variant='textXS'>{Object.keys(color)}</Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Colors;
