import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { Container } from '@mui/system';

import theme from '../../components/layout/theme';
import ResponsiveAppBar from '../../components/layout/header';
import { Outlet } from 'react-router-dom';

const LoggedInLayout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />

            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    )
};

export default LoggedInLayout;