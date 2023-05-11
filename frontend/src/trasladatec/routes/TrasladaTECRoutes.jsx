import { Navigate, Route, Routes } from "react-router";
import {
  EstudiantePage,
  JefeDivisionPage,
  CoordinadorPage,
  ControlEscolarPage,
} from "../pages";

export const TrasladaTECRoutes = () => {
  return (
    <Routes>
      <Route path="/estudiante" element={<EstudiantePage />} />
      <Route path="/jefe" element={<JefeDivisionPage />} />
      <Route path="/coordinador" element={<CoordinadorPage />} />
      <Route path="/control-escolar" element={<ControlEscolarPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
