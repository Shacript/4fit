// React Modules
import { useEffect } from "react";

// Route Logic
import { useRoutes } from "react-router-dom";
import routes from "./app/route";

function App() {
  useEffect(() => {
    document.body.classList.add("dark-theme");
  }, []);

  const element = useRoutes(routes);

  return (
    <div className="App">
      <main>{element}</main>
    </div>
  );
}

export default App;
