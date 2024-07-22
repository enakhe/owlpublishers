import React, { Fragment } from 'react'
import { Box, CardMedia, Divider, Grid, Tab, Tabs, Typography } from '@mui/material'
import { popular, trending } from '../../app/objects';
import StarIcon from '@mui/icons-material/Star';
import { showcasePopularGrid, showcasePopularImage, showcasePopularTitle, showcaseTitle } from '../../styles/Home/ShowcaseStyles';
import { Item, TabPanel, a11yProps } from '../../functions/Home/ShowcaseFunctions';


const ForYou = () => {

    const [value2, setValue2] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue2(newValue);
    };

    return (
        <Grid item={true} xs={1} sm={8} md={4}>
            <Typography sx={showcaseTitle.sx}>
                For you <StarIcon />
            </Typography>
            <Item sx={{ minHeight: "365px" }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value2} onChange={handleChange} aria-label="Content" centered>
                            <Tab label="Popular" {...a11yProps(0)} />
                            <Tab label="Trending" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel variant="div" value={value2} index={0}>
                        {
                            popular.map((item, index) => (
                                <Fragment>
                                    <Grid container spacing={showcasePopularGrid.spacing} sx={showcasePopularGrid.sx} columns={showcasePopularGrid.column}>
                                        <Grid item={true} xs={1} sm={2} md={2}>
                                            <CardMedia
                                                component="img"
                                                height="40px"
                                                image={item.img}
                                                alt="Paella dish"
                                                sx={showcasePopularImage.sx} />
                                        </Grid>
                                        <Grid item={true} xs={1} sm={6} md={10}>
                                            <Typography variant="p" color="#444746" sx={showcasePopularTitle.sx}>
                                                {item.title}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Fragment>
                            ))
                        }
                    </TabPanel>
                    <TabPanel value={value2} index={1}>
                        {
                            trending.map((item, index) => (
                                <Fragment>
                                    <Grid container spacing={showcasePopularGrid.spacing} sx={showcasePopularGrid.sx} columns={showcasePopularGrid.column}>
                                        <Grid item={true} xs={1} sm={2} md={2}>
                                            <CardMedia
                                                component="img"
                                                height="40px"
                                                image={item.img}
                                                alt="Paella dish"
                                                sx={showcasePopularImage.sx} />
                                        </Grid>
                                        <Grid item={true} xs={1} sm={6} md={10}>
                                            <Typography variant="p" color="#444746" sx={showcasePopularTitle.sx}>
                                                {item.title}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                </Fragment>
                            ))
                        }
                    </TabPanel>
                </Box>
            </Item>
        </Grid>
    )
}

export default ForYou