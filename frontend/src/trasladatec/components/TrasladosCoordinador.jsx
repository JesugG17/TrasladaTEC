import { Button } from "@mui/material";
import { TrasladoCardLayout } from "../layout/TrasladoCardLayout";

export const TrasladosCoordinador = () => {
  return (
    <TrasladoCardLayout>
      <Button
        variant="outlined"
        color="error"
        sx={{
          mr: 2,
        }}
      >
        Rechazar
      </Button>
      <Button variant="outlined" color="success">
        Aceptar
      </Button>
    </TrasladoCardLayout>
  );
};