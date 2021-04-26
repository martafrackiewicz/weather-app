import Description from "../Description/Description"
import IconAndText from "../IconAndText/IconAndText";
import Search from "../Search/Search"
import "./MainSection.scss";


const MainSection = () => {
    return (
        <div className="container main-section-container">
            <Search />
            <Description />
            <IconAndText text={"25\u00b0C"} />
            <div className="conditions-container">
                <IconAndText text={"40%"} />
                <IconAndText text={"20 m/s"} />
            </div>
        </div>
    );
}

export default MainSection;