import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { 
        DashboardBody, 
        DashboardContent, 
        DashRight, 
        EditButton, 
        Img,
        Map,
        OrderBtn,
        Right,
        RightGrid} from '..//Stylesheets/Dashboard.styled'
import { loadUserAction } from '../Redux/Actions/UserAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  
  const savedUser = user?.savedUser;
  
  useEffect(() => {
    dispatch(loadUserAction)
  }, [dispatch])
  
  
  return (
    <>
      <DashboardBody>
        <h1>My Information</h1>    
        <DashboardContent>
          <Map>
            {savedUser?.avatar.map((data) => (
              <div key={data?.url}>
                <Img src={data?.url}  alt=""/>
              </div>
            ))}
            
            <Link to='/my-account/edit-profile'>
              <EditButton>Edit Profile</EditButton>
            </Link>
          </Map>
            
          <DashRight>
            <RightGrid>
              <Right>
                <h4>First Name</h4>
                <p>{savedUser?.firstname}</p>
              </Right>
              
              <Right>
                <h4>Last Name</h4>
                <p>{savedUser?.lastname}</p>
              </Right>
            </RightGrid>
            
            
            <Right>
              <h4>Email</h4>
              <p>{savedUser?.email}</p>
            </Right>
            
            <Right>
              <h4>Joined</h4>
              <p>{String(savedUser?.createdAt).substring(0, 10)}</p>
            </Right>
            
            <Right>
              <Link to = '/my-account/order'>
                <OrderBtn>View my orders</OrderBtn>
              </Link>
            </Right>
              
          </DashRight>
        </DashboardContent>
        
        
      </DashboardBody>
    </>
  )
}

export default Dashboard