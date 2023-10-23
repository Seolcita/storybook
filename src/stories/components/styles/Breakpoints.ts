interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

const size = {
  sm: 600,
  md: 960,
  lg: 1440,
};

export const device: Size = {
  xs: `screen and (width < ${size.sm}px)`, // phone
  sm: `screen and (width < ${size.md}px )`, // tablet
  md: `screen and (width < ${size.lg}px )`, // laptop
  lg: `screen and (${size.lg}px <= width)`, // desktop
};

export const isMobile = window.innerWidth < size.sm;
export const isTablet =
  size.sm <= window.innerWidth && window.innerWidth < size.md;
export const isTabletOrSmaller = window.innerWidth < size.md;
export const isLaptop =
  size.md <= window.innerWidth && window.innerWidth < size.lg;
export const isLaptopOrSmaller = window.innerWidth < size.lg;
export const isDesktop = window.innerWidth <= size.lg;
