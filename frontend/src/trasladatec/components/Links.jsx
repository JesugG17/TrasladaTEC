import { LogoutSharp } from "@mui/icons-material";
import { Grid, IconButton, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const links = [
  {
    to: '/crear',
    text: 'Crear solicitud'
  },
  {
    to: '/historial',
    text: 'Historial'
  },
  {
    to: '/estudiante',
    text: 'Perfil'
  }
]

export const Links = () => {

  const navigate = useNavigate();

  const logout = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <Grid item>
      {
        links.map( ({ to, text }, index) => (
          <Link
            key={index}
            component={RouterLink}
            to={ to }
            color='secondary'
            sx={{ textDecoration: "none", mr: 3 }}
          >
            { text }
          </Link>
        ))
      }
      <IconButton onClick={ logout }>
        <LogoutSharp color="error" sx={{ fontSize: 40 }} />
      </IconButton>
    </Grid>
  );
};

