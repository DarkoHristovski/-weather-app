import { useState, useEffect   } from "react";

import axios from "axios";


import CurrenthWeather from "./components/CurrenthWeather/CurrenthWeather";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather";
import Loader from "./components/Loader/Loader";


import "./App.css";

function App() {
 
  const [hourlyWeather, setHourlyWeather] = useState(null)
  const [cityWeather, setCityWeather] = useState(null);
  const [loader, setLoader] = useState(false)


  const apiKey = "627f2f8c91e540f7514a66b15560a3b3"

 

  useEffect(() => {
    setLoader(true)
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
        .then(response => setCityWeather(response.data))
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
        setLoader(false)
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
          )
          .then((response) => {
            setCityWeather(response.data);
          })
          axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
          ).then(weather=> setHourlyWeather(weather.data.list))
          .catch((error) => {
            console.log(error);
          });
         
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);



  
  const cityHandler = (newCity: string) => {
axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${newCity}&appid=${apiKey}`
      )
      .then((res) => {
        const cityLatitude: string = res.data[0].lat.toFixed(3);
        const cityLongitude: string = res.data[0].lon.toFixed(3);
  
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=${apiKey}`
          )
          .then((response) => {
            setCityWeather(response.data);
          })
          axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLatitude}&lon=${cityLongitude}&appid=${apiKey}`
          ).then(weather=> setHourlyWeather(weather.data.list))
          .catch((error) => {
            console.log(error);
          });
      });
};

console.log('hourlyWeather',hourlyWeather)
return (
  <>
  { loader ? (<Loader/>) : ( <>
      <Header enterCity={cityHandler} />
      <main className="module">
      <div className="container">
      <Search enterCity={cityHandler} />
      {cityWeather && <CurrenthWeather currenthWeather={cityWeather} />}
       {hourlyWeather && <HourlyWeather showHorlyWeather={hourlyWeather}  />}
       </div>
      </main>
    </>)}
    </>
  );
}

export default App;
