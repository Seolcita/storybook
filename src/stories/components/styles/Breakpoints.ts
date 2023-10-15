interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const size = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

export const device: Size = {
  xs: `screen and (width < ${size.sm})`, // Extra small devices (phones, 599px and down)
  sm: `screen and (${size.sm} <= width)`, // Small devices (portrait tablets and large phones, 600px and up)
  md: `screen and (${size.md} <= width)`, // Medium devices (landscape tablets, 960px and up)
  lg: `screen and (${size.lg} <= width)`, // Large devices (laptops/desktops, 1280px and up)
  xl: `screen and (${size.xl} <= width)`, // Extra large devices (large laptops and desktops, 1920px and up)
};
