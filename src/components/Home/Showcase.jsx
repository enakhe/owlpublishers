import React from 'react'
import { Box, Grid, } from '@mui/material';
import { showcasePopularLargeGrid } from '../../styles/Home/ShowcaseStyles';
import EditorsPick from './EditorsPick';
import ForYou from './ForYou';


const Showcase = () => {
    return (
        <section style={{ paddingTop: "180px" }}>
            <div className="container-md">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={showcasePopularLargeGrid.spacing} columns={showcasePopularLargeGrid.column}>
                        <EditorsPick />
                        <ForYou />
                    </Grid>
                </Box>
            </div>
        </section>
    )
}

export default Showcase