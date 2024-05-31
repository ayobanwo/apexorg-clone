import React from 'react'
import DashNavbarLayout from '../components/Dashboard/DashNavbarLayout'
import UserAccount from '../components/Dashboard/UserAccount'

const Account = () => {
    return (
        <div>
            <DashNavbarLayout>
                <UserAccount/>
            </DashNavbarLayout>
        </div>
    )
}

export default Account