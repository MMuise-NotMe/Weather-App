import "./weather-bg.scss";
import {useEffect, useMemo} from "react";

export default function WeatherBackground({weatherType}) {
    const pictureArray = useMemo(
        () => [
            "../images/clear.jpg",
            "../images/clouds.jpg",
            "../images/drizzle.jpg",
            "../images/rain.jpg",
            "../images/snow.jpg",
            "../images/solid-bg.PNG",
            "../images/thunderstorm.jpg",
            "../images/transparent.png",
        ],
        []
    );

    function getDivClass() {
        if (weatherType === "unknown") {
            return "unknown";
        } else {
            var currWeatherType = weatherType;

            return currWeatherType.toString().toLowerCase();
        }
    }

    function getBodyClass() {
        if (weatherType === "unknown") {
            return "unknown";
        } else {
            return weatherType.toString().toLowerCase();
        }
    }

    useEffect(() => {
        pictureArray.forEach((picture) => {
            const img = new Image();
            img.src = picture;
            console.log(img.src);
        });

        const body = document.body;
        const classList = body.classList;
        const newClass = getBodyClass();

        // Remove any previous weather classes
        classList.remove(...classList);
        // Add the new class
        classList.add(newClass);

        // Cleanup function to remove the class when the component unmounts
        return () => {
            classList.remove(newClass);
        };
    }, [pictureArray, weatherType]);

    return <div className={`full-background ${getDivClass()}`}></div>;
}
