import Description from "../Description/Description"
import { useState } from 'react';
import IconAndText from "../IconAndText/IconAndText";
import Search from "../Search/Search"
import "./MainSection.scss";


const MainSection = () => {

    const [weather, setWeather] = useState({
        name: "",
        description: "",
        temperature: "",
        humidity: "",
        wind: ""
    });

    const [dataOk, setDataOk] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const APIkey = process.env.REACT_APP_API_KEY;

    const kelvinToCelsius = (celsius) => {
        return celsius - 273.15;
    }

    const search = (searchedTerm) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedTerm}&appid=${APIkey}`;
        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    setDataOk(false)
                    res.status === 404 ? setErrorMessage("Place not found") : setErrorMessage("The field cannot be empty")
                    throw Error(res.statusText)
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                setWeather({
                    name: data.name,
                    description: data.weather.main,
                    temperature: Math.round(kelvinToCelsius(data.main.temp)),
                    humidity: data.main.humidity,
                    wind: Math.round(data.wind.speed)
                })
                setDataOk(true);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container main-section-container">
            <Search search={search} />
            {dataOk ?
                <div className="data-container">
                    <Description name={weather.name} />
                    <IconAndText text={`${weather.temperature}\u00b0C`} />
                    <div className="conditions-container">
                        <IconAndText text={`${weather.humidity}%`} />
                        <IconAndText text={`${weather.wind} m/s`} />
                    </div>
                </div>
                : <p>{errorMessage}</p>}
        </div>
    );
}

export default MainSection;