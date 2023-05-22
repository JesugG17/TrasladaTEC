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
import { useSolicitud } from "../hooks/useSolicitud";

const institutos = ["Culiacan", "Hermosillo", "CDMX", "Mazatlan"];
const motivos = ["Familiar", "Personal"];

export const SolicitudView = ({ handleOpenApplication }) => {
  const {
    motivo,
    instituto,
    disabled,
    error,
    success,
    handleChange,
    handleSubmit,
    onChangeInstituto,
  } = useSolicitud();

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
          <Button disabled={ disabled } variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
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
