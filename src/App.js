import "./App.css";
import { Base } from "./Components/WeatherApp/Base";
import { WeatherApp } from "./Components/WeatherApp/WeatherApp";

function App() {
  return (
  <div className="App">
    <WeatherApp/>
    <Base/>
  </div>
  );
  
}

export default App;
