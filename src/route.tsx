import { JSXElementConstructor, ReactElement, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));

const Login = lazy(() => import("./Pages/Login/index"));

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
          element: <h1>Company Page</h1>,
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
