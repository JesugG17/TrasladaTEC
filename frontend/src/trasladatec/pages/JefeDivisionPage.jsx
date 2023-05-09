import {
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {field: 'folio'},
  {field: 'fecha'},
  {field: 'estatus'},
  {field: 'estudiante'},
  {field: 'coordinador'},
  {field: 'institutoOrigen', width: 120},
  {field: 'institutoDestino', width: 150}
]

const traslados = [
  {
    id: 1,
    folio: 12345,
    fecha: new Date().getDate(),
    estatus: 'Activo',
    estudiante: 'Jesus Manuel',
    coordinador: 'Edna Rocio',
    institutoOrigen: 'Tecnologico de Culiacan',
    institutoDestino: 'Tecnologico de Navolato'
  },
  {
    id: 2,
    folio: 12345,
    fecha: new Date().getDate(),
    estatus: 'Activo',
    estudiante: 'Jesus Manuel',
    coordinador: 'Edna Rocio',
    institutoOrigen: 'Tecnologico de Culiacan',
    institutoDestino: 'Tecnologico de Navolato'
  }
]

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
          <Typography textAlign="center" variant="h4">
            Solicitudes de traslado
          </Typography>
          <Divider />  
          
          <Box sx={{
            height: 400,
            width: '100%'
          }}>

            <DataGrid 
              autoHeight
              disableColumnFilter
              columns={columns} 
              rows={traslados}
            />
          </Box>

        </Grid>
      </Grid>
    </TrasladaTECLayout>
  );
};
