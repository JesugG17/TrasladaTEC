import { AppBar, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import { Links } from './Links'
import { Home, HomeMaxOutlined, HomeOutlined } from '@mui/icons-material'

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
                <Grid item>
                    <Typography variant='h5' component='p'>
                        TrasladaTEC
                    </Typography>
                </Grid>
                <Links />
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
