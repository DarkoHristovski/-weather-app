

import './App.css'

function App() {

  let apiKey= '627f2f8c91e540f7514a66b15560a3b3';
  let url:string=`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`

  return (
    <>
    { console.log(url)}
    </>
  )
}

export default App
