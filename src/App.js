// React Modules
import { Suspense, useEffect } from "react";

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
      <Suspense fallback={<h1>Loading...</h1>}>
        <main>{element}</main>
      </Suspense>
    </div>
  );
}

export default App;
