import styled, { css } from 'styled-components';
import ColorMap from '../../atomic/Color/ColorMap';
import { HeaderProps } from '.';

type StyledHeaderProps = {
  bgColor: HeaderProps['bgColor'];
};

type LeftContainerProps = {
  isMobile: HeaderProps['isMobile'];
};

type LogoProps = {
  isMobile: HeaderProps['isMobile'];
};

export const StyledHeader = styled.div<StyledHeaderProps>`
  background-color: ${({ bgColor }) =>
    bgColor ? ColorMap[bgColor].main : 'transparent'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 150rem;
  padding: 0.5rem 1rem;
`;
export const LeftContainer = styled.div<LeftContainerProps>`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;

  ${({ isMobile }) =>
    isMobile &&
    css`
      flex-direction: row-reverse;
    `}
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.div<LogoProps>`
  ${({ isMobile }) =>
    isMobile &&
    css`
      flex-grow: 1;
    `}
`;
export const RightMenus = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LoginButton = styled.div`
  background-color: green;
`;
