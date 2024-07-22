import React from 'react'
import Header from '../../components/Home/Header'
import { CssBaseline } from '@mui/material'
import TextEditor from '../../components/Write/TextEditor'

const Write = () => {
    return (
        <section>
            <React.Fragment>
                <Header />
                <CssBaseline />
                <TextEditor />
            </React.Fragment>
        </section>
    )
}

export default Write