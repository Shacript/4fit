import React from "react";

const AuthenticationPage = React.lazy(() =>
  import("../pages/AuthenticationPage/AuthenticationPage")
);
const LoginForm = React.lazy(() =>
  import("../components/Authentication/LoginForm/LoginForm")
);
const RegisterForm = React.lazy(() =>
  import("../components/Authentication/RegisterForm/RegisterForm")
);

const LayoutUserPage = React.lazy(() =>
  import("../pages/UserPage/LayoutUserPage")
);

const routes = [
  {
    path: "/",
    element: <AuthenticationPage />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutUserPage />,
    children: [
      {
        path: "/dashboard",
        element: <h1>Still Belive</h1>,
      },
    ],
  },
];

export default routes;
