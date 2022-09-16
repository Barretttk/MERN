import "./App.css";
import NavBar from "./Components/NavBar";
import ShowInfo from "./Components/ShowInfo";
import { 
    Routes, 
    Route, 
    Link 
} from "react-router-dom";


function App() {

  return (
    <div className="App container">
<h1> Luck API Walker</h1>

<NavBar 
/>
      <Routes>
        <Route exact path="/:category/:id" element={<ShowInfo></ShowInfo>} />
      </Routes>
    </div>
  );
}

export default App;
