import HomePageComponent from "./components/HomePageComponent";
import RegisterForm from "user_management/Register";
import LoginForm from "user_management/Login";

const routes = [
    {
        path: '/register',
        element: <RegisterForm />
    },
    {
        path: '/',
        element: <HomePageComponent />
    },
    {
        path: '/login',
        element: <LoginForm />
    },
    {
        path: '*',
        element: <>
            <h1>404</h1>
        </>
    }
];

export default routes;  