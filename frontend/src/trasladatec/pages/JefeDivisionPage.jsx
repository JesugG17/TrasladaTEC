import {
  Box,
  Divider,
  FormControl,
  Grid,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout";
import { useForm } from "../../hooks/useForm";
import { Filtros } from "../components/Filtros";
import { CheckCircle, CheckCircleOutline } from "@mui/icons-material";
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


  const { estatus, anio, handleChange } = useForm({
    estatus: '',
    anio: ''
  })
  
  console.log(traslados);;

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
          <Filtros 
            estatus={ estatus }
            anio={ anio }
            handleChange={ handleChange }
          />
          {/* <Grid item
            sx={{
              width: '100%',
              height: 200
            }}
          >
          </Grid> */}
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



          
          {/* <Grid container
            direction='column'
            
            
          >
            <Grid container
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              sx={{
                width: '100%',
                height: 100,
                outline: '1px solid black',
                gap: 2,
                backgroundColor: 'primary.main',
                borderRadius: 2,
                mt: 2
              }}
            >
              <Grid item>
                <Icon>
                  <CheckCircleOutline color="success" />
                </Icon>
                <Typography color='white'>Folio: {1234} </Typography>
              </Grid>
              <Grid item>
                <Typography></Typography>
              </Grid>
            </Grid>
          </Grid> */}
          

        </Grid>
      </Grid>
    </TrasladaTECLayout>
  );
};
