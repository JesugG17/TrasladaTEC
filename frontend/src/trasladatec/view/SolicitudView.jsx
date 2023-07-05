import {
  Alert,
  Autocomplete,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { useSolicitud } from "../hooks/useSolicitud";
import { postTraslado } from "../helpers/traslados";
import { useEffect, useState } from "react";
import { getInstitutos } from "../helpers/institutos";
import { useDispatch, useSelector } from "react-redux";
import { usuarioApi } from "../../api";
import { creatingNewTransfer, startChargingInstitutes } from "../../store/student/thunks";

export const SolicitudView = ({ handleOpenApplication }) => {

  const [institutos, setInstitutos] = useState(() => {
    const institutosGuardados = JSON.parse(localStorage.getItem('institutos'));
    return institutosGuardados ?? [];
  });

  const dispatch = useDispatch();
  const { institutesToTransfer: institutes, errorMessage } = useSelector(state => state.student);

  const {
    motivo,
    instituto,
    disabled,
    error,
    success,
    handleChange,
    onChangeInstituto,
    setError,
    setSuccess,
    resetAll
  } = useSolicitud();

  useEffect(() => {
    dispatch(startChargingInstitutes());
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!instituto || motivo.length === 0) {
      setError(true);
      setSuccess(false);
      return;
    }

    dispatch(creatingNewTransfer(motivo, instituto));
    setError(false);
    setSuccess(true);
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

      <Typography
        sx={{
          font: 5,
        }}
      >
      </Typography>

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
            options={institutes}
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
          {
            errorMessage &&
            <Alert
              severity="error"
              sx={{ mt: 2 }}
              color="error"
              className="animate__animated animate__fadeIn"
            >
              { errorMessage }
            </Alert>
          }

        </Grid>
      </form>
    </Grid>
  );
};
