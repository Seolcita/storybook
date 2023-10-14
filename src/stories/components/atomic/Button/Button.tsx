import { type ReactElement } from 'react';
import styled from 'styled-components';

import { ColorVariants } from '../Color';
import buttonTokens, { ButtonSizeProperties } from './token';

type ButtonVariant = 'primary' | 'outlined' | 'text';
type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

const ButtonSizeMap: Record<ButtonSize, ButtonSizeProperties> = {
  xs: buttonTokens.buttonXS,
  s: buttonTokens.buttonS,
  m: buttonTokens.buttonM,
  l: buttonTokens.buttonL,
  xl: buttonTokens.buttonXL,
};

const ButtonStateColorMap: Record<
  ButtonStateColor,
  ButtonStateColorProperties
> = {};

interface ButtonProps {
  variant: ButtonVariant;
  bgColor: ColorVariants;
  textColor: ColorVariants;
  size: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button = styled.button`

`

const Button = ({
  variant = 'primary',
  bgColor = 'primary',
  textColor = 'black',
  size = 'm',
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
}: ButtonProps): ReactElement => {
  return (
    // <button
    //   style={{
    //     backgroundColor: variant === 'primary' ? bgColor : 'transparent',
    //   }}
    // >
    //   Button
    // </button>
  );
};

export default Button;
