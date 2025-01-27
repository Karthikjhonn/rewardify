import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const isJwtTokenValid = () => {
  try {
    const token = Cookies.get("token");
    if (!token) {
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  const logIn = async (payload) => {
    Cookies.set("token", "true", { expires: 2, secure: true });
  };
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login");
  };

  const signIn = async (payload) => {};

  const value = {
    user,
    setUser,
    logIn,
    logout,
    signIn,
    loading,
    isJwtTokenValid,
    navBar,
    handleNavBar
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
