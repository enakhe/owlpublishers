import EmailVerification from "./views/Auth/EmailVerification";
import SetUp from "./views/Auth/SetUp";
import SignIn from "./views/Auth/SignIn";
import SignUp from "./views/Auth/SignUp";
import Index from "./views/Home/Index";
import Write from "./views/Write/Write";

const AppRoutes = [
    {
        path: '/',
        element: <Index />,
        name: 'Home',
    },

    {
        path: '/signup',
        element: <SignUp />,
        name: 'SignUp',
    },

    {
        path: '/signin',
        element: <SignIn />,
        name: 'Home',
    },

    {
        path: '/setup',
        element: <SetUp />,
        name: 'Home',
    },

    {
        path: '/verify-email',
        element: <EmailVerification />,
        name: 'Home',
    },

    {
        path: '/write',
        element: <Write />,
        name: 'Home',
    },
];

export default AppRoutes;