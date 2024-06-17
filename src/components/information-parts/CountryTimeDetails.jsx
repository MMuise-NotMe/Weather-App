export default function CountryTimeDetails({weatherData}) {
    function getCountryName() {
        let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
        return regionNames.of(`${weatherData.sys.country}`);
    }

    function getCurrentDate() {
        let rawDate = weatherData.dt; // seconds
        let currUTCShift =
            new Date(rawDate * 1000).getTimezoneOffset() * 60 * -1; // seconds for GMT +
        let timezoneShift = weatherData.timezone; // seconds for intended GMT

        return new Date(
            (rawDate - currUTCShift + timezoneShift) * 1000
        ).toLocaleDateString("en-us", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    }

    function getCurrentTime() {
        let rawDate = weatherData.dt; // seconds
        let currUTCShift =
            new Date(rawDate * 1000).getTimezoneOffset() * 60 * -1; // seconds for GMT +
        let timezoneShift = weatherData.timezone; // seconds for intended GMT

        let date = new Date((rawDate - currUTCShift + timezoneShift) * 1000);

        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let period = hours >= 12 ? "PM" : "AM";

        hours = minutes > 31 ? hours + 1 : hours;

        hours = hours % 12;
        hours = hours ? hours : 12;

        // Display formatted date and time
        return hours + ":" + "00" + " " + period;
    }

    return (
        <div className="name-time-area">
            <div className="city-country-name">
                <span className="city-name">{weatherData?.name}<br /></span>
                
                <span className="country-name">{getCountryName()}</span>
            </div>
            <div className="current-date">
                <p>{getCurrentDate()}</p>
                <p>{getCurrentTime()}</p>
            </div>
        </div>
    );
}
