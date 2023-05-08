import { Navigate, Route, Routes } from "react-router";
import { EstudiantePage } from "../pages/EstudiantePage";
import { JefeDivisionPage } from "../pages/JefeDivisionPage";

export const TrasladaTECRoutes = () => {
  return (
    <Routes>
      <Route path="/estudiante" element={<EstudiantePage />} />
      <Route path="/jefe" element={<JefeDivisionPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
