import {
  Alert,
  Autocomplete,
  Button,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useSolicitud } from "../hooks/useSolicitud";
import { postTraslado } from "../helpers/traslados";
import { useEffect, useState } from "react";
import { getInstitutos } from "../helpers/institutos";
import { useSelector } from "react-redux";

// const institutos = ["Culiacan", "Hermosillo", "CDMX", "Mazatlan"];

export const SolicitudView = ({ handleOpenApplication, setTraslados }) => {

  const { correo } = useSelector(state => state);
  const [institutos, setInstitutos] = useState([]);

  const {
    motivo,
    instituto,
    disabled,
    error,
    success,
    handleChange,
    resetAll,
    onChangeInstituto,
    setError,
    setSuccess
  } = useSolicitud();

  useEffect(() => {
    cargarInstitutos()
  }, []);


  const cargarInstitutos = async() => {
    try {
      const data = await getInstitutos(correo);
      const institutosDisponibles = data.map( instituto => instituto.instNombre);
      setInstitutos(institutosDisponibles);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!instituto || motivo.length === 0) {
      setError(true);
      setSuccess(false);
      return;
    }

    const { data: nuevoTraslado } = await postTraslado({
      motivo,
      institutoDestino: instituto,
    });

    setTraslados((traslados) => [nuevoTraslado, ...traslados]);
    resetAll();
  };
  return (
    <Grid
      container
      component="main"
      className="box-shadow animate__animated animate__fadeIn"
      direction="column"
      alignItems="center"
      spacing={2}
      position="relative"
      left="500px"
      top="120px"
      sx={{
        width: "40%",
        height: 450,
        backgroundColor: "secondary.main",
        borderRadius: 3,
      }}
    >
      <Grid container direction="row" justifyContent="flex-end">
        <IconButton sx={{ mr: 5 }} onClick={handleOpenApplication}>
          <CloseOutlined sx={{ fontSize: 30 }} color="error" />
        </IconButton>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
          <Autocomplete
            id="institutos-select"
            sx={{ width: 300 }}
            options={institutos}
            onChange={onChangeInstituto}
            disabled={disabled}
            value={instituto}
            blurOnSelect
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Instituto destino"
                  margin="normal"
                />
              );
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            multiline
            minRows={4}
            name="motivo"
            onChange={handleChange}
            disabled={disabled}
            value={motivo}
            label="Motivo"
            variant="filled"
            sx={{ width: 300, mt: 2 }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button
            disabled={disabled}
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Crear solicitud
          </Button>
          {error && (
            <Alert
              sx={{ mt: 2 }}
              severity="error"
              color="error"
              className="animate__animated animate__fadeIn"
            >
              Favor de llenar todos los campos
            </Alert>
          )}
          {success && (
            <Alert
              severity="success"
              sx={{ mt: 2 }}
              color="success"
              className="animate__animated animate__fadeIn"
            >
              Solicitud creada exitosamente
            </Alert>
          )}
        </Grid>
      </form>
    </Grid>
  );
};
