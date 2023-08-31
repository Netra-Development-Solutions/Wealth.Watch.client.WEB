const HomePageLayout = ({ children }) => {
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
    )
}

export default HomePageLayout;