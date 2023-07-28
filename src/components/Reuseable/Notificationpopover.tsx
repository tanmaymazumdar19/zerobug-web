import { Box, Button, Divider, Popover, Typography } from "@mui/material";

const Notificationpopover = ({ open, handleNotificationClose }: any) => {
  return (
    <Popover
      id="simple-popover"
      open={open}
      onClose={handleNotificationClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        top: "-65px",
        left: "-50px",
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
      <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1">Notifications</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            You have 10 unread messages
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Box sx={{ p: 1 }}>
        <Button fullWidth disableRipple>
          View All
        </Button>
      </Box>
    </Popover>
  );
};

export default Notificationpopover;
