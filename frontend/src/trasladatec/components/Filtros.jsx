import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
const years = [
    'Todos',
    '2020',
    '2021',
    '2022',
    '2023'
  ];
export const Filtros = ({ estatus, anio, handleChange }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{
        mt: 2,
        gap: 5,
      }}
    >
      <Grid item xs={2}>
        <FormControl variant="outlined">
          <InputLabel id="filtro-label-1">Estatus</InputLabel>
          <Select
            labelId="filtro-label-1"
            id="filtro-label"
            label="Estatus"
            name="estatus"
            value={estatus}
            onChange={handleChange}
            sx={{
              width: 150,
            }}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Activos">Activos</MenuItem>
            <MenuItem value="Finalizados">Finalizados</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={1}>
        <FormControl variant="outlined">
          <InputLabel id="filtro-label-2">Año</InputLabel>
          <Select
            labelId="filtro-label-2"
            name="anio"
            label="año"
            value={anio}
            onChange={handleChange}
            sx={{
              width: 100,
            }}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
