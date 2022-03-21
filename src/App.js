import Navbar from "./components/navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import routes from "./app/route";

function App() {
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
