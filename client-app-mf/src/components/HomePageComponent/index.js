import { Paper } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
import { get } from "../../utils/apiHelper";
import { useNavigate } from 'react-router';

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
    const [bankAccounts, setBankAccounts] = React.useState([]);
    const [creditCards, setCreditCards] = React.useState([]);
    const navigate = useNavigate();

    var userDetails;
    
    React.useEffect(() => {
        userDetails = localStorage.getItem("userauthdetails") ? JSON.parse(localStorage.getItem("userauthdetails")) : null;

        console.log(userDetails);

        if (!userDetails) {
            navigate("/", { replace: true });
        }

        const token = userDetails?.token;

        get("http://localhost:4000/BANK/get-all-accounts", `Bearer ${token}`)
            .then((response) => {
                setBankAccounts(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            });

        get("http://localhost:4000/CREDITCARD/get-all-accounts", `Bearer ${token}`)
            .then((response) => {
                setCreditCards(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Paper style={{
            padding: '1rem',
            margin: '1rem',
        }} elevation={1}>
            <Grid container spacing={1} >
                {bankAccounts?.map((item) => {
                    return (
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" color='primary' fullWidth>{item?.accountName}</Button>
                        </Grid>
                    )
                })}
                {creditCards?.map((item) => {
                    return (
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" color='secondary' fullWidth>{item?.cardName}</Button>
                        </Grid>
                    )
                })}
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