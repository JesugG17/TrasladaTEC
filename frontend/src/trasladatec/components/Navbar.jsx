import { LogoutSharp } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

export const Navbar = ({ drawerWidth, containsSidebar = true }) => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `${containsSidebar ? `calc(100% - ${drawerWidth}px` : "100%"})`,
        },
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: 50 }}
        >
          <Grid item>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700 }}>
              TrasladaTEC
            </Typography>
          </Grid>

          <Tooltip title="Cerrar sesion" arrow>
            <IconButton onClick={logout}>
              <LogoutSharp color="error" sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
