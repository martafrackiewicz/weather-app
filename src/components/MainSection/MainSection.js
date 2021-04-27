import Description from "../Description/Description"
import { useEffect, useState } from 'react';
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

    const [searchedCity, setSearchedCity] = useState("warsaw");

    const APIkey = process.env.REACT_APP_API_KEY;

    const kelvinToCelsius = (celsius) => {
        return celsius-273.15;
    }

    useEffect(() => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${APIkey}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setWeather({
                    name: data.name,
                    description: data.weather.main,
                    temperature: Math.round(kelvinToCelsius(data.main.temp)),
                    humidity: data.main.humidity,
                    wind: Math.round(data.wind.speed)
                })
            });
    }, [searchedCity, APIkey]);

    return (
        <div className="container main-section-container">
            <Search />
            <div className="data-container">
                <Description name={weather.name}/>
                <IconAndText text={`${weather.temperature}\u00b0C`} />
                <div className="conditions-container">
                    <IconAndText text={`${weather.humidity}%`} />
                    <IconAndText text={`${weather.wind} m/s`} />
                </div>
            </div>
        </div>
    );
}

export default MainSection;