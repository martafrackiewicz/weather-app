import "./Description.scss";

const Description = ({name}) => {
    return (
        <div className="description-container">
            <p className="description-city">{name}</p>
            <p className="description-date">Friday, 16 sierpnia 2021 roku</p>
        </div>
    );
}

export default Description;