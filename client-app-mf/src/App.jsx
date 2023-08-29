import { Container } from '@mui/system';
import './App.css';
import React from 'react';
import BankAccountForm from './components/forms/BankAccount';
import ResponsiveAppBar from './components/layout/header';
import ReactDOM from 'react-dom/client';
import theme from './components/layout/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import CreditCardForm from './components/forms/CreditCard';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import HomePageComponent from './components/HomePageComponent';
import reportWebVitals from './reportWebVitals';

import TransactionList from 'wealth_watch_transaction_react/TransactionList';
import TransactionForm from 'wealth_watch_transaction_react/TransactionForm';

import RegisterForm from "user_management/Register";
import LoginForm from "user_management/Login";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />

            <Container>
                <Paper sx={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }} elevation={1}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <HomePageComponent />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TransactionForm />
                            <RegisterForm />
                            <LoginForm />
                        </Grid>
                        <Grid item xs={12}>
                            <TransactionList />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </ThemeProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export default App;