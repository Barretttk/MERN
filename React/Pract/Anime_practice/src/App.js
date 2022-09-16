import "./App.css";
import Darkly from "./Darkly.css";
import NavBar from "./Components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./Components/Search";
import Monga from "./Components/Monga";
import Anime from "./Components/Anime";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <h1>Anime World</h1>

      <NavBar />
      {/* ====================== */}
      <Routes>
        <Route exact path="/" element={<h1>Under Construction</h1>} />

        <Route exact path="/Register" element={<Register />} />

        <Route exact path="/search" element={<Search />} />

        {/* Perams in link */}
        <Route exact path="/search/:search_request" element={<Search />} />

        <Route exact path="/Anime" element={<Anime />} />

        {/* Multiple elements within a path */}
        <Route path="/Monga" element={
            <>
              <Search /> <Monga />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
