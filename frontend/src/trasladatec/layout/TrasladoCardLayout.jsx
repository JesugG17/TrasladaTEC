import { Grid, ListItem, ListItemText } from "@mui/material";

export const TrasladoCardLayout = ({ children, traslado }) => {
  console.log(traslado);
  return (
    <ListItem
      className="box-shadow"
      sx={{
        width: "100%",
        backgroundColor: "secondary.light",
        borderRadius: 3,
        padding: 2,
        mb: 2,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
        }}
      >
        <Grid item>
          <ListItemText>Folio: {traslado.FolioTraslado}</ListItemText>
          <ListItemText>Fecha: {traslado.FechaTraslado}</ListItemText>
          <ListItemText>
            Instituto destino: {traslado.Instituto_Destino}
          </ListItemText>
          <ListItemText>
            Motivo: {traslado.motivo}
          </ListItemText>
          <ListItemText>
            Estudiante: {traslado.Estudiante}
          </ListItemText>
          <ListItemText>
            Carrera: {traslado.Carrera}
          </ListItemText>
          <ListItemText>
            Adeudo: {traslado.adeudo ? "Si" : "No"}
          </ListItemText>
        </Grid>

        <Grid item>
          <Grid container direction="column" spacing={2} alignItems="center" justifyContent="center">            
            <Grid item>{children}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
};
