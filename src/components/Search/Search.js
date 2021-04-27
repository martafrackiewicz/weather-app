import "./Search.scss";

const Search = () => {
    return (
        <div className="search-bar">
            <form className="search-bar-form">
                <input type="text" placeholder="Search.." name="search" />
            </form>
        </div>
    );
}

export default Search;