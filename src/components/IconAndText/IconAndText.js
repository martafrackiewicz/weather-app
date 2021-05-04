import "./IconAndText.scss";
import sun from "../../icons/sun.png";
import raindrop from "../../icons/raindrop.png";
import wind from "../../icons/wind.png";
import cloudAndSun from "../../icons/cloud-and-sun.png";
import cloud from "../../icons/cloud.png";
import rain from "../../icons/rain.png";
import rainAndSun from "../../icons/rain-and-sun.png";
import snow from "../../icons/snow.png";
import fog from "../../icons/fog.png";
import storm from "../../icons/heavy-storm.png";

const IconAndText = ({ text, icon, details }) => {

    let iconName;

    switch (icon) {
        case "Clear":
            iconName = sun;
            break;
        case "Clouds":
            if (details === "few clouds" || details === "scattered clouds") {
                iconName = cloudAndSun;
            } else {
                iconName = cloud;
            }
            break;
        case "Rain":
            iconName = rain;
            break;
        case "Drizzle":
            iconName = rainAndSun;
            break;
        case "Thunderstorm":
            iconName = storm;
            break;
        case "Snow":
            iconName = snow;
            break;
        case "Mist":
        case "Haze":
        case "Fog":
        case "Smoke":
        case "Dust":
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
            iconName = fog;
            break;
        case "humidity":
            iconName = raindrop;
            break;
        case "wind":
            iconName = wind;
            break;
        default:
            iconName = cloud;
            break;
    }

    return (
        <div className="icon-and-text-container">
            <img src={iconName} className="icon" alt="sun"></img>
            <p className="text">{text}</p>
        </div>
    );
}

export default IconAndText;