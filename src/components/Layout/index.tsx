import { useLayoutEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MiniDrawer() {
  const navigate = useNavigate();
  const authToken = useSelector((state: any) => state?.authSlice?.userToken);
  console.log("authToken", authToken);

  useLayoutEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const theme = useTheme();
  const [open, setOpen] = useState(true);

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
