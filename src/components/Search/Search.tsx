import './search.css'

import { type FormEvent, useRef } from "react";


export type SearchProps ={
   enterCity:(city:string)=>void
}

const Search = ({enterCity}:SearchProps ) =>{
const city = useRef<HTMLInputElement>(null)
function HandleSubmit(event:FormEvent){
event.preventDefault();
const cityFromInput = city.current!.value;
enterCity(cityFromInput)

}

    return(
    <div className="seacrh-module module">
        <form className='flex space-between' onSubmit={HandleSubmit} action="/">
           <input type="text" ref={city}  />
           <button type="submit">Enter</button>
        </form>
        </div>
    )
}

export default Search;

