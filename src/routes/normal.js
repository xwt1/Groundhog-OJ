
import HomePage from "../pages/app/main";

const normalRoutes = [
    {

        path: '/home',
        component: HomePage,
        role:'user',
        backUrl:'/auth/login'
    },
];

export default normalRoutes;
