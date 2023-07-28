import { JSXElementConstructor, ReactElement, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Login = lazy(() => import("./pages/Login"));
const GetHired = lazy(() => import("./pages/Company/GetHired"));
const Employee = lazy(() => import("./pages/Company/DoHire/Employee"));
const Admin = lazy(() => import("./pages/SuperAdmin"));

export default function PublicRoutes(): ReactElement<
  any,
  string | JSXElementConstructor<any>
> | null {
  let publicRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/company",
          element: <Outlet />,
          children: [
            {
              path: "dashboard",
              element: <h1>Dashboard</h1>,
            },
            {
              path: "employee/get-hired",
              element: <GetHired />,
            },
            {
              path: "employee/hire",
              element: <Employee />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <h1>Signup</h1>,
    },
  ]);

  return publicRoutes;
}
