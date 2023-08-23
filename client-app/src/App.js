import { Container } from '@mui/system';
import './App.css';
import BankAccountForm from './components/forms/BankAccount';
import ResponsiveAppBar from './components/layout/header';
import theme from './components/layout/theme';
import { ThemeProvider } from '@mui/material/styles';
import TransactionForm from './components/forms/Transactions';
import { CssBaseline, Grid } from '@mui/material';
import CreditCardForm from './components/forms/CreditCard';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import HomePageComponent from './components/HomePageComponent';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />

            <Container>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }} elevation={1}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <HomePageComponent />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TransactionForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </ThemeProvider>
    );
}

export default App;
