import { Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { EmailOutlined, PasswordOutlined } from '@mui/icons-material'

export const LoginPage = () => {

  const { handleChange, handleSubmit, correo, contraseña } = useForm({
    correo: '',
    contraseña: ''
  })


  return (
    <Grid
      container
      spacing={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
      <Grid
        item
        className='box-shadow'
        xs={3}
        sx={{backgroundColor:'white', borderRadius: 2, padding: 4, width: {md: 450, sm:450}}}
      >
        <Typography variant='h5' textAlign='center'>TrasladaTEC</Typography>
        <form onSubmit={ handleSubmit }>
          <Grid container spacing={1} >
              <Grid item xs={ 12 } sx={{ mt: 1 }}
              >
                <TextField 
                  label='correo'
                  type='email'
                  name='correo'
                  fullWidth
                  value={correo}
                  onChange={ handleChange }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start' sx={{mr: 1}}>
                        <EmailOutlined />  
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={ 12 } sx={{ mt: 2 }}
              >
                <TextField 
                  label='contraseña'
                  type='password'
                  name='contraseña'
                  fullWidth
                  value={ contraseña }
                  onChange={ handleChange }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{mr: 1}}>
                        <PasswordOutlined />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{mt: 2}}>
                  <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                  >
                    Ingresar
                  </Button>
              </Grid>
          </Grid>
      </form>
      </Grid>

    </Grid>
  )
}

