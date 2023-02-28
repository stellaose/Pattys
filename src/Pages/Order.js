import React from 'react'
import { BsEmojiFrown } from 'react-icons/bs'
import { EmptyOrder } from '../Stylesheets/Order.styled'

const Order = () => {
  return (
    <>
      <EmptyOrder>
        <BsEmojiFrown/>
        <p>You have not placed any order yet</p>
      </EmptyOrder>
    </>
  )
}

export default Order