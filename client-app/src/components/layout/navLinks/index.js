import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const pages = ['Products', 'Pricing', 'Blog', 'About', 'Contact'];

const NavLinks = ({handleCloseNavMenu}) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    // if total length of component is more than max length of component, then show a button to show more
    // calculate total length of component

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: isDark ? theme.palette.common.white : theme.palette.primary.contrastText , display: 'block' }}
                >
                    {page}
                </Button>
            ))}
        </Box>
    )
}

export default NavLinks;