import { Box } from "@mui/material"
import { Navbar } from "../components/Navbar"

export const TrasladaTECLayout = ({ children }) => {
  return (
    <Box bgcolor='#454384' sx={{ display: 'flex', height: '100vh'}}>
        <Navbar />

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 2}}
        >

            { children }
        </Box>
    </Box>

  )
}
