import { Navigate, Route, Routes } from "react-router";
import {
  EstudiantePage,
  JefeDivisionPage,
  CoordinadorPage,
  ControlEscolarPage,
} from "../pages";
import { useSelector } from "react-redux";

export const TrasladaTECRoutes = () => {

  const { estatus, url } = useSelector(state => state.auth);

  if (estatus !== 'autorizado') {
    return <Navigate to='/login' />
  }

  return (
    <Routes>
      {
        (url === 'jefe') &&
        <Route path="/jefe" element={<JefeDivisionPage />} />
      }
      {
        (url === 'coordinador') &&
        <Route path="/coordinador" element={<CoordinadorPage />} />
      }
      {
        (url === 'control-escolar') &&
        <Route path="/control-escolar" element={<ControlEscolarPage />} />
      }
      {
        (url === 'estudiante') &&
        <Route path="/estudiante" element={<EstudiantePage />} />
      }
      <Route path="/*" element={<Navigate to={`/${url}`} />} />
    </Routes>
  );
};
