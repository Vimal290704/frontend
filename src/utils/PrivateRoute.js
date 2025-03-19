import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  return user ? children || <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;