import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <fieldset>
        <legend> APP 
          </legend>
          <Home />  {/*self closing tag*/}
          <Footer /> {/*self closing tag*/}
            </fieldset>

</div>
  );
}

export default App;
