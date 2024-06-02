import React from 'react'
import DashNavbarLayout from '../../components/Dashboard/DashNavbarLayout'
import UserDashboard from '../../components/Dashboard/UserDashboard'



const Dashboard = () => {
    return (
        <DashNavbarLayout>
            <UserDashboard />
        </DashNavbarLayout>
    )
}

export default Dashboard