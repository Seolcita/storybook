import { type ReactElement } from 'react';
import styled from 'styled-components';
import ColorMap, { ColorVariant, Colors } from '../atomic/Color/ColorMap';
import Typography from '../atomic/Typography';

type PlaceholderProps = {
  color?: Colors;
  width?: number;
  height?: number;
  borderRadius?: number;
  label?: string;
};

type StyledPlaceholderProps = {
  bgcolor: ColorVariant;
  width: PlaceholderProps['width'];
  height: PlaceholderProps['height'];
  borderRadius: PlaceholderProps['borderRadius'];
};

export const StyledPlaceholder = styled.div<StyledPlaceholderProps>`
background-color: ${({ bgcolor }) => bgcolor.extraLight};
width: ${({ width }) => `${width}px`}
height: ${({ height }) => `${height}px`}
border: ${({ bgcolor }) => `1px solid ${bgcolor.main}`};
border-radius: ${({ borderRadius }) => `${borderRadius}px`};
padding: 10px;
margin: 5px;
`;

function Placeholder({
  color = 'grey',
  height = 30,
  width = 30,
  borderRadius = 30,
  label = '',
}: PlaceholderProps): ReactElement {
  return (
    <StyledPlaceholder
      bgcolor={ColorMap[color]}
      width={width}
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
