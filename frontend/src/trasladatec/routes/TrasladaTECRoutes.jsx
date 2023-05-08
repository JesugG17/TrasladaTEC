import { Navigate, Route, Routes } from "react-router";
import { EstudiantePage, JefeDivisionPage, CoordinadorPage } from "../pages";

export const TrasladaTECRoutes = () => {
  return (
    <Routes>
      <Route path="/estudiante" element={<EstudiantePage />} />
      <Route path="/jefe" element={<JefeDivisionPage />} />
      <Route path="/coordinador" element={<CoordinadorPage />}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
