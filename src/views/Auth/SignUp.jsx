import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup, reset } from '../../features/auth/authSlice';
import { Box, Button, Card, CardContent, TextField, Typography, useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import Center from '../../components/utils/Center';
// import logo from '../../logo.png';
import Spiner from '../../components/utils/Spiner';
import { useTheme } from '@emotion/react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [formWidth, setFormWidth] = useState('500px');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const { firstName, lastName, email, password, confirmPassword } = formData;
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/verify-email');
        }

        if (isMatch) {
            setFormWidth('350px');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch, isMatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        validate();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            const userData = {
                firstName, lastName, email, password
            }
            dispatch(signup(userData));
        }
    };

    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(email) ? "" : 'Email is not valid';
        temp.firstName = firstName !== "" ? "" : 'This field is required';
        temp.lastName = lastName !== "" ? "" : 'This field is required';
        temp.password = password && confirmPassword > 5 ? "" : "Password must be at least 6 characters";
        temp.confirmPassword = confirmPassword === password ? "" : "Password does not match";
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    return (
        <Center>
            <Link to="/" underline="hover" sx={{ marginBottom: "0.5rem", alignItems: "center" }}>
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
                        Create a new account
                    </Typography>
                    <Box sx={{ '& .MuiTextField-root': { margin: 1, width: '90%', } }}>
                        <form noValidate autoComplete='on' onSubmit={onSubmit}>

                            <TextField
                                label="First name"
                                value={firstName}
                                name='firstName'
                                type='text'
                                variant='outlined'
                                onChange={onChange}
                                {...(errors.firstName && { error: true, helperText: errors.firstName })}
                            />

                            <TextField
                                label="Last name"
                                value={lastName}
                                name='lastName'
                                type='text'
                                variant='outlined'
                                onChange={onChange}
                                {...(errors.lastName && { error: true, helperText: errors.lastName })}
                            />

                            <TextField
                                label="Email"
                                value={email}
                                name='email'
                                type='email'
                                variant='outlined'
                                onChange={onChange}
                                {...(errors.email && { error: true, helperText: errors.email })}
                            />

                            <TextField
                                label="Password"
                                value={password}
                                name='password'
                                type='password'
                                variant='outlined'
                                onChange={onChange}
                                {...(errors.password && { error: true, helperText: errors.password })}
                            />

                            <TextField
                                label="Confirm password"
                                value={confirmPassword}
                                name='confirmPassword'
                                type='password'
                                variant='outlined'
                                onChange={onChange}
                                {...(errors.confirmPassword && { error: true, helperText: errors.confirmPassword })}
                            />
                            {
                                isLoading ? <Spiner /> : ""
                            }
                            <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} type='submit' variant='contained' size='large'>Sign up</Button>
                        </form>
                    </Box>
                </CardContent>
                <div className="center">
                    <Link to="/signin">
                        <Button sx={{ width: '90%', margin: 1, textTransform: "none" }} size="small">Login instead</Button>
                    </Link>
                </div>
            </Card>
        </Center>
    )
}

export default SignUp