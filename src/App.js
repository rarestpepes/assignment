import './App.css';
import AllCountries from "./comps/countries/AllCountries";
import Toolbar from "./comps/toolbar/Toolbar";

function App() {

  return (
    <div className="App">
        <Toolbar/>
        <AllCountries/>
    </div>
  );
}

export default App;
