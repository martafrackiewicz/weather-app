import sun from "../../icons/sun.png";

const IconAndText = ({text}) => {
    return (
        <div className="icon-and-text-container">
            <img src={sun} className="icon" alt="sun"></img>
            <p className="text">{text}</p>
        </div>
    );
}

export default IconAndText;