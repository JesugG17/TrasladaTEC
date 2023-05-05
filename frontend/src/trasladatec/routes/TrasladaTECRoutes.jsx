import { Navigate, Route, Routes } from 'react-router'
import { TrasladaTECPage } from '../TrasladaTECPage'

export const TrasladaTECRoutes = () => {
  return (
    <Routes>
        
        <Route path='/home/estudiante' element={<TrasladaTECPage />} />

        <Route path='/*' element={<Navigate to='/'/>}/>

    </Routes>
  )
}
