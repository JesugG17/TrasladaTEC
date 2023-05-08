import { Grid } from "@mui/material"
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
                sx={{
                    backgroundColor: 'secondary.main',
                    width: '80%',
                    height: '70%',
                    borderRadius: 4
                }}
            >

            </Grid>
        </Grid>
    </TrasladaTECLayout>
  )
}
