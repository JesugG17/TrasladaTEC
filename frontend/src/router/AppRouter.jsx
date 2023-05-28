import { Navigate, Route, Routes } from "react-router";
import { TrasladaTECRoutes } from "../trasladatec/routes/TrasladaTECRoutes";
import { useSelector } from "react-redux";
import { LoginPage } from "../auth/pages/LoginPage";
import { CheckingAuth } from "./components/CheckingAuth";

export const AppRouter = () => {
  
  const { estatus } = useSelector((state) => state.auth);
  if (estatus === "checando") {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      <Route path="/login" element={<LoginPage />}/>
      <Route path="/*" element={<TrasladaTECRoutes />}/>
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
