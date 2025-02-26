import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use BrowserRouter
import Login from "./pages/Login";
import TodoApp from "./components/TodoApp";
// import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route path="/Login" element={<Login />} />
    //       <Route path="/Todo" element={<TodoApp />} />
    //       {/* <ProtectedRoute path="/dashboard" element={<Dashboard />} /> */}
    //     </Routes>
    //   </AuthProvider>
    // </Router>
    <TodoApp />
  );
}

export default App;
