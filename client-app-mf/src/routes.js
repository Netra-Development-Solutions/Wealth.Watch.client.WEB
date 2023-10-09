import LoggedInLayout from "./layout/LoggedIn";
import UnAuthorizedLayout from "./layout/UnAuthorized";
import Authentication from "./components/forms/Authentication";
import TransactionMainLayout from "wealth_watch_transaction_react/TransactionMainLayout";
import AccountManagementComponent from "account_management/AccountManagementComponent"
import BankAccountForm from "account_management/BankAccountForm";
import CreditCardForm from "account_management/CreditCardForm";
import { Navigate, Outlet } from "react-router-dom";

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
            },
            {
                path: '/dashboard/accounts',
                element: <Outlet />,
                children: [
                    { path: '/dashboard/accounts', element: <AccountManagementComponent /> },
                    { path: '/dashboard/accounts/bank', element: <BankAccountForm /> },
                    { path: '/dashboard/accounts/credit', element: <CreditCardForm /> },
                ]
            }
        ],
    },
    {
        path: '*',
        element: <>
            <Navigate to="/" />
        </>
    }
];

export default routes;  