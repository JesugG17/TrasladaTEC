import { Divider, Grid, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import { TrasladaTECLayout } from '../layout/TrasladaTECLayout';
import { AccountBoxOutlined, AddOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { SolicitudView } from '../view/SolicitudView';

export const EstudiantePage = () => {
  
  const [open, setOpen] = useState(false);

  const handleOpenApplication = () => {
    setOpen(!open);
  }

  return (
    <TrasladaTECLayout>
        <Grid 
            container
            direction='row'
            position='relative'
            // top='64px'
            justifyContent='space-between'
            // sx={{height: '100%' }}
        >

          <Grid 
            container
            className="box-shadow"
            sx={{ backgroundColor: 'secondary.main', width: '50%', height: '70%', borderRadius: 3}}
            position='relative'
            left='350px'
            top='140px'
          >
             <Grid item xs={12} sx={{ mt: 5}}>
                <Typography textAlign='center' variant="h4" gutterBottom>Perfil</Typography>
                <Divider />
                <Typography sx={{ml: 5, mt: 2}} variant="h6" gutterBottom ><b>Nombres</b>: Jesus Manuel</Typography>
                <Typography sx={{ml: 5}} variant="h6" gutterBottom><b>Apellidos</b>: Gastelum Chaparro</Typography>
                <Typography sx={{ml: 5}} variant="h6" gutterBottom><b>Carrera</b>: Ingenieria en Sistem</Typography>
                <Typography sx={{ml: 5}} variant="h6" gutterBottom><b>Semestre</b>: 6</Typography>
                <Typography sx={{ml: 5}} variant="h6" gutterBottom><b>Promedio</b>: 9.2</Typography>
             </Grid>

             <Grid 
              item 
              xs={12}
              sx={{height: 180, mb: 5, textAlign: 'center'}}
            >
                <IconButton > 
                  <AccountBoxOutlined sx={{ fontSize: 180}}/>
                </IconButton>
             </Grid>

          </Grid>

            <Tooltip title='Crear solicitud'>
              <IconButton
                size='large'
                sx={{
                  color: 'white',
                  backgroundColor: 'error.main',
                  position: 'fixed',
                  ':hover': { backgroundColor: 'error.main', opacity: 0.8},
                  right: 50,
                  bottom: 50
                }}
                onClick={ handleOpenApplication }
              >
                <AddOutlined sx={{ fontSize: 30 }}/>
              </IconButton>
            </Tooltip>

            {
              open && 
              <Modal
                open
              >
                <SolicitudView handleOpenApplication={ handleOpenApplication } />
              </Modal>
            }

        </Grid>
    </TrasladaTECLayout>
  )
}
