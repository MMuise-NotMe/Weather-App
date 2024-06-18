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
                    <div className="celsius-btn">Celsius</div>
                    <div className="fahrenheit-btn">Fahrenheit</div>
                </button>
            </div>
        </div>
    );
}
