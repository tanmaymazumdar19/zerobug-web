import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
