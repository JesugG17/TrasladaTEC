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
import { usuarioApi } from "../../api";

export const SolicitudView = ({ handleOpenApplication, setTraslados }) => {

  const { correo } = useSelector(state => state.auth);
  const [institutos, setInstitutos] = useState(() => {
    const institutosGuardados = JSON.parse(localStorage.getItem('institutos'));
    return institutosGuardados ?? [];
  });
  const [adeudo, setAdeudo] = useState();

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
    obtenerAdeudos();
    cargarInstitutos()
  }, []);

  useEffect(() => {
    localStorage.setItem('institutos', JSON.stringify(institutos));
  }, [institutos]);

  const obtenerAdeudos = async() => {
    try {
      const { data } = await usuarioApi.get('/adeudo');
      setAdeudo(data.adeudo);
    } catch (error) {
      console.log(error);
    }
  }

  const cargarInstitutos = async() => {
    try {
      if (institutos.length !== 0) return;
      const data = await getInstitutos(correo);
      console.log('Hice la peticion!');
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
            disabled={disabled || adeudo}
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
            disabled={disabled || adeudo}
            value={motivo}
            label="Motivo"
            variant="filled"
            sx={{ width: 300, mt: 2 }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button
            disabled={disabled || adeudo}
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
          {adeudo && (
            <Alert
              severity="error"
              sx={{ mt: 2 }}
              color="error"
              className="animate__animated animate__fadeIn"
            >
              ERROR, TIENE ADEUDOS
            </Alert>
          )}
        </Grid>
      </form>
    </Grid>
  );
};
