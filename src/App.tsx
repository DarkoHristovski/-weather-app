
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import CurrenthWeather from  './components/CurrenthWeather/CurrenthWeather'
import Header from './components/Header/Header';
import Search from './components/Search/Search';

export type City = {
  city:string;
}
 type Longitude = {
  longitude:string;
}

 type Latitude = {
  latitude:string;
}

function App() {
  const [cityName, setCityName] = useState<City>(null);
  const [cityLongitude, setCityLongitude] = useState<Longitude>(null);
  const [cityLatitude, setCityLatitude] = useState<Latitude>(null);
  const [cityWeather, setCityWeather] = useState(null)




  const apiKey:string= '627f2f8c91e540f7514a66b15560a3b3';
  const url:string=`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`
  const cityWeatherUrl:string=`https://api.openweathermap.org/data/2.5/weather?lat=${cityLatitude}&lon=${cityLongitude}&appid=${apiKey}`



    const cityHandler=(newCity:string)=>{
      setCityName(newCity) 
     
  axios.get(url)
    .then((res)=>
   { setCityLatitude(res.data[0].lat.toFixed(3));
    setCityLongitude(res.data[0].lon.toFixed(3));}
    
    )
  
    console.log(cityWeatherUrl)
    axios.get(cityWeatherUrl)
    .then(res=>setCityWeather(res.data))

  }


 
 

console.log(cityWeather)

  return (
    <>
    <Header/>
    <main>
      <Search enterCity={cityHandler}/>
     { cityWeather && <CurrenthWeather currenthWeather = {cityWeather} />}
     
    </main>
    </>
  )
}

export default App
