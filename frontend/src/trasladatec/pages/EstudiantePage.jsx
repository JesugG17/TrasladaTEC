import { useState } from "react";
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout";
import { AccountBoxOutlined, AddOutlined } from "@mui/icons-material";
import { SolicitudView } from "../view/SolicitudView";

const datosTemporales = [
  "Jesus Manuel",
  "Gastelum Chaparro",
  "Ingenieria en sistemas",
  "6",
  "9.2",
];

export const EstudiantePage = () => {
  const [open, setOpen] = useState(false);

  const handleOpenApplication = () => {
    setOpen(!open);
  };

  return (
    <TrasladaTECLayout>
      <Grid container>
        <Grid
          container
          className="box-shadow animate__animated animate__fadeInUp"
          direction="row"
          alignItems="center"
          sx={{
            backgroundColor: "secondary.main",
            width: "50%",
            height: "50%",
            borderRadius: 3,
            outline: "2px solid black",
            alignSelf: "center",
            margin: "0 auto",
          }}
        >
          <Grid item xs={12}>
            <Typography textAlign="center" variant="h4">
              Perfil
            </Typography>
            <Divider />
          </Grid>
          <Grid container>
            <Grid item xs={7}>
              <List>
                {datosTemporales.map((dato) => (
                  <ListItem key={dato}>
                    <ListItemText>{dato}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={5}>
              <IconButton>
                <AccountBoxOutlined
                  sx={{
                    fontSize: "6em",
                    borderRadius: 2,
                    outline: "1px solid black",
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Tooltip title="Crear solicitud" arrow placement="top">
          <IconButton
            size="large"
            sx={{
              color: "white",
              backgroundColor: "error.main",
              position: "fixed",
              ":hover": { backgroundColor: "error.main", opacity: 0.8 },
              right: 50,
              bottom: 50,
            }}
            onClick={handleOpenApplication}
          >
            <AddOutlined sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        {open && (
          <Modal open>
            <Grid container>
              <SolicitudView handleOpenApplication={handleOpenApplication} />
            </Grid>
          </Modal>
        )}
      </Grid>
    </TrasladaTECLayout>
  );
};
