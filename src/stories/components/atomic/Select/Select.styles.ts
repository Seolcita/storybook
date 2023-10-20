import { Box } from '@mui/material';
import styled from 'styled-components';
import ColorMap from '../Color/ColorMap';

interface StyledSelectProps {
  isOpen: boolean;
}

interface SelectInputContainer {
  borderColor?: string;
}

interface DropdownContainerProps {
  isOpen: StyledSelectProps['isOpen'];
}

export const StyledSelect = styled(Box)<StyledSelectProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
`;

export const SelectInputContainer = styled(Box)<SelectInputContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px 20px;
  border: ${() => `2px solid ${ColorMap['primary'].main}`};
  border-radius: 4px;
`;

export const Caret = styled.button`
  border: none;
  background-color: transparent;
`;

export const DropdownContainer = styled(Box)<DropdownContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 43px;
  left: 0;
  position: absolute;
  width: 300px;
  z-index: 100;
  border-radius: 4px;
  box-shadow: ${() => `2px 2px 6px ${ColorMap['primary'].main}80`};

  & > ul {
    margin: 10px 0;
    padding: 0;
  }
`;

export const SelectOption = styled.li`
  background-color: white;
  padding: 10px 20px;
  color: ${() => ColorMap['primary'].main};

  &:hover {
    background-color: ${() => ColorMap['primary'].background};
  }

  &:active {
    background-color: ${() => ColorMap['primary'].extraLight};
  }
`;

// display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
