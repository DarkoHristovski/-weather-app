import { useState, useEffect } from "react"
import * as date from '../../helperFunctions/dateHelper'
import {switchTemperature} from '../../helperFunctions/temperatureSwitch'

import './WeeklyWeather.css'

type nextWeekForecastProps = {
    nextWeekForecast:[
main:{
    temp:string
}
]
}

const WeeklyWeather = ({nextWeekForecast}:nextWeekForecastProps) =>{
   
    const [weekForecast,setWeekForecast]= useState([]);
    const next5DaysForecast = nextWeekForecast.filter((item, index) => index % 8 === 0);
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [isCelsius, setIsCelsius] = useState(false)

    useEffect(()=>{
  
      const isCelsius = Boolean(localStorage.getItem('isCelsius'))
      setIsCelsius(isCelsius)
  
  
    },[localStorage.getItem('isCelsius')])

 return(
    <section className="weekley-weather-section">
    <div className="title">
    <h3 className="text-center">Forecast 5 days</h3>
    </div>
        <div className="weekly-weather flex space-between">
        {next5DaysForecast.map((x,i)=>{
            return(
                <div className="card" key={i}>
                  <h5>{days[date.GetDay(x.dt_txt)]}</h5>
                 <p>{date.GetDateFromApi(x.dt_txt)}</p>
                <p>{switchTemperature(isCelsius, x.main.temp)}</p>
                
                <p>{x.weather[0].description}</p>
                <div>
            <img src={`http://openweathermap.org/img/w/${x.weather[0].icon}.png`} alt="" />
          </div>
          <div className="bottom flex space-between full-width">
          <p>{x.clouds.all} %</p>
            <p>{x.wind.speed} m/s</p>
            <p>{x.main.humidity} %</p>
          </div>
                </div>
            )
        })}
         </div>
    </section>
 )

   




}


export default WeeklyWeather