import React from 'react'
import { CssBaseline } from '@mui/material'
import TextEditor from '../../components/Write/TextEditor'
import WriteHeader from '../../components/Write/WriteHeader'

const Write = () => {
    return (
        <section>
            <React.Fragment>
                <WriteHeader />
                <CssBaseline />
                <TextEditor />
            </React.Fragment>
        </section>
    )
}

export default Write