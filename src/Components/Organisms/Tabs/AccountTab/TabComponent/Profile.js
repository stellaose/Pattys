import React from 'react';
import { useSelector } from 'react-redux';
import { 
        FileInput,
        Img,
        ProfileBody, 
        LoadingSection,
        ProfileContent } from '../../../../../Stylesheets/Profile.styled';

const Profile = () => {
   const {user, loading, isAuthenticated } = useSelector(state => state.user)
   
  const savedUser = user?.savedUser
   
  return (
    <>
      <ProfileBody>
          {loading && (
            <>
              <LoadingSection>
                <div class="loader"></div>
              </LoadingSection>
            </>
          )}
          {isAuthenticated && (
            <>
              <ProfileContent>
                  <h1>My Profile</h1>
                  
                  <div>
                    {savedUser.avatar.map((item) => (
                      <>
                         <Img src={item?.url} key={item?.url} alt={savedUser?.name}/> <span>
                         <FileInput 
                          type="file"/>
                         </span>
                      </>
                     
                      )) 
                    } 
                  </div>
              </ProfileContent>
            </>
          )}
           
      </ProfileBody>
    </>
  )
}

export default Profile;