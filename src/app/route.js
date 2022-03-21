import HomePage from "../pages/HomePage/HomePage";
import CreateTaskPage from "../pages/CreateTaskPage/CreateTaskPage";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/create_task",
    component: <CreateTaskPage />
  }
];

export default routes;
