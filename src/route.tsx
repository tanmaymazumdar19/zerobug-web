import { JSXElementConstructor, ReactElement, lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));
const Employee = lazy(() => import("./pages/Company/DoHire/Employee"));

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
              path: "employee/hire",
              element: <Employee />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <h1>Login</h1>,
    },
    {
      path: "/signup",
      element: <h1>Signup</h1>,
    },
  ]);

  return publicRoutes;
}
