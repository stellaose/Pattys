import UserType from "../Types/UserType";

export const profileReducer = (state={}, action) => {
  switch (action.type) {
    case UserType.UPDATE_PROFILE_REQUEST:
      return{
        ...state,
        loading: true
      }
      
    case UserType.UPDATE_PROFILE_SUCCESS:
      return{
        ...state,
        loading:false,
        isUpdated: action.payload,
      }
      
    case UserType.UPDATE_PROFILE_FAILURE:
      return{
        ...state,
        loading:false,
        error: action.payload
      }
      
    case UserType.UPDATE_PROFILE_RESET:
      return{
        ...state,
        isUpdated: false
      }
    default:
      return state
  }
}