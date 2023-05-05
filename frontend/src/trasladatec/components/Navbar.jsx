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
                <Grid container direction='row' xs={6}>
                    <Icon sx={{mr: 1}}>
                        <HomeOutlined sx={{fontSize: 30}}/>
                    </Icon>
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
