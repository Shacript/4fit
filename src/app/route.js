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
    component: <AuthenticationPage />,
    childComponents: [
      {
        path: "/",
        component: <LoginForm />,
      },
      {
        path: "register",
        component: <RegisterForm />,
      },
    ],
  },
];

export default routes;
