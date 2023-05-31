import { Button } from "@mui/material";
import { TrasladoCardLayout } from "../layout/TrasladoCardLayout";
import { trasladoApi } from "../../api";

export const TrasladosCoordinador = ({ traslado, setTraslados }) => {

  const aceptarTraslado = async() => {
    try {
      await trasladoApi.put(`/aceptar/${traslado.FolioTraslado}`);

      setTraslados((prevTraslados) => {
        const nuevosTraslados = prevTraslados.filter( tras => tras.FolioTraslado !== traslado.FolioTraslado );
        return nuevosTraslados;
      });

    } catch(error) {
      console.log(error);
    }
  }

  const rechazarTraslado = async() => {
    try {
      await trasladoApi.put(`/rechazar/${traslado.FolioTraslado}`);
      setTraslados((prevTraslados) => {
        const nuevosTraslados = prevTraslados.filter( tras => tras.FolioTraslado !== traslado.FolioTraslado );
        return nuevosTraslados;
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrasladoCardLayout 
      traslado={ traslado }
    >
      <Button
        onClick={rechazarTraslado}
        variant="contained"
        color="error"
        sx={{
          mr: 2,
        }}
      >
        Rechazar
      </Button>
      <Button disabled={traslado.adeudo} onClick={aceptarTraslado} variant="contained"  color="success">
        Aceptar
      </Button>
    </TrasladoCardLayout>
  );
};
