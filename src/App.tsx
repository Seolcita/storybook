import { ThemeProvider } from 'styled-components';
import { theme } from './stories/components/styles/Theme';
import { GlobalStyles } from './stories/components/styles/Global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>App</h1>
    </ThemeProvider>
  );
}

export default App;
