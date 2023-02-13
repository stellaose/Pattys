import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../Redux/Actions/UserAction';
import {  AvatarInput,
          Img,
          Input,
          Map,
          OrderBtn,
          ProfileBody,
          ProfileContent,
          ProfRight,
          Right,
          RightGrid } from '../Stylesheets/Profile.styled';

const Profile = () => {
  const dispatch = useDispatch();
  
  const { user } = useSelector(state => state.user);
  const savedUser = user?.savedUser
  const { error, isUpdated, loading } = useSelector(state => state.profile)
  
  const [firstName, setFirstName] = useState(savedUser?.firstname)
  const [lastName, setLastName] = useState(savedUser?.lastname)
  const [email, setEmail] = useState(savedUser?.email)
  const [avatar, setAvatar] = useState()
  const [avatarPreview, setAvatarPreview] = useState(savedUser?.avatar?.url);
  
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateProfile(firstName, lastName, email, avatar))
  }
  
  return (
    <>
      <ProfileBody>
        <h1>Edit Profile</h1>
        <ProfileContent>
        <Map>
            {savedUser?.avatar.map((data) => (
              <div key={data?.url}>
                <Img src={data?.url}  alt=""/>
              </div>
            ))}
            
            <AvatarInput
              type="file"
            />
          </Map>
          
          <ProfRight onSubmit={handleSubmit}>
            <Right>
              <h4>First Name:</h4>
              <Input 
                type="text" 
                value={firstName}
                onChange={handleFirstName} 
              />
            </Right>
              
            <Right>
              <h4>Last Name:</h4>
              <Input 
                type="text" 
                value={lastName}
                onChange={handleLastName}
              />
            </Right>
            
            
            <Right>
              <h4>Email:</h4>
              <Input 
                type="text" 
                value={email}
                onChange={handleEmail}
              />
            </Right>
            
            <Right>
              <OrderBtn 
                type='submit'
                value="Update Profile"
              />
            </Right>
          </ProfRight>
          
        </ProfileContent>
      </ProfileBody>
    </>
  )
}

export default Profile