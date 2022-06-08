import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const RequiredAuth = ({ children }) => {

  const [state] =useContext(AuthContext);

    if(!state.isAuth){
        return <Navigate to="/login"></Navigate>
    }
    return <Navigate to="/login"></Navigate>
};

export default RequiredAuth;