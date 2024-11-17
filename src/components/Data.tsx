import Weather from "./Weather.tsx";
import Form from "./Form.tsx";
import {useState} from "react";
import {api_key, base_url} from "../units/constant.ts";

interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}

const Data= () => {
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
    const [message, setMessage] = useState<string>('Enter city name');
    const getWeather = (city: string): void => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                setWeatherInfo({
                    country:data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                })
                setMessage('')
            })
            .catch(e => {
                console.log(e);
                setWeatherInfo(null);
                setMessage('Enter correct city name');
            })
    }

    return (
        <div>
            <Form getWeather ={getWeather}/>
            <Weather message={message} weather={weatherInfo}/>
        </div>
    );
};

export default Data;