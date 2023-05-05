import { useState } from 'react'
import { Alert, Autocomplete, Button, Grid, TextField, Typography } from '@mui/material'
import { TrasladaTECLayout } from '../layout/TrasladaTECLayout'

const institutos = ['Culiacan', 'Hermosillo', 'CDMX', 'Mazatlan'];
const motivos = ['Familiar', 'Personal'];
export const SolicitudView = () => {


  const [otroMotivo, setOtroMotivo] = useState('');
  const [instituto, setInputInstituto] = useState('');
  const [motivo, setInputMotivo] = useState('');
  const [error, setError] = useState(false);

  const onChangeInstituto = (event, newInputValue) => {
    if (error) setError(false);
    setInputInstituto(newInputValue);
  }

  const onChangeMotivo = (event, newInputValue) => {
    if (error) setError(false);
    setInputMotivo(newInputValue);
  }

  const handleChange = (event) => {
    if (error) setError(false);
    setOtroMotivo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (instituto.length === 0 || motivo.length === 0 || otroMotivo.length === 0) {
      setError(true)
      return;
    }

    setInputInstituto('');
    setInputMotivo('');
    setOtroMotivo('');
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
              className='box-shadow'
              direction='column'
              alignItems='center'
              spacing={2}
              sx={{width: '40%', height: 540, backgroundColor: 'secondary.main', borderRadius: 3, padding: 0 }}
            >
              <Typography sx={{mt: 3}}variant='h4' gutterBottom>Solicitud</Typography>
              <form onSubmit={ handleSubmit }>
                <Grid
                  item
                  xs={12}
                >
                  <Autocomplete
                    id='institutos-select'
                    sx={{width: 300}}
                    options={institutos}
                    onChange={ onChangeInstituto }
                    value={ instituto }
                    blurOnSelect
                    renderInput={( params ) => {
                      return <TextField {...params} label='Instituto destino' margin='normal'/>
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <Autocomplete
                    id='institutos-select'
                    sx={{width: 300}}
                    name='motivo'
                    options={motivos}
                    onChange={ onChangeMotivo }
                    value={ motivo }
                    renderInput={( params ) => {
                      return <TextField {...params} label='Motivo' margin='normal'/>
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
                    name='otroMotivo'
                    onChange={handleChange}
                    value={otroMotivo}
                    label='Otro motivo'
                    variant='filled'
                    sx={{ width: 300, mt: 2}}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{mt: 2}}
                >
                 
                  <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                    sx={{mt: 2}}
                  >
                    Crear solicitud
                  </Button>
                  {
                    error &&
                    <Alert sx={{mt: 2}} severity='error' color='error'>Favor de llenar todos los campos</Alert>
                  }
                </Grid>
              </form>  
            </Grid>
          </Grid>
    </TrasladaTECLayout>
  )
}
