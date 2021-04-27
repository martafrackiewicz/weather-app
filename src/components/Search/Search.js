import "./Search.scss";

const Search = ({ search }) => {

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            search(e.target.value);
            e.target.value = "";
            e.preventDefault();
        }
    }

    return (
        <div className="search-bar">
            <form className="search-bar-form">
                <input type="text" placeholder="Search..." onKeyDown={e => handleEnter(e)} />
            </form>
        </div>
    );
}

export default Search;