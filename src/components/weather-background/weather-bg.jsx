import "./weather-bg.scss";

export default function WeatherBackground({weatherType}) {

    function getDivClass() {
        if (weatherType == "unknown") {
            return "unknown";
        } else {
            var currWeatherType = weatherType
            
            return currWeatherType.toString().toLowerCase();
        }
    }

    return <div className={`full-background ${getDivClass()}`}></div>;
}
