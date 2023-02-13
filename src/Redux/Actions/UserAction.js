import axios from "axios";
import config from "../../config";
import UserType from "../Types/UserType";

export const LoginAction = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({type: UserType.LOGIN_REQUEST})
    
    const configure = {headers: {'Content-Type': 'application/json'}} 
    
    const { data } = await axios.post(
      `${config.BASE_URL}/v1/user/login`, 
      {email, password}, 
      configure
    )
    
    dispatch({
      type: UserType.LOGIN_SUCCESS,
      payload: data
    })
    navigate(-1)
    localStorage.setItem('token', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: UserType.LOGIN_FAILURE,
      payload: error.data.message
    })
  }
}

export const getUserProfile = () => async (dispatch) => {
  
}

export const RegisterAction = (firstname, lastname, email, password, navigate) => async (dispatch) => {
  try {
    dispatch({type: UserType.REGISTER_REQUEST})
    
    const configure = {headers: {'Content-Type': 'application/json'}} 
  
    const { data } = await axios.post(`${config.BASE_URL}/v1/user/register`, {firstname, lastname, email, password}, configure)
    console.log('User registered', data)
    
    dispatch({
      type: UserType.REGISTER_SUCCESS,
      payload: data
    })
    navigate('/login')
  } catch (error) {
    dispatch({
      type: UserType.REGISTER_FAILURE,
      payload: error.data.error
    })
  }
}

export const loadUserAction = () => async (dispatch) => {
  
  try {
    dispatch({type: UserType.LOAD_USER_REQUEST})
  
    const { data } = await axios.get(`${config.BASE_URL}/v1/user/me`)
    
    dispatch({
      type: UserType.LOAD_USER_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: UserType.LOAD_USER_FAILURE,
      payload: error.data.error
    })
  }
}

export const updateProfile = (email, firstname, lastname, avatar) => async (dispatch) => {
  try {
    dispatch({type: UserType.UPDATE_PROFILE_REQUEST});
    
    const configure = {headers: {'Content-Type': 'multipart/form-data'}} 
    
    const { data } = await axios.post(`${config.BASE_URL}/v1/user/me/update`, 
    {
      firstname, 
      lastname, 
      email, 
      avatar
    }, configure)
    console.log('User Updated', data)
    
    dispatch({type: UserType.UPDATE_PROFILE_SUCCESS})
    
  } catch (error) {
    dispatch({
      type: UserType.UPDATE_PROFILE_FAILURE,
      payload: error.data.error
    })
  }
  
}

export const logoutAction = (navigate) => async (dispatch) => {
  dispatch({type: UserType.LOGOUT_REQUEST})
  
  const { data } = await axios.get(
    `${config.BASE_URL}/v1/user/logout`)
  
  dispatch({
    type: UserType.LOGOUT_SUCCESS,
  })
  navigate('/')
  localStorage.removeItem('token',  data?.token)
}


export const clearErrors = () => async (dispatch) => {
  dispatch({type: UserType.CLEAR_ERRORS})
}