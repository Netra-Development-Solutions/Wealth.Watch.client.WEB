import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { pages } from '../../../constants';

const NavLinks = ({ handleCloseNavMenu }) => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    // if total length of component is more than max length of component, then show a button to show more
    // calculate total length of component

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
                <Button
                    key={page.key}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: isDark ? theme.palette.common.white : theme.palette.primary.contrastText, display: 'block' }}
                >
                    {page.name}
                </Button>
            ))}
        </Box>
    )
}

export default NavLinks;