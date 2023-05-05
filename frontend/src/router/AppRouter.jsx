import { Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '../Auth/pages/LoginPage'
import { TrasladaTECRoutes } from '../trasladatec/routes/TrasladaTECRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        
        <Route path="/" element={ <LoginPage />} />
        <Route path="/*" element={<TrasladaTECRoutes />}/>

        <Route path="/*" element={ <Navigate to='/'/>} />
    </Routes>
  )
}
