import axios from "axios";
import config from "../../config";
import UserType from "../Types/UserType";

const loginRequest = () => {
  return{
    type: UserType.LOGIN_REQUEST
  }
}

const loginSuccess = (data) => {
  return{
    type: UserType.LOGIN_SUCCESS,
    payload: data,
  }
}

const loginError = (error) => {
  return{
    type: UserType.LOGIN_FAILURE,
    payload: error.message,
  }
}

const registerRequest = () => {
  return{ 
    type: UserType.REGISTER_REQUEST 
  }
}

const registerSuccess = (data) => {
  return {
    type: UserType.REGISTER_SUCCESS,
    payload: data,
  }
}

const registerFailure = (error) => {
  return {
    type: UserType.REGISTER_FAILURE,
    payload: error.data.error,
  }
}

const loadUserRequest = () => {
  return { type: UserType.LOAD_USER_REQUEST }
}

const loadUserSuccess = (data) => {
  return {
    type: UserType.LOAD_USER_SUCCESS,
    payload: data.thisUser,
  }
}

const loadUserError = (error) => {
  return{
    type: UserType.LOAD_USER_FAILURE,
    payload: error.data.error,
  }
}

const updateProfileRequest = () => {
  return { type: UserType.UPDATE_PROFILE_REQUEST }
}

const updateProfileSuccess = (data) => {
  return {
    type: UserType.UPDATE_PROFILE_SUCCESS,
    payload: data.success,
  }
}

const updateProfileError = (error) => {
  return {
    type: UserType.UPDATE_PROFILE_FAILURE,
    payload: error.response.data.message,
  }
}

const updatePasswordRequest = () => {
  return { type: UserType.UPDATE_PASSWORD_REQUEST }
}

const updatePasswordSuccess = (data) => {
  return {
    type: UserType.UPDATE_PASSWORD_SUCCESS,
    payload: data.success,
  }
}

const updatePasswordError = (error) => {
  return {
    type: UserType.UPDATE_PASSWORD_FAILURE,
    payload: error.response.data.message,
  }
}

const forgetPasswordRequest = () => {
  return { type: UserType.FORGET_PASSWORD_REQUEST }
}

const forgetPasswordSuccess = (data) => {
  return {
    type: UserType.FORGET_PASSWORD_SUCCESS,
    payload: data.message,
  }
}

const forgetPasswordError = (error) => {
  return {
    type: UserType.FORGET_PASSWORD_FAILURE,
    payload: error.response.data.message,
  }
}

const resetPasswordRequest = () => {
  return { type: UserType.RESET_PASSWORD_REQUEST }
}

const resetPasswordSuccess = (data) => {
  return {
    type: UserType.RESET_PASSWORD_SUCCESS,
    payload: data.success,
  }
}

const resetPasswordError = (error) => {
  return {
    type: UserType.RESET_PASSWORD_FAILURE,
    payload: error.response.data.message,
  }
}

const logoutRequest = () => {
  return { type: UserType.LOGOUT_REQUEST }
}

const logoutSuccess = () => {
  return {
    type: UserType.LOGOUT_SUCCESS,
  }
}

const clearError = () => {
  return {
    type: UserType.LOGOUT_SUCCESS,
  }
}

export const LoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const configure = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${config.BASE_URL}/v1/user/login`,
      { email, password },
      configure
    );

    dispatch(loginSuccess(data));
    alert('Login Successful')
    localStorage.setItem("PattysToken", JSON.stringify(data));
  } catch (error) {
    console.log(error)
    alert('Incorrect credentials')
    dispatch(loginError(error));
  }
};

export const getUserProfile = () => async (dispatch) => {};

export const RegisterAction =
  (firstname, lastname, email, password, navigate) => async (dispatch) => {
    try {
      dispatch(registerRequest());

      const configure = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `${config.BASE_URL}/v1/user/register`,
        { firstname, lastname, email, password },
        configure
      );
      console.log("User registered", data);

      dispatch(registerSuccess(data));
      alert('Registration completed. Welcome to Pattys')
      navigate("/login");
    } catch (error) {
      alert('An error occurred. Please try again')
      dispatch(registerFailure(error));
    }
  };

export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const token = JSON.parse(localStorage.getItem("PattysToken"))?.token;

    const { data } = await axios.get(`${config.BASE_URL}/v1/user/me`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    dispatch(loadUserSuccess(data));
  } catch (error) {
    dispatch(loadUserError(error));
  }
};

export const updateProfileAction =
  (firstname, lastname, email, avatar) => async (dispatch) => {
    try {
      dispatch(updateProfileRequest());

      const token = JSON.parse(localStorage.getItem("PattysToken"))?.token;

      const { data } = await axios.put(
        `${config.BASE_URL}/v1/user/me/update`,
        {
          firstname,
          lastname,
          email,
          avatar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );

      dispatch(updateProfileSuccess(data));
      alert("Password Changed please login again to continue.");
    } catch (error) {
      alert("An error occurred. Please try again");
      dispatch(updateProfileError());
    }
  };

export const updatePasswordAction =
  (password, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch(updatePasswordRequest());

      const token = JSON.parse(localStorage.getItem("PattysToken"))?.token;

      const { data } = await axios.put(
        `${config.BASE_URL}/v1/user/update-password`,
        {
          password,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      dispatch(updatePasswordSuccess(data));
      
    localStorage.removeItem("PattysToken", JSON.stringify(data));
    } catch (error) {
      console.log(error)
      dispatch(updatePasswordError(error))
    }
  };

export const forgetPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch(forgetPasswordRequest())
    
    const configure = { headers: { "Content-Type": "application/json" } };
    
    const { data } = await axios.post(
      `${config.BASE_URL}/v1/user/forget-password`,
      { email},
      configure
    );
    
    dispatch(forgetPasswordSuccess(data))
    
    alert('E-mail sent. Please check your inbox.')
  } catch (error) {
    console.log(error)
    dispatch(forgetPasswordError(error))
  }
}

export const resetPasswordAction = ( password, confirmPassword, token, navigate) => async (dispatch) => {
  try {
    dispatch(resetPasswordRequest())
     
    const configure = { headers: { "Content-Type": "application/json" } };
     
    const { data } = await axios.put(
      `${config.BASE_URL}/v1/user/reset-password/${token}`, 
      {
        password,
        confirmPassword
      }, 
      configure
    );
    
    dispatch(resetPasswordSuccess(data))
    
    alert('Password changed successfully. Please login again to continue')
    navigate('/login')
  } catch (error) {
    console.log(error)
    alert('An error occurred')
    dispatch(resetPasswordError(error))
  }
 
}

export const logoutAction = (navigate) => async (dispatch) => {
  dispatch(logoutRequest());

  const { data } = await axios.get(`${config.BASE_URL}/v1/user/logout`);

  dispatch(logoutSuccess());
  
  navigate("/");
  localStorage.removeItem("PattysToken", data?.token);
};

export const clearErrors = () => async (dispatch) => {
  dispatch(clearError());
};
