import { JSXElementConstructor, ReactElement, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Login = lazy(() => import("./pages/Login"));
const GetHired = lazy(() => import("./pages/Company/GetHired"));

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
          element: <h1>Admin Page</h1>,
        },
        {
          path: "/company",
          element: <Outlet />,
          children: [
            {
              path: "get-hired",
              element: <GetHired />,
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
