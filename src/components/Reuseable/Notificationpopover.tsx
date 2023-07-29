import { Box, Divider, Popover, Typography } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Notificationpopover = ({
  open,
  handleNotificationClose,
  anchorEl,
  notificationState,
}: any) => {
  console.log("notificationState", notificationState);
  return (
    <Popover
      id="simple-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleNotificationClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      PaperProps={{
        style: { width: "300px" },
      }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        top: "0px",
        left: "0px",
        p: 0,
        mt: 1.5,
        ml: 1,
        minWidth: "40rem !important",
        width: "50vw",
        "& .MuiMenuItem-root": {
          typography: "body2",
          borderRadius: 0.75,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Notifications</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            You have {notificationState?.notificationArray.length} unread
            messages
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          px: 2.5,
        }}
      >
        {notificationState?.notificationArray?.map((item: any) => {
          return (
            <Box
              key={crypto.randomUUID()}
              sx={{
                display: "flex",
                gap: "2rem",
                borderBottom: "1px solid lightgray",
              }}
            >
              <Typography variant="h2">
                <NotificationsActiveIcon />
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontSize: "1rem" }}
                >
                  {item.compName}
                </Typography>
                <Typography>{item.msg}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Popover>
  );
};

export default Notificationpopover;
