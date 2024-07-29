// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

import { setUser } from "../store/slices/authSlice";
import { useDispatch } from "react-redux";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserState(parsedUser);
      dispatch(setUser(parsedUser));
    }
  }, [dispatch]);

  const login = async (email, password) => {
    // Implement login logic here
    const user = { id: "1", email };
    setUserState(user);
    dispatch(setUser(user));
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUserState(null);
    dispatch(setUser(null));
    localStorage.removeItem("user");
  };

  const register = async (email, password) => {
    // Implement registration logic here
  };

  const recoverAccount = async (email) => {
    // Implement account recovery logic here
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, recoverAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
