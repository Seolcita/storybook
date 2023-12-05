import styled from 'styled-components';
import ColorMap, { ColorVariant } from '../Color/ColorMap';
import { SelectProps } from '.';

interface StyledSelectProps {
  isOpen: boolean;
  width: SelectProps['width'];
  fullWidth: SelectProps['fullWidth'];
}

interface SelectInputContainerProps {
  isOpen: StyledSelectProps['isOpen'];
  selectColor: ColorVariant;
  borderColor?: string;
}

interface CaretProps {
  isOpen: StyledSelectProps['isOpen'];
}

interface DropdownContainerProps {
  isOpen: StyledSelectProps['isOpen'];
  selectColor: ColorVariant;
}

interface SelectOptionProps {
  isOpen: StyledSelectProps['isOpen'];
  highlighted: boolean;
  selectColor: ColorVariant;
}

export const StyledSelect = styled.div<StyledSelectProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : `${width}px`)};
`;

export const SelectInputContainer = styled.div<SelectInputContainerProps>`
  display: flex;
  align-items: center;
  min-width: 250px;
  min-height: 40px;
  padding: 10px 20px;
  border: ${({ isOpen, selectColor }) =>
    isOpen
      ? `2px solid ${selectColor.main}`
      : `2px solid ${selectColor.extraLight}`};
  border-radius: 4px;
  width: 100%;
  color: ${({ selectColor }) => selectColor.dark};
  background-color: ${() => ColorMap['white'].main};

  &:hover {
    border: ${({ selectColor }) => `2px solid ${selectColor.main}`};
  }
`;

export const Caret = styled.button<CaretProps>`
  border: none;
  background-color: ${() => ColorMap['white'].main};
  transform: ${({ isOpen }) => isOpen && `rotate(-180deg)`};
  transition-duration: 1s;
  margin-left: 10px;
`;

export const DropdownContainer = styled.div<DropdownContainerProps>`
  display: flex;
  justify-content: center;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  width: 100%;
  overflow: hidden;

  & > ul {
    width: 98%;
    padding: 10px;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: ${({ selectColor }) => `2px 2px 6px ${selectColor.main}80`};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(-5%)' : 'translateY(-130%)'};
    transition: 1s;
    transition-timing-function: ease;
    background-color: ${() => ColorMap['white'].main};
  }
`;

export const SelectOption = styled.li<SelectOptionProps>`
  padding: 5px 10px;
  color: ${() => ColorMap['primary'].dark};
  background-color: ${({ highlighted, selectColor }) =>
    highlighted ? selectColor.background : ColorMap['white'].main};

  &:hover {
    background-color: ${({ selectColor }) => selectColor.background};
  }

  &:active {
    background-color: ${({ selectColor }) => selectColor.extraLight};
  }
`;
