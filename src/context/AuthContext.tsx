// context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import {
  setToken,
  getToken,
  decodeToken,
  removeToken,
  isTokenExpired,
} from "../utils/auth";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook here

  useEffect(() => {
    const token = getToken();
    if (token && !isTokenExpired(token)) {
      setUser(decodeToken(token));
      setIsAuthenticated(true);
    } else {
      logout();
    }
  }, []);

  const login = (token: string) => {
    setToken(token);
    setUser(decodeToken(token));
    setIsAuthenticated(true);
    console.log("token", token);
    //navigate("/dashboard"); // Redirect to Dashboard after login
  };

  const logout = () => {
    removeToken();
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
