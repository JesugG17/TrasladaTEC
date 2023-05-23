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
import { SolicitudView } from "../view/SolicitudView";
import { useSelector } from "react-redux";
import { usuarioApi } from "../../api/usuario.api";
import { CheckingAuth } from "../../router/components/CheckingAuth";
import { Sidebar } from "../components/Sidebar";
import { getTraslados } from "../helpers/traslados";

export const EstudiantePage = () => {
  const { correo } = useSelector((state) => state.auth);
  const [estudiante, setEstudiante] = useState();
  const [open, setOpen] = useState(false);
  const [traslados, setTraslados] = useState([]);

  useEffect(() => {
    cargarEstudiante();
    cargarTrasladosEstudiante();
  }, []);

  const cargarTrasladosEstudiante = async () => {
    try {
      const data = await getTraslados(correo);
      setTraslados(data);
    } catch (error) {
      console.log("Fallo al pedir los traslados");
    }
  };

  const cargarEstudiante = async () => {
    try {
      const { data } = await usuarioApi.get(`/estudiante/${correo}`);
      setEstudiante(data);
    } catch (error) {
      console.log("Algo salio mal");
    }
  };

  const handleOpenApplication = () => {
    setOpen(!open);
  };

  if (!estudiante || !traslados) {
    return <CheckingAuth />;
  }

  return (
    <TrasladaTECLayout>
      <Sidebar 
        drawerWidth={400}
        traslados={ traslados} 
      />
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
                <ListItem>
                  <ListItemText>
                    NumControl: {estudiante.numControl}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Nombre: {estudiante.estNombre}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>
                    Apellidos:{" "}
                    {`${estudiante.estApePat} ${estudiante.estApeMat}`}
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Semestre: {estudiante.semestre}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Promedio: {estudiante.promedio}</ListItemText>
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

        {open && (
          <Modal open>
            <Grid container>
              <SolicitudView
                setTraslados={setTraslados}
                handleOpenApplication={handleOpenApplication}
              />
            </Grid>
          </Modal>
        )}
      </Grid>
    </TrasladaTECLayout>
  );
};
