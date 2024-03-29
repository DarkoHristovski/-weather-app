export const switchTemperature = (isCelsius:boolean, value:number) => {


if(isCelsius){

    return <span>{(value - 273).toFixed(0)} &#8451;</span>

}else{
    
    return <span>{(value).toFixed(0)} &#8490;</span>

}

}