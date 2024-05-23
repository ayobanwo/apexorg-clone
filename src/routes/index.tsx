import React from 'react'
import Homepage from '../pages/Homepage'
import Onboarding from '../pages/Onboarding'
import CreateAccount from '../pages/CreateAccount'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import About from '../pages/About'

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
]

export default routes