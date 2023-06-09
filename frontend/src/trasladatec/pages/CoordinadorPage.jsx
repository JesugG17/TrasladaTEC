import {
  Grid,
  List,
  Modal,
  Typography,
} from "@mui/material";
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout";
import { TrasladosCoordinador } from "../components/TrasladosCoordinador";
import { useEffect, useState } from "react";
import { getTraslados } from "../helpers/traslados";
import { useSelector } from "react-redux";
import { CheckingAuth } from "../../router/components/CheckingAuth";
import { inicializarInstancias } from "../helpers/instancias";

export const CoordinadorPage = () => {
  const { url, token } = useSelector((state) => state.auth);
  const [traslados, setTraslados] = useState(() => {
    const traslados = JSON.parse(localStorage.getItem("trasladosCordi"));
    return traslados ?? null;
  });

  useEffect(() => {
    inicializarInstancias(token);
    cargarTraslados();
    return () => {
      localStorage.setItem("trasladosCordi", JSON.stringify(traslados));
    };
  }, []);

  const cargarTraslados = async () => {
    try {
      if (traslados) return;
      const { traslados: trasladosPeticion } = await getTraslados(url);
      setTraslados(trasladosPeticion);
    } catch (error) {
      console.log(error);
    }
  };

  if (!traslados) {
    return <CheckingAuth />;
  }

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
          wrap="nowrap"
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
              Traslados - Coordinador
            </Typography>
          </Grid>

          <div className="scroll">
            <List sx={{ width: "100%" }}>
              {traslados.map((traslado) => (
                <TrasladosCoordinador
                  key={traslado.FolioTraslado}
                  traslado={traslado}
                  setTraslados={setTraslados}
                />
              ))}
              {traslados.length === 0 && (
                <Typography textAlign="center" variant="h5">
                  No hay traslados por mostrar
                </Typography>
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </TrasladaTECLayout>
  );
};
