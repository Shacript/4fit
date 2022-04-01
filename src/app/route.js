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
];

export default routes;
