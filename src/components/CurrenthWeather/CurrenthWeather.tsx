import './currenth-weather.css'

type CurrenthWeatherPrope = {
  currenthWeather: {
    name: string;
    main: {
      temp: number,
      feels_like:string,
      humidity:string
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
    }
  };
};

const CurrenthWeather = ({ currenthWeather }: CurrenthWeatherPrope) => {
  console.log();
  return (
    <>
    <div className='container'>
      <div className="current-weather-card">
        <div className="current-weather">
        <h3>Current Weather</h3>
        <div className="flex space-between">
          <div className="city">
            <h4>{currenthWeather.name}</h4>
            <p>Today Date</p>
          </div>
          <div>
            <h4>{currenthWeather.main.temp}</h4>
            <p>{currenthWeather.weather[0].main}</p>
          </div>
          <div>
            <img src={`http://openweathermap.org/img/w/${currenthWeather.weather[0].icon}.png`} alt="" />
          </div>
          </div>
        </div>
        <div className="condition">
        <h3>Air Conditions</h3>
        <div className="flex space-between">
            <div><p>Real Feel</p>
            <h4>{currenthWeather.main.feels_like}</h4>
            </div>
            <div><p>Wind</p>
            <h4>{currenthWeather.wind.speed} m/s</h4>
            </div>
            <div><p>Clouds</p>
            <h4>{currenthWeather.clouds.all} %</h4>
            </div>
            <div><p>Humidity</p>
            <h4>{currenthWeather.main.humidity} %</h4>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CurrenthWeather;
