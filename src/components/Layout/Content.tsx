import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { DrawerHeader } from "./Sidebar";
import { Suspense } from "react";
import Loader from "../Reuseable/Loader";

const MainContent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Suspense>
  );
};

export default MainContent;
