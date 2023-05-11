import {
  Grid,
  List,
  Typography,
} from "@mui/material";
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout";
import { TrasladosCoordinador } from "../components/TrasladosCoordinador";

export const CoordinadorPage = () => {
  return (
    <TrasladaTECLayout containsSidebar={false}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100vh",
        }}
      >
        <Grid
          container
          className="box-shadow"
          direction="column"
          sx={{
            backgroundColor: "secondary.main",
            width: "80%",
            height: "70%",
            borderRadius: 4,
            padding: 2,
          }}
        >
          <Grid item>
            <Typography
              align="center"
              variant="h4"
              sx={{
                borderBottom: "2px solid black",
                padding: 2,
                mb: 3,
              }}
            >
              Traslados
            </Typography>
          </Grid>

          <List sx={{ width: "100%" }}>
            <TrasladosCoordinador />
          </List>
        </Grid>
      </Grid>
    </TrasladaTECLayout>
  );
};
