import { JSXElementConstructor, ReactElement, lazy } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

const Layout = lazy(() => import('./components/Layout'))
const Login = lazy(() => import('./pages/Login'))
const GetHired = lazy(() => import('./pages/Company/GetHired'))
const Employee = lazy(() => import('./pages/Company/DoHire/Employee'))
const Admin = lazy(() => import('./pages/SuperAdmin'))
const AboutUs = lazy(() => import('./pages/About'))

export default function PublicRoutes(): ReactElement<any, string | JSXElementConstructor<any>> | null {
  let publicRoutes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/admin',
          element: <Outlet />,
          children: [
            {
              path: '',
              element: <Admin />,
            },
            {
              path: ':companyId',
              element: <GetHired />,
            },
          ],
        },
        {
          path: '/company',
          element: <Outlet />,
          children: [
            {
              path: 'dashboard',
              element: <h1>Dashboard</h1>,
            },
            {
              path: 'employee/get-hired',
              element: <GetHired />,
            },
            {
              path: 'employee/hire',
              element: <Employee />,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/aboutus',
      element: <AboutUs />,
    },
    {},
  ])

  return publicRoutes
}
