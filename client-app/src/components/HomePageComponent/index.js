import { Paper } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';

const data = [
    { label: 'Group A', value: 400, color: '#0088FE' },
    { label: 'Group B', value: 300, color: '#00C49F' },
    { label: 'Group C', value: 300, color: '#FFBB28' },
    { label: 'Group D', value: 200, color: '#FF8042' },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

const HomePageComponent = () => {
    const theme = useTheme();

    return (
        <Paper style={{
            padding: '1rem',
            margin: '1rem',
        }} elevation={1}>
            <Grid container spacing={1} >
                <Grid item xs={12} md={6}>
                    <Button variant="contained" color='primary' fullWidth>Bank Account 1</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" color='primary' fullWidth>Bank Account 2</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" color='info' fullWidth>Credit card 1</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="contained" color='success' fullWidth>Cash</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1} mt={1}>
                <Grid item xs={12} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                }} >
                    <PieChart
                        series={[
                            {
                                outerRadius: 80,
                                data,
                                arcLabel: getArcLabel,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: theme.palette.mode === 'dark' ? '#fff' : '#000',
                                fontSize: 14,
                            },
                        }}
                        {...sizing}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default HomePageComponent;