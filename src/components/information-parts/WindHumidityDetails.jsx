import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WindHumidityDetails({
    weatherData,
    faWind,
    faCompass,
    faDroplet,
}) {
    function getWindDirection() {
        var rawWindData = weatherData.wind.deg;

        // https://stackoverflow.com/a/57366763
        // edited abit cause i didnt need it to be that exact
        let compassSector = [
            "North",
            "NEast",
            "East",
            "SEast",
            "South",
            "SWest",
            "West",
            "NWest",
            "North",
        ];

        return compassSector[(rawWindData / 45).toFixed(0)];
    }

    return (
        <div className="wind-humid-data">
            <div className="wind-speed-con">
                <FontAwesomeIcon icon={faWind} />
                <span className="wind-speed">
                    {weatherData.wind.speed.toFixed(2)}m/s
                </span>
            </div>
            <div className="wind-direc-con">
                <FontAwesomeIcon icon={faCompass} />
                <span className="wind-direc-symbol">{getWindDirection()}</span>
            </div>
            <div className="humid-level-con">
                <FontAwesomeIcon icon={faDroplet} />
                <span className="humidity-num">
                    {weatherData.main.humidity}%
                </span>
            </div>
        </div>
    );
}
