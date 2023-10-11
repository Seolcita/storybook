import { type ReactElement } from 'react';
import { colors } from './token';
import ColorPalette from './ColorPalette';
import Typography from '../Typography';

enum ColorGroups {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  GREY = 'GREY',
  PRIMARY = 'PRIMARY',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
}

interface ConvertToObjectArrayInput {
  filter: ColorGroups;
  colorKeysArray: string[];
  colorValueArray: string[];
}

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

const colorKeys = Object.keys(ColorVariantMap);
const colorValues = Object.values(ColorVariantMap);

export const convertToObjArray = ({
  filter,
  colorKeysArray,
  colorValueArray,
}: ConvertToObjectArrayInput) => {
  const colorArray = [];
  colorKeysArray.forEach((color, index) => {
    console.log('log', color.startsWith(filter.toLowerCase()));
    if (color.startsWith(filter.toLowerCase())) {
      const obj = {};
      obj[color] = colorValueArray[index];
      colorArray.push(obj);
    }
  });
  return colorArray;
};

const greyPalette = convertToObjArray({
  filter: ColorGroups.GREY,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const primaryPalette = convertToObjArray({
  filter: ColorGroups.PRIMARY,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const errorPalette = convertToObjArray({
  filter: ColorGroups.ERROR,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const warningPalette = convertToObjArray({
  filter: ColorGroups.WARNING,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const successPalette = convertToObjArray({
  filter: ColorGroups.SUCCESS,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const whitePalette = convertToObjArray({
  filter: ColorGroups.WHITE,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const blackPalette = convertToObjArray({
  filter: ColorGroups.BLACK,
  colorKeysArray: colorKeys,
  colorValueArray: colorValues,
});

const Colors = (): ReactElement => {
  return (
    <>
      <Typography variant='headingXS' fontWeight='bold'>
        # Primary
      </Typography>
      <ColorPalette colorList={primaryPalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # Error
      </Typography>
      <ColorPalette colorList={errorPalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # Warning
      </Typography>
      <ColorPalette colorList={warningPalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # Success
      </Typography>
      <ColorPalette colorList={successPalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # Grey
      </Typography>
      <ColorPalette colorList={greyPalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # White
      </Typography>
      <ColorPalette colorList={whitePalette} />

      <Typography variant='headingXS' fontWeight='bold'>
        # Black
      </Typography>
      <ColorPalette colorList={blackPalette} />
    </>
  );
};

export default Colors;
