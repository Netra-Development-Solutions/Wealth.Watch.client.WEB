import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

import HomePageComponent from '../../components/HomePageComponent';
import TransactionForm from 'wealth_watch_transaction_react/TransactionForm';
import TransactionList from 'wealth_watch_transaction_react/TransactionList';

const HomePageLayout = () => {
    return (
        <Paper sx={{ display: 'flex', flexDirection: 'column', margin: '1rem 0' }} elevation={1}>
    <Grid container>
        <Grid item xs={12} md={6}>
            <HomePageComponent />
        </Grid>
        <Grid item xs={12} md={6}>
            <TransactionForm />
        </Grid>
        <Grid item xs={12}>
            <TransactionList />
        </Grid>
    </Grid>
</Paper>
)};

export default HomePageLayout;