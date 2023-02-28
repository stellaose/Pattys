import React from 'react'
import {TbHeartOff} from 'react-icons/tb'
import { EmptyFav } from '../Stylesheets/Favourite.styled'

const Favourite = () => {
  return (
    <>
      <EmptyFav>
        <TbHeartOff/>
        <p>You have not added anything here.</p>
      </EmptyFav>
    </>
  )
}

export default Favourite