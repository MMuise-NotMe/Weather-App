import "./weather-bg.scss";
import { useEffect, useMemo } from "react";

export default function WeatherBackground({weatherType}) {

    const pictureArray = useMemo(() => [
        "../images/clear.jpg",
        "../images/clouds.jpg",
        "../images/drizzle.jpg",
        "../images/rain.jpg",
        "../images/snow.jpg",
        "../images/solid-bg.PNG",
        "../images/thunderstorm.jpg",
        "../images/transparent.png"
    ], []);

    function getDivClass() {
        if (weatherType === "unknown") {
            return "unknown";
        } else {
            var currWeatherType = weatherType
            
            return currWeatherType.toString().toLowerCase();
        }
    }

    useEffect(() => {
        pictureArray.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });
    }, [pictureArray]);

    return <div className={`full-background ${getDivClass()}`}></div>;
}
