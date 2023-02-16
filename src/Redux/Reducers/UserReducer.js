import UserType from "../Types/UserType";

const user = JSON.parse(localStorage.getItem("PattysToken"));

const initialState = user
  ? {
      loading: false,
      error: {},
      user,
      isAuthenticated: true,
    }
  : {
      loading: false,
      user: {},
      isAuthenticated: false,
    };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserType.LOGIN_REQUEST:
    case UserType.REGISTER_REQUEST:
    case UserType.LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case UserType.LOGIN_SUCCESS:
    case UserType.REGISTER_SUCCESS:
    case UserType.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case UserType.LOGIN_FAILURE:
    case UserType.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case UserType.LOAD_USER_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case UserType.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: true,
      };

    case UserType.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: {},
      };

    case UserType.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.user,
        error: action.payload,
      };

    case UserType.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserType.USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case UserType.USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload,
      };

    case UserType.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UserType.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserType.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UserType.UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
