import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export const TrasladaTECLayout = ({ children, containsSidebar = true }) => {
  return (
    <Box bgcolor="secondary.light" sx={{ display: "flex", height: "100vh" }}>
      <Navbar drawerWidth={400} containsSidebar={containsSidebar} />

      {containsSidebar && <Sidebar drawerWidth={400} />}
      {children}
    </Box>
  );
};
