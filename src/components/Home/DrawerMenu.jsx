import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import MenuIcon from '@mui/icons-material/Menu';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import LanguageIcon from '@mui/icons-material/Language';
import { useSelector } from 'react-redux';

const tags = [
    "Entertainment",
    "News",
    "Book",
    "Technology",
    "Sport",
    "Business",
    "Science",
    "Health"
]

function DrawerMenu() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const { user } = useSelector((state) => state.auth);


    return (
        <React.Fragment>
            <Drawer sx={{ width: '100%', maxWidth: 450 }}  open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <nav aria-label="main mailbox folders">
                    <List sx={{ width: '100%', minWidth: 300, }}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CardMembershipIcon />
                                </ListItemIcon>
                                <ListItemText primary="Memebership" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AttachMoneyIcon />
                                </ListItemIcon>
                                <ListItemText primary="Pricing" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CreateRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Write" />
                            </ListItemButton>
                        </ListItem>
                        {
                            !user ? (
                                <>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <VpnKeyIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Sign In" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton component="a" href="#simple-list">
                                            <ListItemIcon>
                                                <ExitToAppIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Sign Up" />
                                        </ListItemButton>
                                    </ListItem>
                                </>

                            ) : (
                                <>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CardMembershipIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Top stories" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <AttachMoneyIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="For you" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <CreateRoundedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Following" />
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            )
                        }
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        {
                            tags.map((tag, index) => (
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemText primary={tag} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <LanguageIcon />
                                </ListItemIcon>
                                <ListItemText primary="Language" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                    <HelpIcon />
                                </ListItemIcon>
                                <ListItemText primary="Help" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Drawer>
            <IconButton sx={{ color: "#444746", cursor: "pointer" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerMenu