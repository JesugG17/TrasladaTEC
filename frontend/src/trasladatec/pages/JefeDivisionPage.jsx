import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout";
import { DataGrid } from "@mui/x-data-grid";
import { PictureAsPdfRounded } from "@mui/icons-material";

const columns = [
  { field: "Folio", width: 150 },
  { field: "Fecha", width: 150 },
  { field: "Estatus", width: 150 },
  { field: "Estudiante", width: 150 },
  { field: "Coordinador", width: 150 },
  { field: "InstitutoOrigen", width: 200 },
  { field: "InstitutoDestino", width: 200 },
];

const traslados = [
  {
    id: 1,
    Folio: 12345,
    Fecha: new Date().getDate(),
    Estatus: "Activo",
    Estudiante: "Jesus Manuel",
    Coordinador: "Edna Rocio",
    InstitutoOrigen: "Tecnologico de Culiacaan",
    InstitutoDestino: "Tecnologico de Navolato",
  },
  {
    id: 2,
    Folio: 12345,
    Fecha: new Date().getDate(),
    Estatus: "Rechazado",
    Estudiante: "Jesus Manuel",
    Coordinador: "Chayito Rocio",
    InstitutoOrigen: "Tecnologico de Culiacan",
    InstitutoDestino: "Tecnologico de Navolato",
  },
];

export const JefeDivisionPage = () => {
  return (
    <TrasladaTECLayout containsSidebar={false}>
      <Grid container flex="row" alignItems="center" justifyContent="center">
        <Grid
          item
          sx={{
            width: "80%",
            height: "70%",
            backgroundColor: "secondary.main",
            borderRadius: 5,
            padding: 2,
          }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            sx={{
              borderBottom: "2px solid black",
              padding: 1,
              mb: 2,
            }}
          >
            Solicitudes de traslado
          </Typography>

          <Box
            sx={{
              height: 200,
              width: "100%",
            }}
          >
            <DataGrid autoHeight columns={columns} rows={traslados} />
          </Box>

          <Grid
            item
            xs={12}
            sx={{
              mt: 10,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "primary.main",
                borderRadius: 2,
                color: "white",
                padding: 2,
                ":hover": { backgroundColor: "primary.light" },
              }}
            >
              <PictureAsPdfRounded sx={{ mr: 1 }} />
              <Typography>Generar reporte</Typography>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </TrasladaTECLayout>
  );
};
