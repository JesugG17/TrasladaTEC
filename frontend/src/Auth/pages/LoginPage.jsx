import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { EmailOutlined, PasswordOutlined } from "@mui/icons-material";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checandoCredenciales } from "../../store/auth/authSlice";
import { useMemo } from "react";

export const LoginPage = () => {
  const { estatus, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleChange, correo, contrasenia } = useForm({
    correo: "",
    contrasenia: "",
  });

  const isChecking = useMemo(() => estatus === "checando", [estatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (correo.length === 0 || contrasenia.length === 0) return;

    dispatch(checandoCredenciales());
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
                name="contraseña"
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
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
