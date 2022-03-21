// React Modules
import { useEffect } from "react";

// Route Logic
import { Routes, Route } from "react-router-dom";
import routes from "./app/route";

// Components
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    document.body.classList.add("dark-theme");
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          {routes.map(({ path, component }, route_key) => (
            <Route path={path} element={component} key={route_key} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
