import { CheckCircle, TurnedIn } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Sidebar = ({ drawerWidth }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
            }}
        >
            <Toolbar>
                <Typography variant='h6'>Historial de solicitudes</Typography>

            </Toolbar>
            <Divider />
            <List>
                {
                    ['Solicitud1', 'Solicitud2', 'Solicitud3'].map( text => (
                        <ListItem
                            key={ text }
                            disablePadding
                        >   
                            <ListItemButton>
                                <ListItemIcon sx={{
                                    color: 'success.main'
                                }}>
                                    <CheckCircle />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Some text'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
        </Drawer>


    </Box>
  )
}
