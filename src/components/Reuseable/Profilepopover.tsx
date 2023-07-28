import { useState } from "react";
import { alpha } from "@mui/material/styles";
import { Divider, Stack, MenuItem, Popover } from "@mui/material";

const Profilepopover = ({ open, handleProfileClose }: any) => {
  const MENU_OPTIONS = [
    {
      label: "Home",
      icon: "eva:home-fill",
    },
    {
      label: "Profile",
      icon: "eva:person-fill",
    },
    {
      label: "Settings",
      icon: "eva:settings-2-fill",
    },
  ];
  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      onClose={handleProfileClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        top: "-65px",
        left: "-10px",
        p: 0,
        mt: 1.5,
        ml: 0.75,
        width: 250,
        "& .MuiMenuItem-root": {
          typography: "body2",
          borderRadius: 0.75,
        },
      }}
    >
      <Stack sx={{ p: 1 }}>
        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleProfileClose}>
            {option.label}
          </MenuItem>
        ))}
      </Stack>

      <Divider sx={{ borderStyle: "dashed" }} />

      <MenuItem onClick={handleProfileClose} sx={{ m: 1 }}>
        Logout
      </MenuItem>
    </Popover>
  );
};

export default Profilepopover;
