import {
  Grid,
  List,
  TextField,
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
  
  const { url, token } = useSelector(state => state.auth);
  const [traslados, setTraslados] = useState(null);

  useEffect(() => {
    inicializarInstancias(token);
    cargarTraslados();
  }, []);

  const cargarTraslados = async() => {
    try {
      const data = await getTraslados(url);
      setTraslados(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!traslados) {
    return <CheckingAuth />
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
            {
              traslados.map( traslado => (
                <TrasladosCoordinador
                  key={ traslado.FolioTraslado} 
                  traslado={ traslado }
                />
              ))
            }
          </List>
        </Grid>
      </Grid>
    </TrasladaTECLayout>
  );
};
