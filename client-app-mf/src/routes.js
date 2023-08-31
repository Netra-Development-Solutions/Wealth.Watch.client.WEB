import HomePageComponent from "./components/HomePageComponent";
import LoginForm from "user_management/Login";
import LoggedInLayout from "./layout/LoggedIn";
import UnAuthorizedLayout from "./layout/UnAuthorized";
import RegisterForm from "user_management/Register";
import Authentication from "./components/forms/Authentication";

const routes = [
    {
        path: '/',
        element: <UnAuthorizedLayout />,
        children: [
            {
                path: '/',
                element: <Authentication />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <LoggedInLayout />,
        children: [
            {
                path: '/dashboard',
                element: <HomePageComponent />
            }
        ]
    },
    {
        path: '*',
        element: <>
            <h1>404</h1>
        </>
    }
];

export default routes;  