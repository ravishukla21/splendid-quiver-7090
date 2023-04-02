import {
    SEARCH_DATA_FAILURE,
    SEARCH_REQUEST_PENDING,
    GET_SEARCH_REQUEST_SUCCESSFUL,
    POST_SEARCH_REQUEST_SUCCESSFUL,
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isError: false,
    SearchData: [],
    oneshoe: {},
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SEARCH_REQUEST_PENDING:
        return { ...state, isLoading: true };
      case GET_SEARCH_REQUEST_SUCCESSFUL:
        return { ...state, isLoading: false, SearchData: payload };
      case POST_SEARCH_REQUEST_SUCCESSFUL:
        return { ...state, isLoading: false, oneshoe: payload };
      case SEARCH_DATA_FAILURE:
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };