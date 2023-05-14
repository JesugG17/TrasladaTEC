import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "primary.main",
      }}
    >
      <Grid item>
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
