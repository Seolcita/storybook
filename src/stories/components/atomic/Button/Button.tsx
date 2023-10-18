import { type ReactElement } from 'react';

import buttonTokens, { ButtonSizeProperties } from './token';
import { StyledButton } from './Button.styles';
import ColorMap, { Colors } from '../Color/ColorMap';

type ButtonVariant = 'primary' | 'outlined';
type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

const ButtonSizeMap: Record<ButtonSize, ButtonSizeProperties> = {
  xs: buttonTokens.buttonXS,
  s: buttonTokens.buttonS,
  m: buttonTokens.buttonM,
  l: buttonTokens.buttonL,
  xl: buttonTokens.buttonXL,
};

export interface ButtonProps {
  variant?: ButtonVariant;
  bgColor?: Colors;
  textColor: Colors;
  size: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  bgColor = 'primary',
  textColor = 'white',
  size = 'm',
  fullWidth = false,
  disabled = false,
  children,
}: ButtonProps): ReactElement => {
  return (
    <StyledButton
      variant={variant}
      bgColor={ColorMap[bgColor]}
      textColor={ColorMap[textColor]}
      size={ButtonSizeMap[size]}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
