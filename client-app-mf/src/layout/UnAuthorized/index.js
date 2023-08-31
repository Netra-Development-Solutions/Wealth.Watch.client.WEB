import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { Container } from '@mui/system';

import theme from '../../components/layout/theme';
import { Outlet } from 'react-router';

const UnAuthorizedLayout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    )
};

export default UnAuthorizedLayout;