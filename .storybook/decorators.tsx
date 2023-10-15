import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/stories/components/styles/Global';
import { theme } from '../src/stories/components/styles/Theme';

export const withTheme: Decorator = (Story) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  );
};

export const globalDecorators = [withTheme];
