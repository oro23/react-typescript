import { jwtDecode } from "jwt-decode";

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const decodeToken = (token: string) => {
  return jwtDecode(token); // Decodes the JWT token and returns the payload.
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);

  if (typeof decoded.exp !== 'number') {
    throw new Error('Invalid token: exp property is missing or not a number');
  }

  const expirationTime = decoded.exp * 1000; // exp is in seconds
  return Date.now() >= expirationTime;
};
