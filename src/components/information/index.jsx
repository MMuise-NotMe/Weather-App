import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faWind, faCompass, faDroplet} from "@fortawesome/free-solid-svg-icons";
import TemperatureChangeBtn from "../information-parts/TemperatureUnitBtn";
import WeatherDescription from "../information-parts/WeatherDescription";
import CountryTimeDetails from "../information-parts/CountryTimeDetails";
import TemperatureDetails from "../information-parts/TemperatureDetails";
import WindHumidityDetails from "../information-parts/WindHumidityDetails";

library.add(faWind, faCompass, faDroplet);

export default function InformationBox({weatherData}) {
    const [tempUnit, setTempUnit] = useState("celsius");
    const [fade, setFade] = useState(false);

    const handleToggle = () => {
        // for the units
        setFade(true);

        setTimeout(() => {
            setTempUnit(tempUnit === "celsius" ? "fahrenheit" : "celsius");
            setFade(false);
        }, 300);
    };

    function getCurrentSelectedTemp(param) {
        var kelvinTemp = param;
        var celsiusTemp = kelvinTemp - 273.15;
        var fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
        if (tempUnit === "celsius") {
            return celsiusTemp.toFixed(0);
        } else if (tempUnit === "fahrenheit") {
            return fahrenheitTemp.toFixed(0);
        }
    }

    return (
        <div className="information">
            <div className="top-area">
                <TemperatureChangeBtn
                    handleToggle={handleToggle}
                    tempUnit={tempUnit}
                />
            </div>

            <div className="bot-area">
                <div className="bot-left-area">
                    <WeatherDescription weatherData={weatherData} />
                </div>

                <div className="bot-center-area">
                    <CountryTimeDetails weatherData={weatherData} />
                </div>

                <div className="bot-right-area">
                    <div className="temp-wind-area">
                        <TemperatureDetails weatherData={weatherData} tempUnit={tempUnit} fade={fade} getCurrentSelectedTemp={getCurrentSelectedTemp}/>
                        <WindHumidityDetails weatherData={weatherData} faWind={faWind} faCompass={faCompass} faDroplet={faDroplet}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
