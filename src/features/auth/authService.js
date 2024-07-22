import axios from 'axios';
const API_URL = 'api/users/';

// Register a new user
const signup = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    };
    return response.data;
};

// Login a user
const signin = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    };
    return response.data;
};

// Verify a user email
const verifyEmail = async (codeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'verify-email', codeData, config);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    };
    return response.data;
}

// Verify a user email
const getVerificationCode = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'get-code', config);
    console.log(response);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    };
    return response.data;
}

// Post Personal Information
const personalInfo = async (personalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'personal-info', personalData, config);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    };
    return response.data;
}

// Logout a user
const logout = async () => {
    localStorage.removeItem('user');
}

const authService = {
    signin,
    signup,
    verifyEmail,
    logout,
    getVerificationCode,
    personalInfo
};

export default authService;