import React from 'react'
import Homepage from '../pages/Homepage'
import Onboarding from '../pages/Onboarding'
import CreateAccount from '../pages/CreateAccount'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard/Dashboard'
import Wallet from '../pages/Dashboard/Wallet'
import Ranking from '../pages/Dashboard/Ranking'
import History from '../pages/Dashboard/History'
import Account from '../pages/Dashboard/Account'
import Referral from '../components/Dashboard/Account/Referral'
import Security from '../components/Dashboard/Account/Security'
import ProfileUpdate from '../pages/Dashboard/ProfileUpdate'

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
    {
        path: '/referral',
        element: <Referral /> ,
    },
    {
        path: '/security',
        element: <Security /> ,
    },
    {
        path: '/profile-update',
        element: <ProfileUpdate /> ,
    },

]

export default routes