import { ColorVariants } from '../Color';

export type ButtonVariantProperties = {
  border: string;
  bgColor: ColorVariants;
};

export type ButtonSizeProperties = {
  margin: string;
  padding: string;
  heigh: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
};

// Button variants

const primary: ButtonVariantProperties = {
  border: '1px solid',
};

// Button sizes
const buttonXS: ButtonSizeProperties = {
  margin: '0px',
  padding: '8px 12px',
  fontSize: '14px',
  heigh: '36px',
  fontWeight: 600,
  lineHeight: '20px',
};

const buttonS: ButtonSizeProperties = {
  margin: '0px',
  padding: '10px 14px',
  heigh: '40px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
};

const buttonM: ButtonSizeProperties = {
  margin: '0px',
  padding: '10px 16px',
  heigh: '44px',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
};

const buttonL: ButtonSizeProperties = {
  margin: '0px',
  padding: '12px 18px',
  heigh: '48px',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
};

const buttonXL: ButtonSizeProperties = {
  margin: '0px',
  padding: '16px 22px',
  heigh: '60px',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '28px',
};

export default { buttonXS, buttonS, buttonM, buttonL, buttonXL };
