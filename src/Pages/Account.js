import React from 'react';
import MetaData from '../Components/Layout/MetaData';
import AccountTab from '../Components/Organisms/Tabs/AccountTab';
import { AccountBody } from '../Stylesheets/Account.styled';

const Account = () => {
   
  return (
    <>
      <MetaData title={'My Account || Pattys E-commerce'}/>
      <AccountBody>
        <AccountTab/>
      </AccountBody>
      
    </>
  )
}

export default Account;