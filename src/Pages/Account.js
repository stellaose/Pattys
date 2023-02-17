import React from 'react';
import MetaData from '../Components/Layout/MetaData';
import { Outlet } from 'react-router-dom';
// import AccountTab from '../Components/Organisms/Tabs/AccountTab';
import { AccountBody, AccountGrid } from '../Stylesheets/Account.styled';
import Sidebar from '../Components/Layout/Sidebar';

const Account = () => {
   
  return (
    <>
      
      <MetaData title={'My Account || Pattys E-commerce'}/>
      <AccountGrid>
        <Sidebar/>
          <AccountBody>
          <Outlet/>
        </AccountBody>
      </AccountGrid>
      
      
    </>
  )
}

export default Account;