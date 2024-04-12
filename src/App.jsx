import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./assets/pages/Home.jsx";
import { Error } from "./assets/pages/Error.jsx";
import { Game } from "./assets/pages/Game.jsx";
import { Category } from "./assets/pages/Category.jsx";
import { Provider } from "./assets/components/context/Provider.jsx";
import { Rules } from "./assets/pages/Rules.jsx";

function App() {
  return (
    <Provider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/play" element={<Game />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
