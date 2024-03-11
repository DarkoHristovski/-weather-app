import { useState } from 'react';
import axios from 'axios';

import './App.css'
import Header from './components/Header/Header';
import Search from './components/Search/Search';

export type City = {
  city:string;
}

function App() {
  const [enteredCity, setEnteredCity] = useState<City>('');

const cityHandler=(newCity:string)=>{
setEnteredCity(newCity) }
/*
  let apiKey= '627f2f8c91e540f7514a66b15560a3b3';
  let url:string=`http://api.openweathermap.org/geo/1.0/direct?q=London&appid=${apiKey}`

  axios.get(url)
  .then(res=>console.log(res.data))

  */

  {console.log(enteredCity)}



  return (
    <>
    <Header/>
    <main>
      <Search enterCity={cityHandler}/>
     
    </main>
    </>
  )
}

export default App
