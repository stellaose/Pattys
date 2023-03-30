import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate} from "react-router-dom"

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
const ProtectedRoute = ({children}) => {

    const navigate = useNavigate()
    const { isAuthenticated } = useSelector(state=> state.user)
    
    useEffect(() => {
      if(!isAuthenticated){
          navigate("/login")
      }
  }, [isAuthenticated, navigate])

  return (
      <>
          {children}
      </>
  )
}


export default ProtectedRoute