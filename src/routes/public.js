import AuthPage from '../pages/auth/authpage';
import NotFound from "../pages/error/error";
import {Redirect} from "react-router-dom";

const publicRoutes = [
    {

        path: '/auth/login',
        component: AuthPage,
        exact: true,
    },
    {
        path: '/auth/register',
        component: AuthPage,
        exact: true,
    },

    {
        path: '/notfound',
        component: NotFound,
        exact: true,
    },
    {
        path: '/',
        exact: true,
        component: ()=> <Redirect to={'/home'}/>,

    },
];

export default publicRoutes;
