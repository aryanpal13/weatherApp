import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./styles/SearchBox.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';
// import SendIcon from '@mui/icons-material/Send';

export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9d141b9ef766c5679becadfe93615311";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            humidity: jsonResponse.main.humidity,
            minTemp: jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
        } catch (err) {
            throw err;
            
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city}
                onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && 
                <div className="center-alert">
                    <Alert variant="outlined" severity="info">
                    No such place exists!
                    </Alert>
                </div>
                }
            </form>
        </div>
    );
}