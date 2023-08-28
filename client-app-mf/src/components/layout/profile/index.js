import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { profileSettings } from '../../../constants';

const UserProfileAvatar = ({anchorElUser, handleCloseUserMenu, handleOpenUserMenu}) => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Naman Khater" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmE2FvWm3SmI3SXpe7isregILrkg6KD-_MLzBU4O_FGQ&s" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {profileSettings.map((setting) => (
                    <MenuItem key={setting.key} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default UserProfileAvatar;