import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { ButtonSizeProperties } from '../../../tokens/button-token';
import ColorMap, { ColorVariant } from '../Color/ColorMap';

interface StyledButtonProps {
  variant: ButtonProps['variant'];
  bgColor: ColorVariant;
  textColor: ColorVariant;
  size: ButtonSizeProperties;
  fullWidth: ButtonProps['fullWidth'];
  disabled: ButtonProps['disabled'];
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant, bgColor }) =>
    variant === 'primary' ? bgColor.main : 'transparent'};

  border: ${({ variant, textColor }) =>
    variant === 'primary' ? 'none' : `2.5px solid ${textColor.main}`};
  border-radius: 5px;
  color: ${({ textColor }) => textColor.main};
  box-shadow: ${({ variant, bgColor, textColor }) =>
    variant === 'primary'
      ? `3px 4px 4px ${bgColor.main}80`
      : `3px 4px 4px ${textColor.main}80`};
  margin: ${({ size }) => size.margin};
  padding: ${({ size }) => size.padding};
  font-size: ${({ size }) => size.fontSize};
  height: ${({ size }) => size.heigh};
  font-weight: ${({ size }) => size.fontWeight};
  line-height: ${({ size }) => size.lineHeight};
  letter-spacing: 0.3px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  &:hover {
    background-color: ${({ variant, bgColor }) =>
      variant === 'primary' ? bgColor.dark : 'transparent'};
    box-shadow: ${({ variant, bgColor, textColor }) =>
      variant === 'primary'
        ? `6px 6px 8px ${bgColor.main}80`
        : `6px 6px 8px ${textColor.main}80`};
  }

  &:active {
    box-shadow: ${({ variant, bgColor, textColor }) =>
      variant === 'primary'
        ? `2px 3px 3px ${bgColor.main}E6`
        : `2px 3px 3px ${textColor.main}E6`};
    transform: scale(0.98);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${ColorMap['grey'].extraLight};
      box-shadow: none;
      color: ${ColorMap['grey'].light};
      &:hover,
      &:active {
        background-color: ${ColorMap['grey'].extraLight};
        box-shadow: none;
        transform: none;
      }
    `}

  ${({ disabled, variant }) =>
    disabled &&
    variant === 'outlined' &&
    css`
      background-color: transparent;
      border-color: ${ColorMap['grey'].extraLight};
      color: lightgrey;
      &:hover,
      &:active {
        background-color: transparent;
      }
    `}
`;
