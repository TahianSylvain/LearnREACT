import logo from './logo.svg';
import { Jet, Clock } from './Components/InJet'
// import { shop } from "./Components/Listing.json"
import './App.css';


function App() {
  const shop = "AlasoraGrosFound"

  return (
    <div className="App">
      <header className="App-header">
        <Clock></Clock>
        <img src={logo} className="App-logo" 
          alt="logo" />
        <Jet>{shop}</Jet>
      </header>
    </div>
  );
}

export default App;
