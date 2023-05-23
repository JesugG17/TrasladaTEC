import { Navigate, Route, Routes, useLocation } from "react-router";
import {
  EstudiantePage,
  JefeDivisionPage,
  CoordinadorPage,
  ControlEscolarPage,
} from "../pages";
import { useSelector } from "react-redux";

export const TrasladaTECRoutes = () => {

  const { estatus } = useSelector(state => state);

  if (estatus !== 'autorizado') {
    return <Navigate to='/login' />
  }

  return (
    <Routes>
      <Route path="/jefe" element={<JefeDivisionPage />} />
      <Route path="/coordinador" element={<CoordinadorPage />} />
      <Route path="/control-escolar" element={<ControlEscolarPage />} />
      {/* {
        (tipo === 'jefe') &&
        
      }

      {
        (tipo === 'coordinador') &&
      }

      {
        (tipo === 'control-escolar') &&
      } */}
      <Route path="/estudiante" element={<EstudiantePage />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
