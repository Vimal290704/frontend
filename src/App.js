import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Homepage from "./views/Homepage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import DashBoard from "./views/DashBoard";
import Navbar from "./views/Navbar";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Homepage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashBoard />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
