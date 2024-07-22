import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

const Popup = ({message}) => {

    const [open, setOpen] = useState(true);

    const handleClose = (event, reason)=> {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity='error' sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Popup