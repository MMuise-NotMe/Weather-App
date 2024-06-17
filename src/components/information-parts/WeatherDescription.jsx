export default function WeatherDescription({weatherData}) {
    function getWeatherPic() {
        return `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`;
    }

    return (
        <div className="icon-desc-area">
            <div className="img-con">
                <img src={getWeatherPic()} alt="weather icon" />
            </div>

            <p className="sky-desc">{weatherData?.weather[0].description}</p>
        </div>
    );
}
