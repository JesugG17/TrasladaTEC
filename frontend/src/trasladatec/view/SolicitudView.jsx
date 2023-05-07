import { useState } from "react";
import {
  Alert,
  Autocomplete,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

const institutos = ["Culiacan", "Hermosillo", "CDMX", "Mazatlan"];
const motivos = ["Familiar", "Personal"];

export const SolicitudView = ({ handleOpenApplication }) => {
  const [otroMotivo, setOtroMotivo] = useState("");
  const [instituto, setInputInstituto] = useState("");
  const [motivo, setInputMotivo] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onChangeInstituto = (event, newInputValue) => {
    if (error) setError(false);
    if (success) setSuccess(false);

    setInputInstituto(newInputValue);
  };

  const onChangeMotivo = (event, newInputValue) => {
    if (error) setError(false);
    if (success) setSuccess(false);
    setInputMotivo(newInputValue);
  };

  const handleChange = (event) => {
    if (error) setError(false);
    if (success) setSuccess(false);
    setOtroMotivo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!instituto || !motivo || otroMotivo.length === 0) {
      setError(true);
      setSuccess(false);
      return;
    }

    setInputInstituto(null);
    setInputMotivo(null);
    setOtroMotivo("");
    setSuccess(true);
    setDisabled(true);
    // handleOpenApplication();
  };

  return (
    <Grid
      container
      component="main"
      className="box-shadow animate__animated animate__fadeInRight"
      direction="column"
      alignItems="center"
      spacing={2}
      position="relative"
      left="400px"
      top="120px"
      sx={{
        width: "50%",
        height: 540,
        backgroundColor: "secondary.main",
        borderRadius: 3,
        padding: 0,
      }}
    >
      <Grid container direction="row" justifyContent="space-between">
        <Typography
          sx={{ mt: 3 }}
          position="relative"
          left="320px"
          variant="h4"
          gutterBottom
        >
          Solicitud
        </Typography>
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
            disabled={ disabled }
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
          <Autocomplete
            id="institutos-select"
            sx={{ width: 300 }}
            name="motivo"
            options={motivos}
            onChange={onChangeMotivo}
            disabled={ disabled }
            value={motivo}
            renderInput={(params) => {
              return <TextField {...params} label="Motivo" margin="normal" />;
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            minRows={4}
            name="otroMotivo"
            onChange={handleChange}
            disabled={ disabled }
            value={otroMotivo}
            label="Otro motivo"
            variant="filled"
            sx={{ width: 300, mt: 2 }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
            Crear solicitud
          </Button>
          {error && (
            <Alert sx={{ mt: 2 }} severity="error" color="error" className="animate__animated animate__fadeIn">
              Favor de llenar todos los campos
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mt: 2 }} color="success" className="animate__animated animate__fadeIn">
              Solicitud creada exitosamente
            </Alert>
          )}
        </Grid>
      </form>
    </Grid>
  );
};
