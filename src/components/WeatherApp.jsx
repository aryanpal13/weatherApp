import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function Weatherapp () {

    const [weatherInfo, setWeatherInfo ] = useState({
        city: "",
        feelslike:null,
        temp: null,
        tempMin: null,
        tempMax: null,
        humidity: null,
        weather: "",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign: "center"}}>
            <h2><u> Weather App</u></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}