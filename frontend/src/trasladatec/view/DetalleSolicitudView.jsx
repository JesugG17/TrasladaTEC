import { CloseOutlined } from "@mui/icons-material";
import { Grid, IconButton, TextField, Typography } from "@mui/material";

export const DetalleSolicitudView = ({ handleOpenModal, traslados }) => {
  return (
    <Grid
      container
      component="main"
      className="box-shadow animate__animated animate__fadeIn"
      direction="column"
      alignItems="center"
      spacing={1}
      position="relative"
      left="500px"
      top="120px"
      sx={{
        width: "40%",
        height: 550,
        backgroundColor: "secondary.main",
        borderRadius: 3,
        p: 2,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <Typography
            sx={{
              mb: 3,
            }}
            textAlign="center"
            variant="h4"
          >
            Detalle
          </Typography>
        </Grid>
        <Grid 
          item
        >
          <IconButton sx={{ mr: 5 }} onClick={handleOpenModal}>
            <CloseOutlined sx={{ fontSize: 30 }} color="error" />
          </IconButton>
        </Grid>
      </Grid>
      <TextField
        label="No.Control"
        defaultValue={""}
        inputProps={{
          readOnly: true
        }}
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
      <TextField
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
      <TextField
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
      <TextField
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
      <TextField
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
      <TextField
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
      <TextField
        sx={{
          width: "50%",
          mb: 1,
        }}
      />
    </Grid>
  );
};
