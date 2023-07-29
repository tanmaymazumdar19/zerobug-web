import { Box, Typography, ButtonBase, CircularProgress } from '@mui/material'

import { useDispatch } from 'react-redux'
import { storeLoginToken } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { useAdminLoginMutation, useCompanyLoginMutation } from '../../redux/api/api'
import { useState } from 'react'

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

function AdminLoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [tryAdminLogin] = useAdminLoginMutation()
  const [tryCompanyLogin] = useCompanyLoginMutation()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<string>()
  const [loader, setLoader] = useState<boolean>(false)

  async function handleSubmit() {
    setLoader(true)
    setError('')
    const res: any =
      email === 'anshul@yopmail.com'
        ? await tryAdminLogin({ body: { email, password } }).unwrap()
        : await tryCompanyLogin({ body: { email, password } }).unwrap()
    if (res?.status === 200 || res?.status === true) {
      dispatch(
        storeLoginToken({
          token: res?.data.authToken,
          isAdmin: email === 'anshul@yopmail.com',
        }),
      )
      setLoader(false)
      navigate('/')
    } else if (res?.status === false && res?.message) {
      setLoader(false)
      setError(res?.message)
    } else {
      setLoader(false)
      navigate('/')
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          width: '100%',
          height: '100vh',
          placeItems: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 350,
              height: 350,
              borderRadius: 1000,
              bgcolor: '#F11A7B',
              filter: 'blur(145px)',
            }}
          />
          <Box
            sx={{
              width: 350,
              height: 350,
              borderRadius: 1000,
              bgcolor: '#F2EE9D',
              filter: 'blur(145px)',
            }}
          />
          <Box
            sx={{
              width: 350,
              height: 350,
              borderRadius: 1000,
              bgcolor: '#4682A9',
              filter: 'blur(145px)',
            }}
          />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <Typography sx={{ fontSize: '32px', fontWeight: 300 }}>Welcome to Talent Pool</Typography>

          {error && (
            <Box sx={{ bgcolor: '#ff00006e', p: '8px 16px', borderRadius: '8px' }}>
              <Typography>{error}</Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              onChange={(event: any) => setEmail(event.target.value)}
              type='email'
              placeholder='john@example.com'
              style={{
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                background: '#ffffff94',
                outline: 'none',
              }}
              onBlur={(e: any) => {
                if (!emailRegex.test(e.target.value)) {
                  setError('Please enter a Valid Email !!')
                } else {
                  setError('')
                }
              }}
            />
            <input
              onChange={(event: any) => setPassword(event.target.value)}
              type='password'
              placeholder='Password'
              style={{
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                background: '#ffffff94',
                outline: 'none',
              }}
            />
          </Box>

          <ButtonBase
            sx={{
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              border: 'none',
              background: loader || !email || !password ? '#003bff5e' : '#003bff94',
              color: '#fff',
              cursor: 'pointer',
              ':hover': { background: '#003bffb8' },
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
            disabled={loader || !email || !password}
            onClick={handleSubmit}
          >
            {loader && <CircularProgress sx={{ color: '#fff', width: `20px !important`, height: `20px !important` }} />}
            Login
          </ButtonBase>
        </Box>
      </Box>
    </>
  )
}

export default AdminLoginPage
