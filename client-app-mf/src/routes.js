import LoggedInLayout from "./layout/LoggedIn";
import UnAuthorizedLayout from "./layout/UnAuthorized";
import Authentication from "./components/forms/Authentication";
import TransactionMainLayout from "wealth_watch_transaction_react/TransactionMainLayout";

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
                element: <TransactionMainLayout />
            },
            {
                path: '/dashboard/transactions',
                element: <TransactionMainLayout />
            }
        ],
    },
    {
        path: '*',
        element: <>
            <h1>404</h1>
        </>
    }
];

export default routes;  