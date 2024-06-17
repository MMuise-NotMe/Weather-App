export default function TemperatureChangeBtn({handleToggle, tempUnit}) {
    return (
        <div className="unit-change-area">
            <div className="btn-con">
                <button
                    className={`unit-change-btn ${
                        tempUnit === "celsius"
                            ? "celsius-toggle"
                            : "fahrenheit-toggle"
                    }`}
                    onClick={handleToggle}
                >
                    <p className="celsius-btn">Celsius</p>
                    <p className="fahrenheit-btn">Fahrenheit</p>
                </button>
            </div>
        </div>
    );
}
