import { LogoutSharp } from '@mui/icons-material';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';


export const Navbar = ({ drawerWidth }) => {
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
        width: {sm: `calc(100% - ${drawerWidth}px)`},
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: 50}}
        >
          <Grid item>
            <Typography variant="h5" component="p">
              TrasladaTEC
            </Typography>
          </Grid>

          <IconButton onClick={logout}>
            <LogoutSharp color="error" sx={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
