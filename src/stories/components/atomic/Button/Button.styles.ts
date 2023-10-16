import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { ButtonSizeProperties } from './token';

interface StyledButtonProps {
  variant: ButtonProps['variant'];
  bgColor: string;
  textColor: ButtonProps['textColor'];
  size: ButtonSizeProperties;
  fullWidth: ButtonProps['fullWidth'];
  disabled: ButtonProps['disabled'];
}

interface ButtonSVGProps {
  startSVG?: boolean;
  endSVG?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ variant, bgColor }) =>
    variant === 'primary' ? bgColor : 'transparent'};
  border: ${({ variant, bgColor }) =>
    variant === 'primary' ? 'none' : `1px solid ${bgColor}`};
  border-radius: 5px;
  color: ${({ textColor }) => textColor};
  box-shadow: ${({ bgColor }) => `0 0 5px ${bgColor}80`};
  margin: ${({ size }) => size.margin}
  padding:${({ size }) => size.padding}
  font-size:${({ size }) => size.fontSize}
  height:${({ size }) => size.heigh}
  font-weight: ${({ size }) => size.fontWeight}
  line-height: ${({ size }) => size.lineHeight}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}

  &: hover {
    opacity: 0.9;
    box-shadow: ${({ bgColor }) => `0 0 20px ${bgColor}E6`};
  }

  &: active {
    box-shadow: ${({ bgColor }) => `0 0 10px ${bgColor}E6`};
    transform: scale(0.98);
  }
`;

export const ButtonSVG = styled.svg<ButtonSVGProps>`
  width: 30px;
  height: 30px;
  margin-right: ${({ startSVG }) => (startSVG ? '30px' : '0px')};
  margin-left: ${({ endSVG }) => (endSVG ? '30px' : '0px')};
`;
