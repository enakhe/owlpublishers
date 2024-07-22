import React, { useEffect, useState } from 'react';
import { useTheme, Box, Button, Card, CardContent, CardMedia, Step, StepLabel, Stepper, TextField, Typography, useMediaQuery, Autocomplete, Divider, FormGroup, FormControlLabel, Switch, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Grid } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { personalInfo, reset } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import info from '../../img/info.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import RemoveIcon from '@mui/icons-material/Remove';
import Spiner from '../../components/utils/Spiner';
import styled from '@emotion/styled';

const steps = ['Personal Info', 'Pricing'];
var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre and Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SetUp = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [country, setCountry] = useState('');
    const [formWidth, setFormWidth] = useState('450px');
    const [formData, setFormData] = useState({
        phoneNumber: '',
        country: '',
        address: '',
    });
    const [errors, setErrors] = useState({});
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const { phoneNumber, address } = formData
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);


    useEffect(() => {
        if (user === null) {
            navigate('/signin');
        }

        if (isMatch) {
            setFormWidth('350px');
        }

        if (isError) {
            toast.error(message);
        }

        if (isSuccess) {
            setActiveStep(1);
            toast.success(`Successfully save changes`);
        }

        dispatch(reset());
    }, [isMatch, isError, message, isSuccess, user, navigate, dispatch])


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        let temp = {};
        temp.phoneNumber = phoneNumber !== "" ? "" : "Please enter your phone number";
        temp.country = country !== "" ? "" : "Please enter your country";
        temp.address = address !== "" ? "" : "Please enter your address";
        setErrors(temp);
        return Object.values(temp).every(x => x === '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validate();
        const personalData = {
            phoneNumber,
            country,
            address
        };
        dispatch(personalInfo(personalData));
    }

    return (
        <div className="container">
            <Box sx={{ width: '100%', marginTop: "30px" }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you're finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {
                            activeStep === 0 ? (
                                <>
                                    <Typography variant='h1' sx={{ fontSize: "2.5rem", color: "#444746", fontWeight: "500", marginTop: "3rem" }}>
                                        Let's know you more
                                    </Typography>
                                    <div className='center'>
                                        <div>
                                            <Link to="/" style={{ marginBottom: "0.5rem", alignItems: "center" }}>
                                                <KeyboardBackspaceIcon />
                                            </Link>
                                            <Card sx={{ width: formWidth }}>
                                                <CardContent sx={{ textAlign: 'center' }}>
                                                    <div className="center">
                                                        <CardMedia
                                                            component="img"
                                                            height="100px"
                                                            image={info}
                                                            alt="Mail Illustration"
                                                            sx={{ objectFit: "contain", width: "100px" }} />
                                                    </div>
                                                    <Typography variant='h1' sx={{ fontSize: "2rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem" }}>
                                                        Personal Info
                                                    </Typography>
                                                    <Typography variant='p' sx={{ color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem", marginTop: "3rem" }}>
                                                        Provide more info about you
                                                    </Typography>
                                                    <Box sx={{ '& .MuiTextField-root': { margin: 1, width: '90%', } }}>
                                                        <form noValidate autoComplete='on' onSubmit={onSubmit}>

                                                            <TextField
                                                                label="Phone number"
                                                                value={phoneNumber}
                                                                name='phoneNumber'
                                                                type='text'
                                                                autoComplete={phoneNumber}
                                                                variant='outlined'
                                                                onChange={onChange}
                                                                {...(errors.phoneNumber && { error: true, helperText: errors.phoneNumber })}
                                                            />

                                                            <Autocomplete
                                                                disablePortal
                                                                autoSelect={true}
                                                                id="country"
                                                                autoComplete={true}
                                                                options={country_list}
                                                                onChange={(event, value) => { setCountry(value) }}
                                                                renderInput={(params) =>
                                                                    <TextField
                                                                        {...params}
                                                                        label="Country"
                                                                        value={params}
                                                                        name='country'
                                                                        onChange={onChange}
                                                                        {...(errors.country && { error: true, helperText: errors.country })}
                                                                    />}
                                                            />

                                                            <TextField
                                                                label="Address"
                                                                value={address}
                                                                autoComplete={address}
                                                                name='address'
                                                                type='text'
                                                                variant='outlined'
                                                                onChange={onChange}
                                                                {...(errors.address && { error: true, helperText: errors.address })}

                                                            />
                                                            {
                                                                isLoading ? <Spiner /> : ""
                                                            }
                                                            <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} type='submit' variant='contained' size='large'>Save</Button>
                                                        </form>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='center' style={{ marginTop: "4rem" }}>
                                        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                                            <Grid item={true} xs={1} sm={6} sx={{ minHeight: "365px" }} md={6}>
                                                <Item>
                                                    <CardContent sx={{ textAlign: 'center' }}>
                                                        <Typography variant='h1' sx={{ fontSize: "1rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem" }}>
                                                            Free
                                                        </Typography>
                                                        <Typography variant='p' sx={{ fontSize: "0.7rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem", marginTop: "3rem" }}>
                                                            Introducing our FREE plan! Kickstart your writing journey without breaking the bank. Join now and enjoy essential features, basic publishing options, basic editing tools, and limited submission management—all at no cost.
                                                        </Typography>
                                                        <br />
                                                        <Typography variant='p' sx={{ fontSize: "1.2rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "3rem", marginTop: "4rem" }}>
                                                            &#8358; 0
                                                        </Typography>
                                                        <Divider />
                                                        <div className="center">
                                                            <FormGroup>
                                                                <FormControlLabel disabled control={<Switch />} label="Annual Billing" />
                                                            </FormGroup>
                                                        </div>
                                                        <Divider />
                                                        <Box sx={{ '& .MuiTextField-root': { margin: 1, width: '90%', } }}>
                                                            <nav>
                                                                <List>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="3 articles per week" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Basic writing and editing tools" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Limited submission management" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Basic publishing options" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Basic Profile" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                </List>
                                                            </nav>
                                                            <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} type='submit' variant='contained' size='large'>Get Started</Button>
                                                        </Box>
                                                    </CardContent>
                                                </Item>
                                            </Grid>
                                            <Grid item={true} xs={1} sm={6} sx={{ minHeight: "365px" }} md={6}>
                                                <Item>
                                                    <CardContent sx={{ textAlign: 'center' }}>
                                                        <Typography variant='h1' sx={{ fontSize: "1rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem" }}>
                                                            Basic
                                                        </Typography>
                                                        <Typography variant='p' sx={{ fontSize: "0.7rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "1rem", marginTop: "3rem" }}>
                                                            Introducing our Basic Tier! Take your writing to the next level with our affordable and feature-rich plan. Get access to advanced editing tools, expanded publishing options, and enhanced support—all at an incredible value.
                                                        </Typography>
                                                        <br />
                                                        <Typography variant='p' sx={{ fontSize: "1.2rem", color: "#444746", textAlign: "center", fontWeight: "500", marginBottom: "3rem", marginTop: "4rem" }}>
                                                            &#8358; 10,999
                                                        </Typography>
                                                        <Divider />
                                                        <div className="center">
                                                            <FormGroup>
                                                                <FormControlLabel control={<Switch />} label="Annual Billing" />
                                                            </FormGroup>
                                                        </div>
                                                        <Divider />
                                                        <Box sx={{ '& .MuiTextField-root': { margin: 1, width: '90%', } }}>
                                                            <nav>
                                                                <List>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Writing and editing tools" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Submission management" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Publishing options" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Feedbacks and reviews" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                    <ListItem disablePadding>
                                                                        <ListItemButton>
                                                                            <ListItemIcon>
                                                                                <RemoveIcon />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Profile and portfolio" />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                </List>
                                                            </nav>
                                                            <Button sx={{ width: '90%', margin: 1, textTransform: "capitalize" }} type='submit' variant='contained' size='large'>Get Started</Button>
                                                        </Box>
                                                    </CardContent>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </>
                            )
                        }
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}>
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </div>
    )
}

export default SetUp