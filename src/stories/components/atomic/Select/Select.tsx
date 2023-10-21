import { type ReactElement, useState } from 'react';
import {
  Caret,
  DropdownContainer,
  SelectInputContainer,
  SelectOption,
  SelectedItem,
  StyledSelect,
  DeleteItemIcon,
} from './Select.styles';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Typography from '../Typography';
import ColorMap, { Colors } from '../Color/ColorMap';

export type Option = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple: false;
  value?: Option;
  onChange: (value: Option) => void;
};

export type MultipleSelectProps = {
  multiple: true;
  value?: Option[];
  onChange: (value: Option[]) => void;
};

export type SelectProps = {
  options: Option[];
  width: number;
  fullWidth?: boolean;
  color?: Colors;
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({
  options,
  value,
  multiple,
  onChange,
  width,
  fullWidth = false,
  color = 'primary',
}: SelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>();
  const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]);

  const selectColor = ColorMap[color];

  const selectOption = (option: Option): void => {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter((opt) => opt !== option));
      } else {
        onChange(value ? [...value, option] : [option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };

  const setHighlight = (index: number) => {
    if (multiple) {
      if (highlightedIndexes.includes(index)) {
        setHighlightedIndexes(
          highlightedIndexes.filter((idx) => idx !== index)
        );
      } else {
        setHighlightedIndexes([...highlightedIndexes, index]);
      }
    } else {
      setHighlightedIndex(index);
    }
  };

  const isHighlighted = (index: number): boolean => {
    let result = false;
    if (multiple) {
      if (highlightedIndexes.includes(index)) {
        result = true;
      }
    } else {
      if (index === highlightedIndex) {
        result = true;
      }
    }
    return result;
  };

  return (
    <>
      <StyledSelect
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        width={width}
        fullWidth={fullWidth}
      >
        <SelectInputContainer
          isOpen={isOpen}
          multiple={multiple}
          selectColor={selectColor}
        >
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            flexGrow={1}
          >
            {multiple ? (
              value ? (
                value.map((val) => (
                  <SelectedItem>
                    <Box
                      display='flex'
                      flexDirection='row'
                      alignItems='center'
                      onClick={(e) => {
                        e.stopPropagation();
                        selectOption(val);
                        setIsOpen(false);
                      }}
                    >
                      <Typography variant='textS' fontWeight='semiBold'>
                        {val.label}
                      </Typography>
                      <DeleteItemIcon>&times;</DeleteItemIcon>
                    </Box>
                  </SelectedItem>
                ))
              ) : (
                <Typography
                  variant='textS'
                  fontWeight='semiBold'
                  color='primary'
                >
                  Select Options
                </Typography>
              )
            ) : value ? (
              <Typography variant='textS' fontWeight='semiBold' color='primary'>
                {value.label}
              </Typography>
            ) : (
              <Typography variant='textS' fontWeight='semiBold' color='primary'>
                Select Option
              </Typography>
            )}
          </Box>
          <Caret isOpen={isOpen}>
            <FontAwesomeIcon
              icon={faCaretDown}
              size='lg'
              style={{ color: selectColor.main }}
            />
          </Caret>
        </SelectInputContainer>

        <DropdownContainer isOpen={isOpen} selectColor={selectColor}>
          <ul>
            {options.map((option, index) => (
              <SelectOption
                key={option.value}
                delayTime={index * 0.3}
                isOpen={isOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                  setHighlight(index);
                }}
                highlighted={isHighlighted(index)}
                selectColor={selectColor}
              >
                <Typography variant='textS' color='primary'>
                  {option.label}
                </Typography>
              </SelectOption>
            ))}
          </ul>
        </DropdownContainer>
      </StyledSelect>
    </>
  );
};

export default Select;
