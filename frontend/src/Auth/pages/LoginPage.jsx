import {
  Alert,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { EmailOutlined, PasswordOutlined } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { startLogInWithEmailAndPassword } from "../../store/auth/thunks";
import { logIn } from "../helpers/login";
import { useNavigate } from "react-router-dom";
import { trasladoApi, usuarioApi } from "../../api";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { estatus, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { handleChange, correo, contrasenia, formState } = useForm({
    correo: "",
    contrasenia: "",
  });

  const isChecking = useMemo(() => estatus === "checando", [estatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (correo.length === 0 || contrasenia.length === 0) return;

    try {
      const result = await logIn(formState);
      
      dispatch(startLogInWithEmailAndPassword(result));
      
      trasladoApi.defaults.headers.common["x-token"] = result.usuario.token;
      usuarioApi.defaults.headers.common["x-token"] = result.usuario.token;

      navigate(`/${result.usuario.tipo}`, {
        replace: true,
      });
    } catch (error) {
      console.log("Algo salio mal LOGINPAGE");
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.light", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: 4,
          width: { md: 450, sm: 450 },
        }}
      >
        <Typography variant="h5" textAlign="center">
          TrasladaTEC
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <TextField
                label="correo"
                type="email"
                disabled={isChecking}
                name="correo"
                fullWidth
                value={correo}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mr: 1 }}>
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                disabled={isChecking}
                name="contrasenia"
                fullWidth
                value={contrasenia}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mr: 1 }}>
                      <PasswordOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={isChecking}
                onSubmit={handleSubmit}
              >
                Ingresar
              </Button>
            </Grid>
            {!!errorMessage && (
              <Grid item xs={12}>
                <Alert severity="error" color="error">
                  <Typography textAlign="center">{errorMessage}</Typography>
                </Alert>
              </Grid>
            )}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
