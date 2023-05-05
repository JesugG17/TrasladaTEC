import { Navigate, Route, Routes } from 'react-router'
import { EstudianteView } from '../view/EstudianteView'
import { SolicitudView } from '../view/SolicitudView'
import { HistorialView } from '../view/HistorialView'

export const TrasladaTECRoutes = () => {
  return (
    <Routes>
        <Route path='/estudiante' element={<EstudianteView />} />
        <Route path='/crear' element={<SolicitudView />} />
        <Route path='/historial' element={<HistorialView />} />
        <Route path='/*' element={<Navigate to='/'/>}/>

    </Routes>
  )
}
