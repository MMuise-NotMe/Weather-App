export default function TemperatureDetails({weatherData, tempUnit, fade, getCurrentSelectedTemp}) {
    function getCirclePosition() {
        // get max temp
        const maxTemp = getCurrentSelectedTemp(weatherData.main.temp_max);
        // get min temp
        const minTemp = getCurrentSelectedTemp(weatherData.main.temp_min);
        // get curr temp
        const currentTemp = getCurrentSelectedTemp(weatherData.main.temp);

        const tempRange = maxTemp - minTemp;

        var position;

        if (tempRange == 0) {
            position = 0.5;
        } else {
            position = (currentTemp - minTemp) / tempRange;
        }

        return position * 84;
    }

    function getCurrentTempUnit() {
        if (tempUnit === "celsius") {
            return "°C";
        } else if (tempUnit === "fahrenheit") {
            return "°F";
        }
    }

    return (
        <div className="curr-temp-data">
            <div className="current-temp">
                <span
                    className={`current-temp-num temp-change ${
                        fade ? "fade" : ""
                    }`}
                >
                    {getCurrentSelectedTemp(weatherData.main.temp)}
                </span>
                <span
                    className={`current-temp-unit temp-change ${
                        fade ? "fade" : ""
                    }`}
                >
                    {getCurrentTempUnit()}
                </span>
            </div>
            <div className="temp-area">
                <p className={`min-temp temp-change ${fade ? "fade" : ""}`}>
                    {getCurrentSelectedTemp(weatherData.main.temp_min)}
                    {getCurrentTempUnit()}
                </p>
                <div className="temp-divider">
                    <div
                        className="divider-circle"
                        style={{
                            left: `${getCirclePosition()}%`,
                        }}
                    ></div>
                </div>
                <p className={`max-temp temp-change ${fade ? "fade" : ""}`}>
                    {getCurrentSelectedTemp(weatherData.main.temp_max)}
                    {getCurrentTempUnit()}
                </p>
            </div>
        </div>
    );
}
