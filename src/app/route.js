import HomePage from "../pages/HomePage/HomePage";
import CreateTaskPage from "../pages/CreateTaskPage/CreateTaskPage";
import ViewTaskPage from "../pages/ViewTaskPage/ViewTaskPage";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/create_task",
    component: <CreateTaskPage />,
  },
  {
    path: "/view_task/:id",
    component: <ViewTaskPage />,
  },
];

export default routes;
