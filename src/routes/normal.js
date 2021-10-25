
import HomePage from "../pages/app/home";

const normalRoutes = [
    {

        path: '/home',
        component: HomePage,
        role:'user',
        backUrl:'/auth/login'
    },
];

export default normalRoutes;
