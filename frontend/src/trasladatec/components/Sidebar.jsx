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
          {traslados.map((traslado) => (
            <ListItem key={traslado.folioTraslado} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: "success.main",
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
          {/* {["Solicitud1", "Solicitud2", "Solicitud3"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: "success.main",
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
                  <ListItemText primary={text} />
                  <ListItemText secondary={"Some text"} />
                  <ListItemText secondary={"Some text"} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
      </Drawer>
    </Box>
  );
};
