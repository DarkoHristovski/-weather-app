import { type FormEvent, useRef } from "react";


export type cityNameProps ={
   enterCity:(city:string)=>void
}

const Search = ({enterCity}:cityNameProps ) =>{

const city = useRef<HTMLInputElement>(null)

function HandleSubmit(event:FormEvent){
event.preventDefault();
const cityFromInput = city.current!.value;
console.log(cityFromInput)
enterCity(cityFromInput)
}

    return(
   <div className="container">
    
        <form onSubmit={HandleSubmit} action="/">
           <input type="text" ref={city}  />
           <button type="submit">Enter</button>
        </form>
        </div>
    )
}

export default Search;

