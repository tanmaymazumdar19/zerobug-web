import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { DrawerHeader } from "./Sidebar";

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Outlet />
    </Box>
  );
};

export default MainContent;
