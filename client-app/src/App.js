import './App.css';
import ResponsiveAppBar from './components/layout/header';

import theme from './components/layout/theme';

import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
