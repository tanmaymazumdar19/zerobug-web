import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Outlet />
    </Box>
  );
};

export default MainContent;
