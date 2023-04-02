import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation,Navigate } from "react-router-dom";
import { auth } from '../firebase'



function PrivateRoute({ children }) {
  let { isAuth } = useSelector((state) => state.AuthReducer);

  //console.log(isAuth);

 

  let location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={location.pathname} replace={true} />
  );
}

export default PrivateRoute;