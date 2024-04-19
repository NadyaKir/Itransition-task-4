import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  let auth = { token: localStorage.getItem("token") };
  return auth.token ? <Outlet /> : <Navigate to="/signin" />;
}
