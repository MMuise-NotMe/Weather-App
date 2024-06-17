export default function Search({search, setSearch, handleSearch}) {
    function onTyping(param) {
        setSearch(param);
    }

    function onKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="search-engine">
            <div className="search-area">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Search City"
                    name="search"
                    value={search}
                    onChange={(event) => onTyping(event.target.value)}
                    onKeyDown={onKeyPress}
                />
            </div>
            {/* <div className="search-btn-con">
                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div> */}
        </div>
    );
}
