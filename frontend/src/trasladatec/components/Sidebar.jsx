import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const COLORES_ESTATUS = {
  1: "warning.main",
  2: "success.main",
  3: "error.main"
}

export const Sidebar = ({ drawerWidth, traslados = [] }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        PaperProps={{
          sx: {
            backgroundColor: "primary.light",
          },
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography
            color="white"
            variant="h6"
            component="div"
            sx={{
              borderBottom: "1px solid white",
              width: "100%",
              textAlign: "center",
              padding: 1,
            }}
          >
            Historial de solicitudes
          </Typography>
        </Toolbar>
        <List>
          {traslados.length === 0 && (
            <Typography color="white" variant="h6" textAlign="center">
              No hay solicitudes hechas
            </Typography>
          )}
          {traslados.map((traslado, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: `${COLORES_ESTATUS[traslado.estatus]}`,
                  }}
                >
                  <CheckCircle />
                </ListItemIcon>
                <Grid
                  container
                  sx={{
                    color: "white",
                  }}
                >
                  <ListItemText primary={traslado.instituto_Destino} />
                  <ListItemText secondary={traslado.motivo} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
