import { CssBaseline } from '@mui/material'
import React from 'react'
import Header from '../../components/Home/Header';
import Showcase from '../../components/Home/Showcase';
import Slider from '../../components/Home/Slider';
import AuthAlert from '../../components/utils/AuthAlert';
import QuickRead from '../../components/Home/QuickRead';
import Article from '../../components/Home/Article';

const Index = () => {
    
    return (
        <section style={{backgroundColor: "#f6f8fc" }}>
            <React.Fragment>
                <Header />
                <CssBaseline />
                <Showcase />
                <Slider />
                <QuickRead />
                <Article />
                <AuthAlert />
            </React.Fragment>
        </section>
    )
}

export default Index