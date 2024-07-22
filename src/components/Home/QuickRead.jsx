import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Forward30Icon from '@mui/icons-material/Forward30';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const QuickRead = () => {
    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = React.useState(0);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const elipseHandler = (text) => {
        return text.split(' ').slice(0, 7).join(' ').concat('...');
    }

    return (
        <div className="container-md">
            <Box sx={{ flexGrow: 1, margin: "50px 0px" }}>
                <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                    Quick Read <Forward30Icon />
                </Typography>
                <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, sm: 6, md: 12 }}>
                    <Grid item={true} xs={1} sm={3} md={3} sx={{ minHeight: "365px" }}>
                        <Item sx={{minHeight: "435px",}}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                title="Izuagbe Samuel Enakhe"
                                subheader="June 21st, 2023"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography>
                                    {
                                        elipseHandler("Apple's VR Is Breaking The Internet")
                                    }
                                </Typography>
                                <span style={{ color: "#1976D2" }}>Technology</span>
                            </CardContent>
                            <CardActions disableSpacing>
                                <div>
                                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                        <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                        <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                        <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                    </BottomNavigation>
                                </div>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Item>
                    </Grid>
                    <Grid item={true} xs={1} sm={3} md={3} sx={{ minHeight: "365px" }}>
                        <Item sx={{ minHeight: "435px" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                title="Izuagbe Samuel Enakhe"
                                subheader="June 21st, 2023"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.pexels.com/photos/618923/pexels-photo-618923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography>
                                    {
                                        elipseHandler("Safty Tips For Pregnant Women")
                                    }
                                </Typography>
                                <span style={{ color: "#1976D2" }}>Health</span>
                            </CardContent>
                            <CardActions disableSpacing>
                                <div>
                                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                        <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                        <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                        <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                    </BottomNavigation>
                                </div>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Item>
                    </Grid>
                    <Grid item={true} xs={1} sm={3} md={3} sx={{ minHeight: "365px" }}>
                        <Item sx={{ minHeight: "435px" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                title="Izuagbe Samuel Enakhe"
                                subheader="June 21st, 2023"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography>
                                    {
                                        elipseHandler("Why You Should Eat Fruits Everyday")
                                    }
                                </Typography>
                                <span style={{ color: "#1976D2" }}>Health</span>
                            </CardContent>
                            <CardActions disableSpacing>
                                <div>
                                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                        <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                        <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                        <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                    </BottomNavigation>
                                </div>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Item>
                    </Grid>
                    <Grid item={true} xs={1} sm={3} md={3} sx={{ minHeight: "365px" }}>
                        <Item sx={{ minHeight: "435px" }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                title="Izuagbe Samuel Enakhe"
                                subheader="June 21st, 2023"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography>
                                    {
                                        elipseHandler("Best Programming Language in 2023")
                                    }
                                </Typography>
                                <span style={{ color: "#1976D2" }}>Programming</span>
                            </CardContent>
                            <CardActions disableSpacing>
                                <div>
                                    <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                        <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                        <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                        <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                    </BottomNavigation>
                                </div>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Item>
                    </Grid>
                </Grid>
                <div className="center">
                    <Button variant="contained" size="large" sx={{marginTop: "1rem"}} endIcon={<ArrowRightAltIcon />}>
                        See More
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default QuickRead