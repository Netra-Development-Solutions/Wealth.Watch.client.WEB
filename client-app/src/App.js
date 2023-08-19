import { Container } from '@mui/system';
import './App.css';
import BankAccountForm from './components/forms/BankAccount';
import ResponsiveAppBar from './components/layout/header';
import theme from './components/layout/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />
            <Container maxWidth="md">
                <BankAccountForm />
            </Container>
        </ThemeProvider>
    );
}

export default App;
