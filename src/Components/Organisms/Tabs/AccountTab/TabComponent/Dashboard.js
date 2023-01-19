import React from 'react'
import { useSelector } from 'react-redux'
import { 
        DashboardBody, 
        DashboardContent } from '../../../../../Stylesheets/Dashboard.styled'

const Dashboard = () => {
  const { user } = useSelector(state => state.user)
  
  const savedUser = user?.savedUser
  
  return (
    <>
      <DashboardBody>
        <DashboardContent>
          
          <h1>Good to see you <span style={{color: '#cd586d'}}>{savedUser?.firstname}{' '}{savedUser?.lastname}!</span></h1>
        </DashboardContent>
      </DashboardBody>
    </>
  )
}

export default Dashboard