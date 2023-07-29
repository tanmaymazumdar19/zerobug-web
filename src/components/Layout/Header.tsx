import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Box, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notificationpopover from "../Reuseable/Notificationpopover";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthToken } from "../../redux/slices/authSlice";
import CustomModal from "../Reuseable/CustomModal";
import { setShowModal } from "../../redux/slices/modalSlice";
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
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const notificationState = useSelector(
    (state: any) => state.notificationSlice
  );
  console.log("notificationState", notificationState);
  const dispatch = useDispatch();
  const [openNotify, setOpenNotify] = useState<boolean>(false);
  const isAdmin = useSelector((state: any) => state?.authSlice?.isAdmin)

  const handleNotificationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setOpenNotify(true);
  };
  const handleNotificationClose = () => {
    setOpenNotify(false);
  };

  const handlelogoutClick = () => {
    localStorage.setItem("access_token", "");
    dispatch(resetAuthToken(""));
    dispatch(setShowModal(false));
    navigate("/");
  };

  const handleOpenLogoutModal = () => {
    dispatch(setShowModal(true));
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
            {isAdmin ? 'Admin Panel' : 'Company Panel'}
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
            anchorEl={anchorEl}
            notificationState={notificationState}
          />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleOpenLogoutModal}
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <CustomModal>
        <Box
          sx={{
            paddingTop: "1rem",
            maxWidth: "25vw",
            marginTop: "1rem",
            minHeight: "8rem",
            margin: "0px 1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="h4">Are you Sure ? </Typography>
          <Button variant="contained" type="button" onClick={handlelogoutClick}>
            Logout
          </Button>
        </Box>
      </CustomModal>
    </AppBar>
  );
};

export default Header;
