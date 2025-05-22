import clear from "../assets/Images/Clear.png"
import clearnight from "../assets/Images/Clearnight.png"
import cloudy from "../assets/Images/Cloudy.png"
import drizzle from "../assets/Images/Drizzle.png"
import thunderstorm from "../assets/Images/Thunderstorm.png"
import fog from "../assets/Images/Fog.png"
import haze from "../assets/Images/Haze.png"
import heavyrain from "../assets/Images/Heavyrain.png"
import partlycloudy from "../assets/Images/Partlycloudy.png"
import partlycloudynight from "../assets/Images/Partlycloudy(night).png"
import rainy from "../assets/Images/Rain.png"
import sleet from "../assets/Images/Sleet.png"
import snowy from "../assets/Images/Snow.png"
import sunrise from "../assets/Images/Sunrise.png"
import sunset from "../assets/Images/Sunset.png"
import windy from "../assets/Images/Windy.png"
import drizzlenight from "../assets/Images/Drizzle(night).png"
import loadingGif from "../assets/Images/loading.gif"
import { useState, useEffect } from "react";


const WeatherApp = () => {
   const [data, setData] = useState({});
   const [location, setLocation] = useState("");
   const [loading, setLoading] = useState(false);
   const api_Key = import.meta.env.VITE_API_KEY;
   useEffect(() => {
    const fetchDefaultWeather = async () => {
        setLoading(true)
        const defaultLocation = "New Jersey"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_Key}`;
        const res = await fetch(url)
        const defaultData = await res.json()
        setData(defaultData)
        setLoading(false)
    }
    fetchDefaultWeather()
}, [])
   const handleInputChange = (e) => {
    setLocation(e.target.value)
   }
    
   const search = async () => {
    if (location.trim() !== "") {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_Key}`;
        const res = await fetch(url)
        const searchData = await res.json()
        if (searchData.cod !== 200) {
            setData({notFound: true})
        } else {
        setData(searchData)
        setLocation('')
        }
        setLoading(false)
    }
   }
   const handleKeyDownn = (e) => {
    if (e.key === "Enter") {
      search();
    }
  }
  const weatherImages = {
    Clear: clear,
    Clouds: cloudy,
    Rain: rainy,
    Snow: snowy,
    Thunderstorm: thunderstorm,
    Haze: haze,
    Fog: fog,
    drizzle: drizzle,
    heavyrain: heavyrain,
    drizzlenight: drizzlenight,
    partlycloudy: partlycloudy,
    partlycloudynight: partlycloudynight,
    sleet: sleet,
    sunrise: sunrise,
    sunset: sunset,
    windy: windy,
    clearnight: clearnight,  
  }
  const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null
  const backgroundImages = {
    Clear: "linear-gradient(to right, #87CEEB, #4682B4)", // Sky blue to steel blue
    Clouds: "linear-gradient(to right, #B8B8B8, #696969)", // Light gray to dark gray
    Rain: "linear-gradient(to right, #4682B4, #000080)", // Steel blue to navy
    Snow: "linear-gradient(to right, #F0F8FF, #B0E0E6)", // Alice blue to powder blue
    Thunderstorm: "linear-gradient(to right, #2F4F4F, #191970)", // Dark slate gray to midnight blue
    Haze: "linear-gradient(to right, #FFE4B5, #DEB887)", // Moccasin to burly wood
    Fog: "linear-gradient(to right, #D3D3D3, #A9A9A9)", // Light gray to dark gray
    drizzle: "linear-gradient(to right, #87CEEB, #6495ED)", // Sky blue to cornflower blue
    heavyrain: "linear-gradient(to right, #4169E1, #000080)", // Royal blue to navy
    drizzlenight: "linear-gradient(to right, #191970, #000033)", // Midnight blue to dark navy
    partlycloudy: "linear-gradient(to right, #87CEEB, #D3D3D3)", // Sky blue to light gray
    partlycloudynight: "linear-gradient(to right, #2F4F4F, #483D8B)", // Dark slate gray to dark slate blue
    sleet: "linear-gradient(to right, #B0C4DE, #708090)", // Light steel blue to slate gray
    sunrise: "linear-gradient(to right, #FF7F50, #FFA07A)", // Coral to light salmon
    sunset: "linear-gradient(to right, #FF4500, #FF8C00)", // Orange red to dark orange
    windy: "linear-gradient(to right, #E0FFFF, #87CEEB)", // Light cyan to sky blue
    clearnight: "linear-gradient(to right, #191970, #000080)", // Midnight blue to navy
  }
  const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : 'linear-gradient(to right, #87CEEB, #4682B4)';
  
  
  
  return (
    <div className="container" style={{backgroundImage}}>
        <div className="weather-app" style={{backgroundImage: backgroundImage && backgroundImage.replace ? backgroundImage.replace("to right", "to top") : null,

        }}>
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location"
                    value={location} onChange={handleInputChange}
                    onKeyDown={handleKeyDownn}
                    />
                    <i className="fa-solid fa-magnifying-glass"
                    onClick={search}></i>
                </div>
            </div>
            {loading ? (<img className="loader" src={loadingGif} alt="loading" />) : data.notFound ? (<div className="not-found">Not Found</div>) : (
                <>
                <div className="weather">
                <img src={weatherImage} alt="clear" />
                <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
                <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>                
            </div>
            <div className="weather-date">
                <p>{data.dt ? new Date(data.dt * 1000).toLocaleDateString("en-US", {weekday: "long", month: "long",day: "numeric", year: "numeric" }) : null}</p>
            </div> 
            <div className="weather-data">
                <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">{data.main ? data.main.humidity : null}%</div>
                </div>
                <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">{data.wind ? data.wind.speed : null} km/h</div>
                </div>
            </div>       </>
            )}
                         
        </div>
    </div>
  )
}

export default WeatherApp