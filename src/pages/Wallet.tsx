import React from 'react'
import DashNavbarLayout from '../components/Dashboard/DashNavbarLayout'
import UserWallet from '../components/Dashboard/UserWallet'

const Wallet = () => {
    return (
        <div>
            <DashNavbarLayout>
                <UserWallet />
            </DashNavbarLayout>
        </div>
    )
}

export default Wallet