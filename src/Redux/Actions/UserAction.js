import axios from "axios";
import config from "../../config";
import UserType from "../Types/UserType";

export const LoginAction = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: UserType.LOGIN_REQUEST });

    const configure = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${config.BASE_URL}/v1/user/login`,
      { email, password },
      configure
    );

    dispatch({
      type: UserType.LOGIN_SUCCESS,
      payload: data,
    });
    alert('Login Successfull')
    navigate(-1);
    localStorage.setItem("PattysToken", JSON.stringify(data));
  } catch (error) {
    console.log(error)
    alert('Incorrect credentials')
    dispatch({
      type: UserType.LOGIN_FAILURE,
      payload: error.message,
    });
    navigate('/login')
  }
};

export const getUserProfile = () => async (dispatch) => {};

export const RegisterAction =
  (firstname, lastname, email, password, navigate) => async (dispatch) => {
    try {
      dispatch({ type: UserType.REGISTER_REQUEST });

      const configure = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `${config.BASE_URL}/v1/user/register`,
        { firstname, lastname, email, password },
        configure
      );
      console.log("User registered", data);

      dispatch({
        type: UserType.REGISTER_SUCCESS,
        payload: data,
      });
      alert('Registration completed. Welcome to Pattys')
      navigate("/login");
    } catch (error) {
      alert('An error occured. Please try again')
      dispatch({
        type: UserType.REGISTER_FAILURE,
        payload: error.data.error,
      });
    }
  };

export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: UserType.LOAD_USER_REQUEST });

    const token = JSON.parse(localStorage.getItem("PattysToken"))?.token;

    const { data } = await axios.get(`${config.BASE_URL}/v1/user/me`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    dispatch({
      type: UserType.LOAD_USER_SUCCESS,
      payload: data.thisUser,
    });
  } catch (error) {
    dispatch({
      type: UserType.LOAD_USER_FAILURE,
      payload: error.data.error,
    });
  }
};

export const updateProfileAction =
  (firstname, lastname, email, avatar) => async (dispatch) => {
    try {
      dispatch({ type: UserType.UPDATE_PROFILE_REQUEST });

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

      dispatch({
        type: UserType.UPDATE_PROFILE_SUCCESS,
        payload: data.success,
      });
      alert("Password Changed please login again to continue.");
    } catch (error) {
      alert("An error occurred. Please try again");
      dispatch({
        type: UserType.UPDATE_PROFILE_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

export const updatePasswordAction =
  (password, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch({
        type: UserType.UPDATE_PASSWORD_REQUEST,
      });

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

      dispatch({
        type: UserType.UPDATE_PASSWORD_SUCCESS,
        payload: data.success
      });
      
    localStorage.removeItem("PattysToken", JSON.stringify(data));
    } catch (error) {
      console.log(error)
      dispatch({
        type: UserType.UPDATE_PASSWORD_FAILURE,
        payload: error.response.data.message,
      })
    }
  };

export const forgetPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch({type: UserType.FORGET_PASSWORD_REQUEST})
    
    const configure = { headers: { "Content-Type": "application/json" } };
    
    const { data } = await axios.post(
      `${config.BASE_URL}/v1/user/forget-password`,
      { email},
      configure
    );
    
    dispatch({
      type: UserType.FORGET_PASSWORD_SUCCESS,
      payload: data.message
    })
    
    alert('E-mail sent. Please check your inbox.')
  } catch (error) {
    console.log(error)
    dispatch({
      type: UserType.FORGET_PASSWORD_FAILURE,
    })
  }
}

export const resetPasswordAction = ( password, confirmPassword, token, navigate) => async (dispatch) => {
  try {
    dispatch({type: UserType.RESET_PASSWORD_REQUEST})
     
    const configure = { headers: { "Content-Type": "application/json" } };
     
    const { data } = await axios.put(
      `${config.BASE_URL}/v1/user/reset-password/${token}`, 
      {
        password,
        confirmPassword
      }, 
      configure
    );
    
    dispatch({
      type: UserType.RESET_PASSWORD_SUCCESS,
      payload: data.success
    })
    
    alert('Password changed successfully. Please login again to continue')
    navigate('/login')
  } catch (error) {
    console.log(error)
    alert('An error occurred')
    dispatch({
      type: UserType.RESET_PASSWORD_FAILURE
    })
  }
 
}

export const logoutAction = (navigate) => async (dispatch) => {
  dispatch({ type: UserType.LOGOUT_REQUEST });

  const { data } = await axios.get(`${config.BASE_URL}/v1/user/logout`);

  dispatch({
    type: UserType.LOGOUT_SUCCESS,
  });
  
  navigate("/");
  localStorage.removeItem("PattysToken", data?.token);
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: UserType.CLEAR_ERRORS });
};
