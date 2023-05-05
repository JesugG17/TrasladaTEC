import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { Links } from './Links'

export const Navbar = () => {
  return (
    <AppBar
        position='fixed'
        sx={{
            width: '100%'
        }}
    >
        <Toolbar>
            <Grid 
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <Typography variant='h5'>TrasladaTEC</Typography>
                <Links />
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
