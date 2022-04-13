async function getWeather(){
    let response = await fetch(`http://developers.parsijoo.ir/web-service/vl/weather/?type=search&city=${city}`,
      {headers:{"api-key":"0273f1c415f64808ac9be829834323cd"} })
    let data = await response.json()
    console.log(data)
}