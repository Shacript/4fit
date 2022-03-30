// React Modules
import { useEffect } from "react";

// Route Logic
import { Routes, Route } from "react-router-dom";
import routes from "./app/route";

function App() {
  useEffect(() => {
    document.body.classList.add("dark-theme");
  }, []);

  return (
    <div className="App">
      <main>
        <Routes>
          {routes.map(({ path, component, childComponents }, route_key) => (
            <Route path={path} element={component} key={route_key}>
              {childComponents.map((child, childRoute_key) => (
                <Route
                  path={child.path}
                  element={child.component}
                  key={childRoute_key}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
