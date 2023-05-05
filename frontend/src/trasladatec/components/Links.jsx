import { LogoutSharp } from "@mui/icons-material";
import { Grid, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Links = () => {
  return (
    <Grid item>
      <Link
        component={RouterLink}
        to="/crear"
        color="secondary"
        sx={{ textDecoration: "none", mr: 3 }}
      >
        Crear Solicitud
      </Link>
      <Link
        component={RouterLink}
        to="/historial"
        color="secondary"
        sx={{ textDecoration: "none", mr: 3 }}
      >
        Historial
      </Link>
      <Link
        component={RouterLink}
        to="/estudiante"
        color="secondary"
        sx={{ textDecoration: "none", mr: 3 }}
      >
        Perfil
      </Link>
      <IconButton>
        <LogoutSharp color="error" sx={{ fontSize: 40 }} />
      </IconButton>
    </Grid>
  );
};
