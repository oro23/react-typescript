// import React from "react";
// import { Route, Redirect, RouteProps } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// interface PrivateRouteProps extends RouteProps {
//   // Define the component that will be rendered for the protected route
//   component: React.ComponentType<any>;
// }

// const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default PrivateRoute;
