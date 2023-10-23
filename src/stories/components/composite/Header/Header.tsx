import { type ReactElement } from 'react';

import {
  StyledHeader,
  LeftContainer,
  RightContainer,
  Logo,
} from './Header.styles';
import { Colors } from '../../atomic/Color/ColorMap';

export interface HeaderProps {
  logo: React.ReactNode;
  leftMenus?: React.ReactNode;
  rightMenus?: React.ReactNode;
  login: React.ReactNode;
  isMobile?: boolean;
  bgColor?: Colors;
  loginButton: React.ReactNode;
}

const Header = ({
  logo,
  leftMenus,
  rightMenus,
  isMobile = false,
  bgColor,
  login,
  loginButton,
}: HeaderProps): ReactElement => {
  return (
    <StyledHeader bgColor={bgColor}>
      <LeftContainer isMobile={isMobile}>
        <Logo isMobile={isMobile}>{logo}</Logo>
        {isMobile && leftMenus}
      </LeftContainer>
      <RightContainer>{login ? rightMenus : loginButton}</RightContainer>
    </StyledHeader>
  );
};

export default Header;
