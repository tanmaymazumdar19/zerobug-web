import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Reuseable/Loader";

const MainContent = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Box component="main" sx={{ flexGrow: 1, mt: 8 }}>
        <Outlet />
      </Box>
    </Suspense>
  );
};

export default MainContent;
