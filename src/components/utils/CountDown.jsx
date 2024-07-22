import React, { useEffect, useRef, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getVerificationCode, reset } from '../../features/auth/authSlice';


const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds <= 10) seconds = '0' + seconds;
    return minutes + ':' + seconds;
}

const CountDown = ({seconds}) => {
    const [countDown, setCountDown] = useState(seconds);
    const [message, setMessage] = useState('');
    const timerId = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(timerId.current);
            setMessage('Expired');
            toast.error('Token has expired, please request a new token');
        }
    }, [countDown])

    const sendCode = () => {
        dispatch(getVerificationCode());
        dispatch(reset());
        setCountDown(300);
    }

    return (
        <React.Fragment>
            <div className="center">
                <Typography variant='p'>
                    Token expires in: {
                        countDown > 0 ? formatTime(countDown) : message
                    }
                </Typography>
            </div>
            <div className='center'>
                <Button disabled={countDown > 0} sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} onClick={sendCode} >Resend Token</Button>
            </div>
        </React.Fragment>
    )
}

export default CountDown