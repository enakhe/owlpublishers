import { Avatar, BottomNavigation, BottomNavigationAction, CardActions, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import { showcaseEditorPickCardMedia, showcaseEditorPickItem, showcaseTitle } from '../../styles/Home/ShowcaseStyles';
import { Link } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import image from '../../img/author.jpg';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Item } from '../../functions/Home/ShowcaseFunctions';

const EditorsPick = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Grid item={true} xs={1} sm={8} sx={{ minHeight: "365px" }} md={8}>
            <Typography sx={showcaseTitle.sx}>
                Editor's Pick <AutoAwesomeIcon />
            </Typography>
            <Link to='/'>
                <Item sx={showcaseEditorPickItem.sx} className='transition'>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="icon">
                                <CardMedia
                                    component="img"
                                    height="40px"
                                    image={image}
                                    alt="Izuagbe Samuel Enakhe"
                                    sx={showcaseEditorPickCardMedia.sx}
                                />
                            </Avatar>
                        }
                        title="Izuagbe Samuel Enakhe"
                        subheader="September 14, 2016"
                    />
                    <Grid container spacing={{ xs: 1, md: 2 }} sx={{ padding: "1rem" }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        <Grid item={true} xs={1} sm={8} md={6}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
                                alt="Paella dish"
                                sx={showcaseEditorPickCardMedia.sx2} />
                        </Grid>
                        <Grid item={true} xs={1} sm={8} md={6}>
                            <Typography variant="h5" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem" }}>
                                Why California is the best place to visit for an honeymoon
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                            <div className="center">
                                <CardActions disableSpacing>
                                    <div className='center'>
                                        <div>
                                            <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
                                                <BottomNavigationAction label="1.4k" icon={<FavoriteIcon sx={{ color: red[500] }} />} />
                                                <BottomNavigationAction label="1.4k" icon={<ShareIcon />} />
                                                <BottomNavigationAction label="1.4k" icon={<ChatBubbleIcon />} />
                                            </BottomNavigation>
                                        </div>
                                    </div>
                                </CardActions>
                            </div>
                        </Grid>
                    </Grid>
                </Item>
            </Link>
        </Grid>
    )
}

export default EditorsPick