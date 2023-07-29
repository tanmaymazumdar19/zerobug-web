import { useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import MainContent from "./Content";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Typography } from "@mui/material";
import { resetAuthToken } from "../../redux/slices/authSlice";

const SidebarNavLinks = [
  // { path: "/company/dashboard", title: "Dashboard" },
  { path: "/company/employee/hire", title: "Do Hire" },
  { path: "/company/employee/get-hired", title: "Get Hired" },
];

const AdminLinks = [
  { path: "/admin", title: "Companies" },
];

export default function MiniDrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authToken = useSelector((state: any) => state?.authSlice?.userToken);
  const { pathname, state } = useLocation();
  const isAdmin = useSelector((state: any) => state?.authSlice?.isAdmin);

  const handleNavigate = (path: string, title: string) => {
    navigate(path, { state: {title} });
  };

  const tryLogout = () => {
    dispatch(resetAuthToken({}))
    navigate('/login')
  }

  useLayoutEffect(() => {
    if (!authToken) {
      navigate("/login");
    }

    if (pathname === "/" && isAdmin) {
      navigate("/admin");
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
        <Box sx={{ minWidth: 320, bgcolor: "#f1f1f4", p: "52px 0" }}>
        {(isAdmin ? AdminLinks : SidebarNavLinks).map(({ path, title }) => (
          <Box
            key={path}
            sx={{
              fontFamily: "'Inter', sans-serif",
              p: "12px 36px",
              cursor: "pointer",
              bgcolor: path === pathname ? "#e1e1e5" : "transparent",
              ":hover": { bgcolor: "#e6e6ea" },
            }}
            onClick={() => handleNavigate(path, title)}
          >
            {title}
          </Box>
        ))}
        </Box>
        <Box sx={{ width: "100%", p: "32px 48px", overflow: 'auto' }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* <IconButton
                color="inherit"
                aria-label="open Header"
                // onClick={handleHeaderOpen}
                edge="start"
                sx={{
                  // marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton> */}

              <Typography sx={{ fontSize: "24px", fontWeight: 300 }}>
                {state?.title}
              </Typography>
            </Box>

            <Avatar sx={{ width: 32, height: 32, cursor: 'pointer', fontSize: '12px' }} onClick={() => tryLogout()}>TM</Avatar>
          </Box>

          <MainContent />
        </Box>
      </Box>
    </Box>
  );
}
