import { type ReactElement } from 'react';
// import styled, { css } from 'styled-components';

import { ColorVariantMap, ColorVariants } from '../Color';
import buttonTokens, { ButtonSizeProperties } from './token';
import { Box } from '@mui/material';
import { ButtonSVG, StyledButton } from './Button.styles';

type ButtonVariant = 'primary' | 'outlined' | 'text';
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
  bgColor?: ColorVariants;
  textColor: ColorVariants;
  size: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  bgColor = 'primary',
  textColor = 'white',
  size = 'm',
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  children,
}: ButtonProps): ReactElement => {
  console.log('bgcolor', bgColor);
  return (
    <StyledButton
      variant={variant}
      bgColor={ColorVariantMap[bgColor]}
      textColor={textColor}
      size={ButtonSizeMap[size]}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <ButtonSVG startSVG={startIcon ? true : false}>{startIcon}</ButtonSVG>
        {children}
        <ButtonSVG endSVG={endIcon ? true : false}>{startIcon}</ButtonSVG>
      </Box>
    </StyledButton>
  );
};

export default Button;
