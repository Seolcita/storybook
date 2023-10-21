import { Box } from '@mui/material';
import styled from 'styled-components';
import ColorMap, { Colors } from '../Color/ColorMap';
import { MultipleSelectProps } from '.';

interface StyledSelectProps {
  isOpen: boolean;
}

interface SelectInputContainerProps {
  isOpen: StyledSelectProps['isOpen'];
  multiple: MultipleSelectProps['multiple'];
  borderColor?: string;
}

interface CaretProps {
  isOpen: boolean;
}

interface CaretIconProps {
  color: Colors;
}

interface SelectOptionProps {
  isOpen: boolean;
  delayTime?: number;
  highlighted: boolean;
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

export const SelectInputContainer = styled(Box)<SelectInputContainerProps>`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-height: ${({ multiple }) => !multiple && `40px`};
  padding: 10px 20px;
  border: ${({ isOpen }) =>
    isOpen
      ? `2px solid ${ColorMap['primary'].main}`
      : `2px solid ${ColorMap['primary'].extraLight}`};
  border-radius: 4px;
  width: 100%;
  color: ${() => ColorMap['primary'].dark};

  &:hover {
    border: ${() => `2px solid ${ColorMap['primary'].main}`};
  }
`;

export const SelectedItem = styled.button`
  display: flex;
  background-color: ${() => ColorMap['grey'].extraLight};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;

  &:hover {
    background-color: ${() => ColorMap['grey'].light};
  }
`;

export const DeleteItemIcon = styled.span`
  font-size: 20px;
  padding-left: 10px;
`;

export const Caret = styled.button<CaretProps>`
  border: none;
  background-color: transparent;
  transform: ${({ isOpen }) => isOpen && `rotate(-180deg)`};
  transition-duration: 1s;
`;

export const CaretIcon = styled.img<CaretIconProps>`
  color: ${({ color }) => ColorMap[color].main};
  width: 20px;
  height: 20px;
`;

export const DropdownContainer = styled(Box)<DropdownContainerProps>`
  display: flex;
  justify-content: center;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  width: 100%;
  border-radius: 4px;
  overflow: hidden;

  & > ul {
    width: 98%;
    padding: 10px; 0
    overflow: hidden;
    box-shadow: ${() => `2px 2px 6px ${ColorMap['primary'].main}80`};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-5%)' : 'translateY(-130%)'};
    transition: 1s;
    transition-timing-function: ease;
  }
`;

export const SelectOption = styled.li<SelectOptionProps>`
  padding: 5px 10px;
  color: ${() => ColorMap['primary'].dark};
  background-color: ${({ highlighted }) =>
    highlighted ? ColorMap['primary'].background : 'transparent'};

  &:hover {
    background-color: ${() => ColorMap['primary'].background};
  }

  &:active {
    background-color: ${() => ColorMap['primary'].extraLight};
  }
`;
