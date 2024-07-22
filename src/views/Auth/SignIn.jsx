import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signin, reset } from '../../features/auth/authSlice';
import { Box, Button, Card, CardContent, TextField, Typography, useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import Center from '../../components/utils/Center';
// import logo from '../../logo.png';
import Spiner from '../../components/utils/Spiner';
import { useTheme } from '@emotion/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [formWidth, setFormWidth] = useState('500px');

    const { email, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            console.log(message);
            toast.error(message);
        }

        if (isSuccess || user) {
            if (user.verify === false) {
                navigate('/verify-email');
            } else {
                navigate('/');
            }
        }

        if (isMatch) {
            setFormWidth('350px');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch, isMatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        validate();
        const userData = {
            email, password
        }
        dispatch(signin(userData));
    };

    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(email) ? "" : 'Email is not valid';
        temp.password = password !== "" ? "" : "Please enter your password";
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    return (
        <Center>
            <Link to="/" style={{ marginBottom: "0.5rem", alignItems: "center" }}>
                <KeyboardBackspaceIcon />
            </Link>
            <Card sx={{ width: formWidth }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Link to="/">
                        <Typography variant='h1' sx={{ fontSize: "2rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem" }}>
                            Owl Publisher
                        </Typography>
                    </Link>
                    <Typography variant='h5' sx={{ color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem" }}>
                        Sign in to your account
                    </Typography>
                    <Box sx={{ '& .MuiTextField-root': { margin: 1, width: '90%', } }}>
                        <form onSubmit={onSubmit}>
                            <TextField
                                label="Email"
                                value={email}
                                name='email'
                                type='email'
                                variant='outlined'
                                onChange={onChange} {...(errors.email && { error: true, helperText: errors.email })} />
                            <TextField label="Password" value={password} name='password' type='password' variant='outlined' onChange={onChange} {...(errors.password && { error: true, helperText: errors.password })} />
                            {
                                isLoading ? <Spiner /> : ""
                            }
                            <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} type='submit' variant='contained' size='large'>Sign in</Button>
                        </form>
                    </Box>
                </CardContent>
                <div className="center">
                    <Link to="/signup">
                        <Button sx={{ width: '90%', margin: 1, textTransform: "none" }} size="small">Sign up</Button>
                    </Link>
                </div>
                <div className="center">
                    <Link to="/">
                        <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} size="small">Forgot password</Button>
                    </Link>
                </div>
            </Card>
        </Center>
    )
}

export default SignIn