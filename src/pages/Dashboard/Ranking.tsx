import React from 'react'
import DashNavbarLayout from '../../components/Dashboard/DashNavbarLayout'
import UserRanking from '../../components/Dashboard/UserRanking'

const Ranking = () => {
    return (
        <div>
            <DashNavbarLayout>
                <UserRanking />
            </DashNavbarLayout>
        </div>
    )
}

export default Ranking