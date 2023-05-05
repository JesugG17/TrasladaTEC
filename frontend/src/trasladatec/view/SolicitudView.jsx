import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material"
import { TrasladaTECLayout } from "../layout/TrasladaTECLayout"
import { useState } from "react"
const institutos = ['', 'Culiacan', 'Hermosillo', 'CDMX', 'Mazatlan'];
const motivos = ['', 'Familiar', 'Personal'];
export const SolicitudView = () => {

  const [inputValue, setInputValue] = useState('');
  const [motivoValue, setMotivoValue] = useState('');

  const onChangeInstituto = (event, newInputValue) => {
    console.log({oninputchange: newInputValue});
    setInputValue(newInputValue);
  }

  const onChangeMotivo = (event, newInputValue) => {
    setMotivoValue(newInputValue);
  }

  return (
    <TrasladaTECLayout>
          <Grid 
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{width: '100%', height: '100vh'}}
          >
            
            <Grid 
              container
              className="box-shadow"
              direction='column'
              alignItems='center'
              spacing={2}
              sx={{width: '40%', height: 500, backgroundColor: 'secondary.main', borderRadius: 3, padding: 5 }}
            >
              <Typography variant="h4" gutterBottom>Solicitud</Typography>
              <form>
                <Grid
                  item
                  xs={12}
                >
                  <Autocomplete
                    id="institutos-select"
                    sx={{width: 300}}
                    // value={value}
                    options={institutos}
                    // onChange={onChange}
                    onInputChange={onChangeInstituto}
                    inputValue={ inputValue }
                    renderInput={( params ) => {
                      return <TextField {...params} label="Instituto destino" margin="normal"/>
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <Autocomplete
                    id="institutos-select"
                    sx={{width: 300}}
                    // value={value}
                    options={motivos}
                    // onChange={onChange}
                    onInputChange={onChangeMotivo}
                    inputValue={ motivoValue }
                    renderInput={( params ) => {
                      return <TextField {...params} label="Motivo" margin="normal"/>
                    }}
                  />
                </Grid> 
                <Grid
                  item
                  xs={12}
                >
                  <TextField 
                    multiline
                    minRows={4}
                    label='Otro motivo'
                    variant="filled"
                    sx={{ width: 300}}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{mt: 2}}
                >
                  <Button
                    variant="contained"
                    fullWidth
                  >
                    Crear solicitud
                  </Button>
                </Grid>
              </form>  
            </Grid>
          </Grid>

    </TrasladaTECLayout>
  )
}
