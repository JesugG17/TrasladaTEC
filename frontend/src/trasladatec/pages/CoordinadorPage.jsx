import { Divider, Grid, List, Typography } from "@mui/material"
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
                direction="row"
                sx={{
                    backgroundColor: 'secondary.main',
                    width: '80%',
                    height: '70%',
                    borderRadius: 4,
                    padding: 2
                }}
            >      
                <Grid item
                    xs={12}
                    sx={{
                        width: '100%'
                    }}
                >
                    <Typography align='center' variant="h4" gutterBottom>Traslados</Typography>
                    <Divider />
                </Grid>
                <List>

                </List>
            </Grid>
        </Grid>
    </TrasladaTECLayout>
  )
}
