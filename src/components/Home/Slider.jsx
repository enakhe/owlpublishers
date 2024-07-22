import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, BottomNavigation, BottomNavigationAction, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, useMediaQuery } from '@mui/material';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import image from '../../img/author.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { AutoPlaySwipeableViews, ExpandMore } from '../../functions/Home/SliderFunctions';
import { Item } from '../../functions/Home/ShowcaseFunctions';
import { articles } from '../../app/objects';
import { showcaseTitle } from '../../styles/Home/ShowcaseStyles';


const Slider = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = React.useState(0);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const maxSteps = articles.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const elipseHandler = (text) => {
        return text.split(' ').slice(0, 30).join(' ').concat('...');
    }

    const elipseHandlerTopic = (text) => {
        return text.split(' ').slice(0, 5).join(' ').concat('...');
    }

    return (
        <div className='container' style={{ marginTop: "4rem" }}>
            <div className="center">
                <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {
                            articles.map((step, index) => (
                                <div key={index}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <>
                                            {
                                                isMatch ? (
                                                    <>
                                                        <Typography sx={showcaseTitle.sx}>
                                                            Best Read <StarIcon />
                                                        </Typography>
                                                        <Item sx={{ minHeight: "435px", }}>
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
                                                                image={step.imgPath}
                                                                alt="Paella dish"
                                                            />
                                                            <CardContent>
                                                                <Typography>
                                                                    {
                                                                        elipseHandlerTopic(step.topic)
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
                                                                        {
                                                                            elipseHandler(step.description)
                                                                        }
                                                                    </Typography>
                                                                </CardContent>
                                                            </Collapse>
                                                        </Item>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Typography sx={showcaseTitle.sx}>
                                                            Best Read <StarIcon />
                                                        </Typography>
                                                        <Card key={index} sx={{ display: 'flex' }}>
                                                            <CardMedia
                                                                component="img"
                                                                height="220"
                                                                image={step.imgPath}
                                                                alt="Paella dish"
                                                                sx={{ objectFit: "cover", width: "100%" }} />
                                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                                    <Typography component="div" variant="h4">
                                                                        {
                                                                            elipseHandlerTopic(step.topic)
                                                                        }
                                                                    </Typography>
                                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                                        {
                                                                            elipseHandler(step.description)
                                                                        }
                                                                    </Typography>
                                                                </CardContent>
                                                            </Box>
                                                        </Card>
                                                    </>

                                                )
                                            }
                                        </>
                                    ) : null}
                                </div>
                            ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </div>
        </div>
    )
};

export default Slider