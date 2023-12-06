import { type ReactElement } from 'react';
import styled from 'styled-components';
import ColorMap, { ColorVariant, Colors } from '../atomic/Color/ColorMap';
import Typography from '../atomic/Typography';

type PlaceholderProps = {
  color?: Colors;
  width?: number;
  isFullWidth?: boolean;
  height?: number;
  borderRadius?: number;
  label?: string;
};

type StyledPlaceholderProps = {
  bgcolor: ColorVariant;
  width: PlaceholderProps['width'];
  isFullWidth: PlaceholderProps['isFullWidth'];
  height: PlaceholderProps['height'];
  borderRadius: PlaceholderProps['borderRadius'];
};

export const StyledPlaceholder = styled.div<StyledPlaceholderProps>`
  background-color: ${({ bgcolor }) => bgcolor.extraLight};
  width: ${({ width, isFullWidth }) => (isFullWidth ? '100%' : `${width}rem`)};
  height: ${({ height }) => `${height}rem`};
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  padding: 1rem;
  // margin: 0.5rem;
`;

function Placeholder({
  color = 'grey',
  height = 3,
  width = 3,
  isFullWidth = false,
  borderRadius = 0.3,
  label = '',
}: PlaceholderProps): ReactElement {
  return (
    <StyledPlaceholder
      bgcolor={ColorMap[color]}
      width={width}
      isFullWidth={isFullWidth}
      height={height}
      borderRadius={borderRadius}
    >
      <Typography variant='textXS' color={color} fontWeight='semiBold'>
        {label}
      </Typography>
    </StyledPlaceholder>
  );
}

export { Placeholder };
