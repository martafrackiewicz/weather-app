import "./Description.scss";

const Description = ({name}) => {

    const date = new Date();
    const dateLocale = new Date().toLocaleDateString();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();

    return (
        <div className="description-container">
            <p className="description-city">{name}</p>
            <p className="description-date">{days[dayIndex]}, {dateLocale}</p>
        </div>
    );
}

export default Description;