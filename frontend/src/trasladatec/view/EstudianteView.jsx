import { Divider, Grid, IconButton, Typography } from "@mui/material"
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout"
import { AccountBoxOutlined } from "@mui/icons-material"


export const EstudianteView = () => {
  return (
    <TrasladaTECLayout>
        <Grid 
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{width: '100%'}}
        >
          <Grid 
            container
            className="box-shadow"
            sx={{ mt: 15, backgroundColor: 'secondary.main', width: 500, height: 500, borderRadius: 3}}
            justifyContent='center'
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
        </Grid>

    </TrasladaTECLayout>
  )
}
