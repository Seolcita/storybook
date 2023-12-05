const FontFamily = ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(',');

const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900,
};

export type TypographyBasicProperties = {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
};

// heading
const headingXXL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '72px',
  lineHeight: '90px',
};

const headingXL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '60px',
  lineHeight: '90px',
};

const headingL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '48px',
  lineHeight: '60px',
};

const headingM: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '36px',
  lineHeight: '44px',
};

const headingS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '30px',
  lineHeight: '38px',
};

const headingXS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '20px',
  lineHeight: '30px',
};

// text
const textXL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '20px',
  lineHeight: '30px',
};

const textL: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '18px',
  lineHeight: '28px',
};

const textM: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '16px',
  lineHeight: '24px',
};

const textS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '14px',
  lineHeight: '20px',
};

const textXS: TypographyBasicProperties = {
  fontFamily: FontFamily,
  fontSize: '12px',
  lineHeight: '18px',
};

export default {
  fontWeight,
  headingXXL,
  headingXL,
  headingL,
  headingM,
  headingS,
  headingXS,
  textXL,
  textL,
  textM,
  textS,
  textXS,
};
