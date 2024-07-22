import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { verifyEmail, reset } from '../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import Spiner from '../../components/utils/Spiner';
import Center from '../../components/utils/Center';
import mail from '../../img/mail.svg'
import CountDown from '../../components/utils/CountDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const EmailVerification = () => {
    const [code, setCode] = useState('');
    const [formWidth, setFormWidth] = useState('450px');
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user === null) {
            navigate('/signin');
        }

        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            toast.success('Email verified successfully');
            navigate('/setup');
        }

        if (isMatch) {
            setFormWidth('350px');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, dispatch, navigate, isMatch]);

    const onSubmit = (e) => {
        e.preventDefault();
        validate();
        dispatch(verifyEmail({ code }));
    }

    const validate = () => {
        let temp = {};
        temp.code = code !== "" ? "" : "Please enter a valid code";
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    return (
        <React.Fragment>
            <Center>
                <Link to="/" style={{ marginBottom: "0.5rem", alignItems: "center" }}>
                    <KeyboardBackspaceIcon />
                </Link>
                <Card sx={{ width: formWidth }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <div className="center">
                            <CardMedia
                                component="img"
                                height="100px"
                                image={mail}
                                alt="Mail Illustration"
                                sx={{ objectFit: "contain", width: "100px" }} />
                        </div>
                        <Typography variant='h1' sx={{ fontSize: "2rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem" }}>
                            Verification
                        </Typography>
                        <Typography variant='p' sx={{ color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem", marginTop: "3rem" }}>
                            A verification code has been sent to your email
                        </Typography>
                        <Box sx={{ '& .MuiTextField-root': { margin: 1, width: '90%', } }}>
                            <form noValidate autoComplete='on' onSubmit={onSubmit}>

                                <TextField
                                    label="Enter code"
                                    value={code}
                                    name='code'
                                    type='text'
                                    variant='outlined'
                                    onChange={(e) => setCode(e.target.value)}
                                    {...(errors.code && { error: true, helperText: errors.code })}/>
                                {
                                    isLoading ? <Spiner /> : ""
                                }
                                <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} type='submit' variant='contained' size='large'>Verify</Button>
                            </form>
                        </Box>
                    </CardContent>
                    <CountDown seconds={300} />
                </Card>
            </Center>
        </React.Fragment>
    )
}

export default EmailVerification