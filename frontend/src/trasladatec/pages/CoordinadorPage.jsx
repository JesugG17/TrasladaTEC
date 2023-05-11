import { Button, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout"

export const CoordinadorPage = () => {
  return (
    <TrasladaTECLayout containsSidebar={ false }>
        <Grid container
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={{
                height: '100vh'
            }}
        >
            <Grid container
                className="box-shadow"
                direction="column"
                sx={{
                    backgroundColor: 'secondary.main',
                    width: '80%',
                    height: '70%',
                    borderRadius: 4,
                    padding: 2
                }}
            >      
                <Grid item>
                    <Typography 
                        align='center' 
                        variant="h4" 
                        sx={{
                            borderBottom: '2px solid black',
                            padding: 2,
                            mb: 3
                        }}
                    >
                        Traslados
                    </Typography>
                </Grid>
                <Grid item>
                    
                    <List sx={{ width: '100%'}}>
                        <ListItem
                            className="box-shadow" 
                            sx={{ 
                                width: '100%', 
                                backgroundColor: 'secondary.light', 
                                borderRadius: 3,
                                padding: 2,
                                mb: 2
                            }}
                        >
                            <Grid container
                                direction='row'
                                justifyContent='space-between'
                                sx={{
                                    width: '100%'
                                }}
                            >
                                <Grid item
                                
                                >
                                    <ListItemText>Folio: 1234</ListItemText>
                                    <ListItemText>Fecha: 10/05/2023</ListItemText>
                                    <ListItemText>Instituto destino: Tecnologico de Navolato </ListItemText>
                                    <ListItemText>Estado: Pendiente </ListItemText>
                                </Grid>
                                
                                <Grid item>
                                    <Grid container
                                        direction='column'
                                        spacing={2}
                                        alignItems='center'
                                    >
                                        <Grid item>
                                            <Button variant='contained'>Ver detalle</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button 
                                                variant="outlined" 
                                                color="error"
                                                sx={{
                                                    mr: 2
                                                }}
                                            >
                                                Rechazar
                                            </Button>
                                            <Button variant="outlined" color="success">Aceptar</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>   
                            </Grid>
                        </ListItem>
                    </List>
                </Grid>

            </Grid>
        </Grid>
    </TrasladaTECLayout>
  )
}
