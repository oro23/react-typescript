// import React, {
//   createContext,
//   useState,
//   useContext,
//   ReactNode,
//   useEffect,
// } from "react";

// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: User | null;
//   roles: string[]; // Store roles as an array
//   login: (user: User, token: string) => void;
//   logout: () => void;
//   hasRole: (role: string) => boolean; // Method to check if the user has a specific role
// }

// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// interface AuthProviderProps {
//   children: ReactNode;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [user, setUser] = useState<User | null>(null);
//   const [roles, setRoles] = useState<string[]>([]);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("auth_token");
//     if (storedToken) {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//         setRoles(parsedUser.roles || []);
//         setIsAuthenticated(true);
//       }
//     }
//   }, []);

//   const login = (user: User, token: string) => {
//     localStorage.setItem("auth_token", token);
//     localStorage.setItem("user", JSON.stringify(user));
//     setUser(user);
//     setRoles(user.roles || []);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("auth_token");
//     localStorage.removeItem("user");
//     setUser(null);
//     setRoles([]);
//     setIsAuthenticated(false);
//   };

//   const hasRole = (role: string) => roles.includes(role);

//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, user, roles, login, logout, hasRole }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
