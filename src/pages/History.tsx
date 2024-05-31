import React from 'react'
import DashNavbarLayout from '../components/Dashboard/DashNavbarLayout'
import UserHistory from '../components/Dashboard/UserHistory'

const History = () => {
    return (
        <div>
            <DashNavbarLayout>
                <UserHistory />
            </DashNavbarLayout>
        </div>
    )
}

export default History