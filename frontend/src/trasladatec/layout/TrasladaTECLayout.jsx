import { Box } from '@mui/material'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const TrasladaTECLayout = ({ children }) => {
  return (
    <Box bgcolor='#454384' sx={{ display: 'flex', height: '100vh'}}>
        <Navbar drawerWidth={400}/>
        <Sidebar drawerWidth={400} />
        { children }
    </Box>

  )
}
