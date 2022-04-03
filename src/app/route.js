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
const DashboardPage = React.lazy(() =>
  import("../pages/UserPage/DashboardPage")
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
        element: <DashboardPage />,
      },
      {
        path: "/tasks",
        element: <h1>Test Page</h1>,
      },
      {
        path: "/create_task",
        element: <h1>Test Page</h1>,
      },
      {
        path: "/records",
        element: <h1>Test Page</h1>,
      },
      {
        path: "/settings",
        element: <h1>Test Page</h1>,
      }
    ],
  },
];

export default routes;
