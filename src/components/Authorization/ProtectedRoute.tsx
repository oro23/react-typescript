// import React from "react";
// import { Route, Redirect, RouteProps } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// interface ProtectedRouteProps extends RouteProps {
//   component: React.ComponentType<any>;
//   requiredRole: string; // The role required for access
// }

// const ProtectedRoute = ({
//   component: Component,
//   requiredRole,
//   ...rest
// }: ProtectedRouteProps) => {
//   const { isAuthenticated, hasRole } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated && hasRole(requiredRole) ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/unauthorized" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
