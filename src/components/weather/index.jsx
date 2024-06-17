import {useEffect, useState} from "react";
import Search from "../search";
import InformationBox from "../information";
import WeatherBackground from "../weather-background/weather-bg";

//b73c87679559234515cc80123d3c53f5

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//http://api.openweathermap.org/geo/1.0/direct?q={search}&limit=5&appid={API key}
export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [cityExist, setCityExist] = useState(false);
    const [multiDayWeather, setMultiDayWeather] = useState(null);
    const [weatherType, setWeatherType] = useState("unknown");

    async function fetchWeatherData(search) {
        setLoading(true);
        try {
            // curr weather data
            const weatherJSON = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b73c87679559234515cc80123d3c53f5`
            );
            const data = await weatherJSON.json();

            // multi day
            const multiDayJSON = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=b73c87679559234515cc80123d3c53f5`
            );

            const data2 = await multiDayJSON.json();

            console.log(data);

            if (data.hasOwnProperty("name") && data2.message == 0) {
                setCityExist(true);
                setWeatherData(data);
                setMultiDayWeather(data2);
                const type = getWeatherType(data);
                setWeatherType(type);
            } else {
                setCityExist(false);
                setWeatherData(null);
                setMultiDayWeather(null);
                setWeatherType("unknown");
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setCityExist(false);
            setWeatherData(null);
            setMultiDayWeather(null);
        } finally {
            setLoading(false);
        }
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    function getWeatherType(weatherJSON) {
        // from categories https://openweathermap.org/weather-conditions
        const id = weatherJSON.weather[0].id;
        if (id >= 200 && id < 300) return "Thunderstorm";
        if (id >= 300 && id < 400) return "Drizzle";
        if (id >= 500 && id < 600) return "Rain";
        if (id >= 600 && id < 700) return "Snow";
        if (id >= 700 && id < 800) {
            switch (id) {
                case 701:
                    return "Mist";
                case 711:
                    return "Smoke";
                case 721:
                    return "Haze";
                case 731:
                    return "Dust (sand/dust whirls)";
                case 741:
                    return "Fog";
                case 751:
                    return "Sand";
                case 761:
                    return "Dust";
                case 762:
                    return "Ash";
                case 771:
                    return "Squall";
                case 781:
                    return "Tornado";
                default:
                    return "Atmosphere";
            }
        }
        if (id === 800) return "Clear";
        if (id > 800 && id < 900) return "Clouds";

        return "Unknown";
    }

    return (
        <div className={`app-container`}>
            <WeatherBackground weatherType={weatherType}/>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {loading ? (
                <div className="informations-container loading">
                    <div className="loading-circle"></div>
                </div>
            ) : !cityExist ? (
                <div className="informations-container invalid-city">
                    <div className="invalid-city-text">Please enter a city</div>
                </div>
            ) : (
                <div className="informations-container valid-city">
                    <InformationBox weatherData={weatherData} />
                </div>
            )}
        </div>
    );
}
