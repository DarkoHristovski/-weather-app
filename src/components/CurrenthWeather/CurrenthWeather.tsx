import './currenth-weather.css'
import { useEffect, useState } from 'react'
import * as weather from '../../helperFunctions/dateHelper'
import {switchTemperature} from '../../helperFunctions/temperatureSwitch'



type CurrenthWeatherProps = {
  currenthWeather: {
    name: string;
    main: {
      temp: number,
      feels_like:number,
      humidity:number
    };
    weather:[{
        main:string,
        description:string,
        icon:string
    }],
    wind:{
        speed:string
    }
    clouds:{
        all:number
    },
    sys: {
      "country": string,
    },
    visibility:number

  };
};

const CurrenthWeather = ({ currenthWeather }: CurrenthWeatherProps) => {

  const [isCelsius, setIsCelsius] = useState(false)

  useEffect(()=>{

    const isCelsius = Boolean(localStorage.getItem('isCelsius'))
    setIsCelsius(isCelsius)


  },[localStorage.getItem('isCelsius')])

  return (
    <section className='current-weather-section module'>
      <div className="current-weather-card">
        <div className="current-weather">
          <div className="title text-center">
        <h3>Current Weather</h3>
        <p>{weather.dateNow()}</p>
        </div>
        <div className="flex card flex-column align-center space-between current-weather-content">
          <div className='text-center currenth-weather-part'>
          <div className="city">
          <svg
  stroke="currentColor"
  fill="currentColor"
  strokeWidth={0}
  viewBox="0 0 24 24"
  className="text-3xl"
  height="30px"
  width="30px  "
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" d="M0 0h24v24H0V0z" />
  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
  <circle cx={12} cy={9} r="2.5" />
</svg>
  <p>
          {currenthWeather.name}, <span>{currenthWeather.sys.country}</span></p>
          </div>
          <div className='text-center temperature'>
            <h4>{switchTemperature(isCelsius, currenthWeather.main.temp)}</h4>
            <p>{currenthWeather.weather[0].main}</p>
          </div>
          <div className='img-wrapper'>
            <img src={`http://openweathermap.org/img/w/${currenthWeather.weather[0].icon}.png`} alt="" />
          </div>
          <p className='feel-temperature'>feels like: {switchTemperature(isCelsius, currenthWeather.main.feels_like)}</p>
          </div>
        <div className="flex full-width  space-aroud">
            <div className='currenth-weather-part'><p>
              Visibility</p>
            <h4>{currenthWeather.visibility / 1000} km</h4>
            </div>
            <div className='currenth-weather-part'><p>Wind speed</p>
            <h4>{currenthWeather.wind.speed} m/s</h4>
            </div>
            <div className='currenth-weather-part'><p>Clouds</p>
            <h4>{currenthWeather.clouds.all} %</h4>
            </div>
            <div className='currenth-weather-part'><p>Humidity</p>
            <h4>{currenthWeather.main.humidity} % </h4>
            </div>
        </div>
        </div>
        </div>
        </div>
      </section>
  );
};

export default CurrenthWeather;
