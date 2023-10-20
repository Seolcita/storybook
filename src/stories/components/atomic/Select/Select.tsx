import { type ReactElement, useState } from 'react';
import {
  Caret,
  DropdownContainer,
  SelectInputContainer,
  SelectOption,
  StyledSelect,
} from './Select.styles';

export type Option = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple: false;
  value?: Option;
  onChange: (value: Option) => void;
};

type MultipleSelectProps = {
  multiple: true;
  value?: Option[];
  onChange: (value: Option[]) => void;
};

type SelectProps = {
  options: Option[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({
  options,
  value,
  multiple,
  onChange,
}: SelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <StyledSelect
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
      >
        <SelectInputContainer>
          {multiple
            ? value
              ? value.map((val) => <button>{val.label}</button>)
              : 'Select Options'
            : value
            ? value.label
            : 'Select Option'}

          <Caret>{isOpen ? 'ᗋ' : 'ᗊ'}</Caret>
        </SelectInputContainer>
        <DropdownContainer isOpen={isOpen}>
          <ul>
            {options.map((option) => (
              <SelectOption
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </SelectOption>
            ))}
          </ul>
        </DropdownContainer>
      </StyledSelect>
    </>
  );
};

export default Select;
