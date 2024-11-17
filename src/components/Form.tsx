interface FormProps {
    getWeather: (city: string) => void;
}

const Form = ({getWeather}:FormProps) => {
    const getCity = (e: any) => {
        e.preventDefault();
        const city: string = e.target.city.value.trim();
        getWeather(city);
    }
    return (
        <form onSubmit={getCity}>
            <input type="text" name="city"/>
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;