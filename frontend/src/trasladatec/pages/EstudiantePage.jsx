import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../../router/components/CheckingAuth";
import { Sidebar } from "../components/Sidebar";
import { inicializarInstancias } from "../helpers/instancias";
import { startChargeStudent, startChargeTransfers } from "../../store/student/thunks";
import { SolicitudView } from "../view/SolicitudView";

export const EstudiantePage = () => {

  const { url, token } = useSelector(state => state.auth);
  const { transfers, info } = useSelector(state => state.student);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    inicializarInstancias(token);
    return () => {
      localStorage.removeItem("institutos");
    };
  }, []);

  useEffect(() => {
    dispatch(startChargeStudent());
  }, []);

  useEffect(() => {
    dispatch(startChargeTransfers(url));
  }, []);


  const handleOpenApplication = () => {
    setOpen(!open);
  };

  if (!info || !transfers) {
    return <CheckingAuth />;
  }

  return (
    <TrasladaTECLayout>
      <Sidebar drawerWidth={400} traslados={transfers} />
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
            p: 2,
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
                <ListItem>
                  <ListItemText>
                    NumControl: {info.numControl}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Nombre: {info.estNombre}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Apellidos:{" "}
                    {`${info.estApePat} ${info.estApeMat}`}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Semestre: {info.semestre}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Promedio: {info.promedio}</ListItemText>
                </ListItem>
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
        <Modal open={open}>
          <Grid container>
            <SolicitudView
              handleOpenApplication={handleOpenApplication}
            />
          </Grid>
        </Modal>
      </Grid>
    </TrasladaTECLayout>
  );
};
