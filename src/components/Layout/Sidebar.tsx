import { useLocation, useNavigate } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const SidebarNavLinks = [
  { path: "/company/dashboard", title: "Dashboard" },
  { path: "/company/employee/hire", title: "Do Hire" },
  { path: "/company/employee/get-hired", title: "Get Hired" },
];

const AdminLinks = [
  { path: "/admin", title: "Companies" },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ theme, open, handleDrawerClose }: any) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAdmin = useSelector((state: any) => state?.authSlice?.isAdmin)

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {(isAdmin ? AdminLinks : SidebarNavLinks).map(({ path, title }) => (
          <ListItem
            key={path}
            disablePadding
            sx={{
              display: "block",
              ...(pathname === path ? { bgcolor: "#ddd" } : {}),
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => handleNavigate(path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? "10px" : "auto",
                  justifyContent: "center",
                }}
              >
                {title === "Dashboard" || title === "Companies" ? (
                  <EqualizerIcon />
                ) : title === "Do Hire" ? (
                  <PersonAddIcon />
                ) : title === "Get Hired" ? (
                  <PermIdentityIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
