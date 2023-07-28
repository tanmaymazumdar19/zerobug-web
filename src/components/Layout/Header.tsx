import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notificationpopover from "../Reuseable/Notificationpopover";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAuthToken } from "../../redux/slices/authSlice";
const HeaderWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: 1201,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: HeaderWidth,
    width: `calc(100% - ${HeaderWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const menuId = "primary-search-account-menu";

const Header = ({ open, handleHeaderOpen }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openNotify, setOpenNotify] = useState<boolean>(false);
  const handleNotificationClick = () => {
    setOpenNotify(true);
  };
  const handleNotificationClose = () => {
    setOpenNotify(false);
  };

  const handlelogoutClick = () => {
    localStorage.setItem("access_token", "");
    dispatch(resetAuthToken(""));
    navigate("/login");
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open Header"
            onClick={handleHeaderOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant Header
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={handleNotificationClick}
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Notificationpopover
            open={openNotify}
            handleNotificationClose={handleNotificationClose}
          />

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handlelogoutClick}
            color="inherit"
          >
            {/* <AccountCircle /> */}
            <LogoutIcon />
          </IconButton>
          {/* <Profilepopover
            open={openProfile}
            handleProfileClose={handleProfileClose}
          /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
