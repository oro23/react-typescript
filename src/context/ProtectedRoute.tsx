import { Route, Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Your custom auth hook

interface ProtectedRouteProps {
  element: JSX.Element; // Expect an element to be passed in the "element" prop
}

// Use intersection (&) instead of extending
const ProtectedRoute = ({
  element,
  ...rest
}: ProtectedRouteProps & RouteProps) => {
  const { isAuthenticated } = useAuth(); // Get authentication status from context

  // If the user is authenticated, render the route with the given element
  if (isAuthenticated) {
    return <Route {...rest} element={element} />;
  }

  // If not authenticated, redirect to login
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
