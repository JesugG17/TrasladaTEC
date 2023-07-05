import { LogoutSharp } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout, resetAuthState } from "../../store/auth/authSlice";
import { resetStudentState } from "../../store/student/studentSlice";

export const Navbar = ({ drawerWidth, containsSidebar = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch(logout());
    dispatch(resetAuthState());
    dispatch(resetStudentState());
    localStorage.removeItem('institutos');
    localStorage.removeItem('trasladosCordi');

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
            <IconButton onClick={handleLogout}>
              <LogoutSharp color="error" sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
