import { USER_AUTH_STATUS } from "./actionTypes";



let initial = {
    isAuth: false
  };
  export let reducer = (state = initial, { type, payload }) => {
    switch (type) {
      case USER_AUTH_STATUS : return{...state, isAuth:true} 
      default:
        return state;
    }
  };