import { Paper } from '@mui/material';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles';
import { get } from "../../utils/apiHelper";

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

    React.useEffect(() => {
        const token =
            "b8b3ca333b62f6969cd2f85e4d194faf83020892bca77db75cd959b23608693d6b0650ac12389550b7fd819d45a8d363827aa54e8b3863a0975bd785233fe1e53032cfa2635e4fc526b0764d2c126d33a7ed9500ae5345fcd98df2bb5b0d778ac9f55105552d9b1b5e556aedc9c5bcf5a95e862ecdfa565d99cd5323199d253a7b73ea53d1f1530adfab14acf133ab6d986aec88f72a8ca0cc7c1c18db11c36c8d05a08302e447e489c92ffcb45264da3ac5d33d22712f324e92a664e84d8ce0fcf68cbccf7910ef61f539dcb186297c983764cb08eff91613.d217b2d6ebcbadb1a604b3b436521202";
        
        get("http://localhost:4000/BANK/get-all-accounts", `Bearer ${token}`)
                .then((response) => {
                    setBankAccounts(response?.data?.data);
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