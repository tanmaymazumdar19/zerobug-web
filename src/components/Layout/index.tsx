import { MouseEvent, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Box, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import Logout from '@mui/icons-material/Logout'

import MainContent from './Content'
import { resetAuthToken } from '../../redux/slices/authSlice'

const SidebarNavLinks = [
  { path: '/company/employee/hire', title: 'Do Hire' },
  { path: '/company/employee/get-hired', title: 'Get Hired' },
]

const AdminLinks = [{ path: '/admin', title: 'Companies' }]

export default function MiniDrawer() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authToken = useSelector((state: any) => state?.authSlice?.userToken)
  const { pathname, state } = useLocation()
  const isAdmin = useSelector((state: any) => state?.authSlice?.isAdmin)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleNavigate = (path: string, title: string) => {
    navigate(path, { state: { title } })
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const tryLogout = () => {
    dispatch(resetAuthToken({}))
    navigate('/login')
  }

  useLayoutEffect(() => {
    if (!authToken) {
      navigate('/login')
    }

    if (pathname === '/' && isAdmin && authToken) {
      navigate('/admin')
    } else if (pathname === '/' && !isAdmin && authToken) {
      navigate('/company/employee/hire')
    }
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
        <Box sx={{ minWidth: 320, bgcolor: '#f1f1f4', p: '52px 0' }}>
          {(isAdmin ? AdminLinks : SidebarNavLinks).map(({ path, title }) => (
            <Box
              key={path}
              sx={{
                fontFamily: "'Inter', sans-serif",
                p: '12px 36px',
                cursor: 'pointer',
                bgcolor: path === pathname ? '#e1e1e5' : 'transparent',
                ':hover': { bgcolor: '#e6e6ea' },
              }}
              onClick={() => handleNavigate(path, title)}
            >
              {title}
            </Box>
          ))}
        </Box>
        <Box sx={{ width: '100%', p: '32px 48px', overflow: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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

              <Typography sx={{ fontSize: '24px', fontWeight: 300 }}>{state?.title}</Typography>
            </Box>

            <Avatar
              sx={{
                width: 32,
                height: 32,
                cursor: 'pointer',
                fontSize: '12px',
              }}
              onClick={handleClick}
            >
              TM
            </Avatar>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={() => {
                handleClose()
                tryLogout()
              }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>

          <MainContent />
        </Box>
      </Box>
    </Box>
  )
}
