import React from 'react'
import Homepage from '../pages/Homepage'
import Onboarding from '../pages/Onboarding'
import CreateAccount from '../pages/CreateAccount'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Wallet from '../pages/Wallet'
import Ranking from '../pages/Ranking'
import History from '../pages/History'
import Account from '../pages/Account'

const routes = [
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/onboarding',
        element: <Onboarding />,
    },
    {
        path: '/create-account',
        element: <CreateAccount />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/dashboard',
        element: <Dashboard /> ,
    },
    {
        path: '/wallet',
        element: <Wallet /> ,
    },
    {
        path: '/rank',
        element: <Ranking /> ,
    },
    {
        path: '/history',
        element: <History /> ,
    },
    {
        path: '/account',
        element: <Account /> ,
    },
]

export default routes