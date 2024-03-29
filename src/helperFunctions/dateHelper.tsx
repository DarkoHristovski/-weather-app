export function formatDate(date:Date) {
    return new Date(date).toLocaleDateString();
  }

  export function dateNow(){
    const curentDate = new Date()
    const day = curentDate.getDate()
    const month = curentDate.getMonth()+1;
    const year = curentDate.getFullYear();
    if(day<=9 && month <=9 ){
      return `0${day}.0${month}.${year}`
    }else if(day<=9 && month >9){
      return `0${day}.${month}.${year}`
    }else if(day>9 && month <=9){
      return `${day}.0${month}.${year}`
    }else{
      return `${day}.${month}.${year}`
    }
  }

  export function GetDateFromApi(date:Date) {
    const curentDate = new Date(date)
    const day = curentDate.getDate()
    const month = curentDate.getMonth()+1;
    if(day <= 9 && month <= 9){
      return `0${day}.0${month}`
    }else if(day<=9 && month > 9){
      return `0${day}.${month}`
    }else if(day>9 && month <= 9){
      return `${day}.0${month}`
    }else{
      return `${day}.${month}.`
    }
  }

  export function GetDay(date: Date){
    const curentDate = new Date(date)
    return curentDate.getDay();
  }