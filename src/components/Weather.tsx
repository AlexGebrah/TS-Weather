interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: number;
}

interface WeatherProps {
    weather: WeatherInfo | null;
    message: string;
}

const Weather = ({weather, message}: WeatherProps) => {
    if (message) {
        return (
            <div>{message}</div>
        )
    }

    if(weather){
        return (
            <div>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Tepp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
            </div>
        );
    }

    return null;

};

export default Weather;