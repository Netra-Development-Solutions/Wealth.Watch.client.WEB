import { Container } from '@mui/system';
import './App.css';
import ResponsiveAppBar from './components/layout/header';

import theme from './components/layout/theme';

import { ThemeProvider } from '@mui/material/styles';
import TransactionForm from './components/forms/Transactions';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Container>
        <TransactionForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
