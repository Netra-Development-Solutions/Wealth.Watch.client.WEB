import LoggedInLayout from "./layout/LoggedIn";
import UnAuthorizedLayout from "./layout/UnAuthorized";
import Authentication from "./components/forms/Authentication";
import HomePageLayout from "./layout/HomePageLayout";

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
                element: <HomePageLayout />
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