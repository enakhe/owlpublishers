import { AppBar, Avatar, Box, Button, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DrawerMenu from '../Home/DrawerMenu';
import { logout, reset } from '../../features/auth/authSlice';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import logo from '../../logo.png';
import { Item } from '../../functions/Home/ShowcaseFunctions';

const WriteHeader = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar sx={{ background: '#ffffff', boxShadow: "none", borderBottom: "1.5px solid #e8eaed" }}>
            <Toolbar sx={{ marginTop: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to='/'>
                    <img
                        src={logo}
                        srcSet={logo}
                        alt="Logo"
                        width="25"
                        loading="lazy"
                    />
                </Link>

                <div className='flex'>
                    {
                        isMatch ? (
                            <>
                                <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500" }}>
                                    <Link style={{ color: "#444746" }} to='/'>Owl Publisher</Link>
                                </Typography>
                                <DrawerMenu />
                            </>
                        ) : (
                            <>
                                {
                                    user ? (
                                        <>
                                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                                <Tooltip title="Account settings">
                                                    <IconButton
                                                        onClick={handleClick}
                                                        size="small"
                                                        sx={{ ml: 2 }}
                                                        aria-controls={open ? 'account-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}>
                                                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <MenuItem>
                                                    <Avatar /> My Account
                                                </MenuItem>
                                                <Divider />
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <Settings fontSize="small" />
                                                    </ListItemIcon>
                                                    Settings
                                                </MenuItem>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <Logout fontSize="small" />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                            <Tabs sx={{ color: "#444746" }}>
                                                <Tab key={user.fullName} label={user.fullName} sx={{ textTransform: "capitalize", color: "#444746", fontWeight: "700" }} />
                                            </Tabs>
                                            <Button sx={{ textTransform: "capitalize", marginLeft: "20px", }} color="error" size='large' variant="contained" onClick={onLogout}>
                                                Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <>

                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </Toolbar>
        </AppBar >
    )
}

export default WriteHeader