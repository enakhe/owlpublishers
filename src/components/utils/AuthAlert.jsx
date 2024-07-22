import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { getVerificationCode, reset } from '../../features/auth/authSlice';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AuthAlert = () => {
    const [open, setOpen] = React.useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) {
            if (user.verify === false) {
                setOpen(true)
            }
        } else {
            setOpen(false)
        }
    }, [user])

    const sendCode = () => {
        alert("Yess")
        dispatch(getVerificationCode());
        dispatch(reset());
        navigate('/verify-email')
    }

    return (
        <Snackbar open={open}>
            <Alert severity="warning" sx={{ width: '100%' }}>
                You have not verifed your email address. Please click <span style={{ color: "#1976D2", cursor: "pointer" }} onClick={sendCode}>here</span> to verify. A new code will be sent
            </Alert>
        </Snackbar>
    )
}

export default AuthAlert