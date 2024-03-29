import WeeklyWeather from "../WeeklyWeather/WeeklyWeather";
import "./hourlyWeather.css";
import {switchTemperature} from '../../helperFunctions/temperatureSwitch'
import { useState, useEffect } from "react";

type horlyWeatherProps = {
  showHorlyWeather: [
    dt: Date,
    dt_txt: string,
    main: {
      temp: number;
    },
    weather: {
      icon: string;
    }
  ];
};



const HourlyWeather = ({ showHorlyWeather }: horlyWeatherProps) => {
  const todayDate = new Date();
  const todayDay = todayDate.getDate();
  const todayWeather = [];
  const nextDaysWeather = [];

  for (let i = 0; i < showHorlyWeather?.length; i++) {
    const datesFromApi = showHorlyWeather[i].dt;
    //{console.log(showHorlyWeather)}
    const formatedDatesFromApi = new Date(datesFromApi * 1000);
    const daysFromApi = formatedDatesFromApi.getDate();
    if (daysFromApi === todayDay) {
      todayWeather.push(showHorlyWeather[i]);
    } else nextDaysWeather.push(showHorlyWeather[i]);
  }

  const [isCelsius, setIsCelsius] = useState(false)

  useEffect(()=>{

    const isCelsius = Boolean(localStorage.getItem('isCelsius'))
    setIsCelsius(isCelsius)


  },[localStorage.getItem('isCelsius')])

  return (

  <div className="hourly-weather-section">
      {todayWeather.length > 0  ?(
      <div>
        <div className="title">
      <h3 className="text-center">Today forecasts</h3>
      <p className="text-center">{todayWeather.length} available forecasts</p>
      </div>
      <div className="today-weather flex space-between">
        {todayWeather.map((x, i) => {
          const formatedDatesFromApi = new Date(x.dt * 1000);
          const hoursFromApi = formatedDatesFromApi.getHours();
          const minutesFromApi = formatedDatesFromApi.getMinutes();
          return (
            <div key={i} className="card">
              <p>
                {hoursFromApi}:{minutesFromApi}0
              </p>
              <div className="img-wrapper">
                <img
                  src={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`}
                  alt=""
                />
              </div>
              <p>{switchTemperature(isCelsius, x.main.temp)}</p>
            </div>
          );
        })}
      </div>
      </div>):(<p></p>)
    }
        <WeeklyWeather nextWeekForecast={nextDaysWeather} />
    </div>
      
  );
};

export default HourlyWeather;
