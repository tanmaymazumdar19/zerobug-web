import { useLayoutEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MiniDrawer() {
  const navigate = useNavigate();
  const authToken = useSelector((state: any) => state?.authSlice?.userToken);
  const { pathname } = useLocation();
  const isAdmin = useSelector((state: any) => state?.authSlice?.isAdmin)

  useLayoutEffect(() => {
    if (!authToken) {
      navigate("/login");
    }

    if (pathname === '/' && isAdmin) {
      navigate('/admin')
    }
  }, []);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleHeaderOpen={handleDrawerOpen} />
      <Sidebar
        open={open}
        theme={theme}
        handleDrawerClose={handleDrawerClose}
      />
      <MainContent />
    </Box>
  );
}
