import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const TrasladaTECLayout = ({ children, containsSidebar = true }) => {

  return (
    <Box bgcolor="secondary.light" sx={{ display: "flex", height: "100vh" }}>
      <Navbar drawerWidth={400} containsSidebar={containsSidebar} />
      {children}
    </Box>
  );
};
