import logo from "./logo.svg";
import "./styles/App.sass";
import Weather from "./components/weather";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        document.title = "Weather App"
     }, []);
    return (
        <div className="App">
            <h3 className="app-name">Weather</h3>
            <Weather/>
        </div>
    );
}

export default App;
