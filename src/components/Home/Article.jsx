import React from 'react'
import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardHeader, CardMedia, Divider, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ArticleIcon from '@mui/icons-material/Article';
import image from '../../img/author.jpg';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from 'react-router-dom';
import Footer from '../utils/Footer';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    borderRadius: "0px"
}));

const articles = [
    {
        topic: 'Mount Everest Is The Tallest Mountain In The World',
        description: 'Mount Everest is the tallest mountain in the world, with a peak that stands at 8,848 meters (29,031 feet) above sea level. It is located in the Himalayas, on the border between Nepal and China.',
        imgPath:
            'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        topic: 'The Solar System',
        description: 'The solar system is a vast collection of objects that orbit the Sun. It includes the Sun, eight planets, dwarf planets, moons, asteroids, comets, and dust.',
        imgPath:
            'https://media.istockphoto.com/id/1295851454/photo/earth-and-solar-system-planets.jpg?s=612x612&w=0&k=20&c=OKx3C55qBrlC7LISNSnUngKyaNrzLOOE2btTcITVaLs=',
    },
    {
        topic: 'Bali, Indonesia',
        description: 'Bali is an island in Indonesia that is known for its beautiful beaches, lush rice paddies, and vibrant culture. The island is home to a mix of Hindu and Muslim influences, and this is reflected in the architecture, art, and music of Bali.',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        topic: 'The Amazon Rainforest',
        description: 'The Amazon rainforest is the largest rainforest in the world. It is home to a vast array of life, including trees, plants, animals, and insects. It is home to a vast array of life, including trees, plants, animals, and insects',
        imgPath:
            'https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];


const Article = () => {
    const [value, setValue] = React.useState(0);

    const elipseHandler = (text) => {
        return text.split(' ').slice(0, 30).join(' ').concat('...');
    }

    const elipseHandlerTopic = (text) => {
        return text.split(' ').slice(0, 5).join(' ').concat('...');
    }

    return (
        <React.Fragment>
            <div className="container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                        <Grid item={true} xs={1} sm={8} sx={{ minHeight: "365px" }} md={8}>
                            <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                All Articles <ArticleIcon />
                            </Typography>

                            <Item sx={{ color: "#444746", minHeight: "365px", marginBottom: "2rem" }}>
                                {
                                    articles.map((article, index) => (
                                        <div key={index}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="icon">
                                                        <CardMedia
                                                            component="img"
                                                            height="40px"
                                                            image={image}
                                                            alt="Izuagbe Samuel Enakhe"
                                                            sx={{ borderRadius: "30px", objectFit: "cover", width: "40px" }}
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
                                                        image={article.imgPath}
                                                        alt="Paella dish"
                                                        sx={{ borderRadius: "10px", objectFit: "cover", width: "100%" }} />
                                                </Grid>
                                                <Grid item={true} xs={1} sm={8} md={6}>
                                                    <Typography variant="h5" color="#444746" sx={{ fontWeight: "400", marginBottom: "1rem" }}>
                                                        {
                                                            elipseHandlerTopic(article.topic)
                                                        }
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {
                                                            elipseHandler(article.description)
                                                        }
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
                                            <Divider variant="middle" />
                                        </div>
                                    ))
                                }
                            </Item>
                        </Grid>
                        <Grid item={true} xs={1} sm={8} md={4}>
                            <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                Explore your curiosities <TravelExploreIcon />
                            </Typography>
                            <Typography sx={{ fontSize: "1rem", paddingLeft: '3%', color: "#444746", fontWeight: "500", marginBottom: "1rem" }}>
                                Sign up to have the best experience
                            </Typography>
                            <Link style={{ color: "#ffff", paddingLeft: '3%' }} to='/signup'>
                                <Button sx={{ textTransform: "capitalize" }} size='large' variant="outlined">
                                    Get started
                                </Button>
                            </Link>
                            <Divider variant="middle" sx={{ marginTop: "5rem", paddingLeft: '3%' }} />
                            <Footer />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>
    )
}

export default Article