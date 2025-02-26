// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import AdminPanel from "./AdminPanel";
// import Unauthorized from "./Unauthorized";
// import ProtectedRoute from "./ProtectedRoute";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Switch>
//           <Route path="/login" component={Login} />
//           <ProtectedRoute
//             path="/dashboard"
//             component={Dashboard}
//             requiredRole="editor"
//           />
//           <ProtectedRoute
//             path="/admin"
//             component={AdminPanel}
//             requiredRole="admin"
//           />
//           <Route path="/unauthorized" component={Unauthorized} />
//           {/* Other routes */}
//         </Switch>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;
