// import React from "react";
// import { useAuth } from "./AuthContext";
// import { Link } from "react-router-dom";

const Navbar = () => {
  // const { isAuthenticated, hasRole } = useAuth();

  return (
    <nav>
      {/* {isAuthenticated && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          {hasRole("admin") && <Link to="/admin">Admin Panel</Link>}
        </>
      )}
      {!isAuthenticated && <Link to="/login">Login</Link>} */}
    </nav>
  );
};

export default Navbar;
