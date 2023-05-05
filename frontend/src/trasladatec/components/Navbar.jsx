import { LogoutSharp } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'

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
                <IconButton>
                    <LogoutSharp 
                        color='error'
                        sx={{fontSize: 40}}
                    />
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
