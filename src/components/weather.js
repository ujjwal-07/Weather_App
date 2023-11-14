import React, {useState} from 'react'
import axios, * as others from 'axios';
import "../components/weather.css"



export default function Weather() {
const [city, SetCity] = useState("")
const [celsius, SetCelsius] = useState("")
const [fahrenheit, SetFahrenheit] = useState("")
const [country, SetCountry] = useState("")
const [region, SetRegion] = useState("")
const [condition, SetCondition] = useState("")
const [weather, SetWeather] = useState("")


function isEmpty(value) {
  return (value == null || (typeof value === "string" && value.trim().length === 0));
}
function getWeather(){
  document.getElementById("data").innerText = ""

if (isEmpty(city)){
  document.getElementById("data").innerText = "Please Enter a City name"

}
else{
axios.get(`http://api.weatherapi.com/v1/current.json?key=8dac92f65f7a47138bf65548232407&q=${city}&aqi=no`)
  .then(thisdata=>{
    console.log(thisdata)
    document.getElementById("data").innerText = thisdata.data.current.temp_c
    SetCelsius(thisdata.data.current.temp_c)
    SetFahrenheit(thisdata.data.current.temp_f)
    SetCity(thisdata.data.location.name)
    SetCountry(thisdata.data.location.country)
    SetRegion(thisdata.data.location.region)
    SetCondition(thisdata.data.current.condition.text)
    SetWeather(thisdata.data.current.condition.icon)
    document.body.style.backgroundImage = `url(${weather})`
  })
}
}
// getWeather()
  return (
    <>  

  
<div id="container" className="d-flex align-items-center justify-content-center">
<nav class="navbar navbar-dark bg-dark">
  <form class="form-inline">
    <input class="form-control mr-sm-2" id='input' type="search" placeholder="Enter City" value={city} onChange={(e)=>{SetCity(e.target.value)}} aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={getWeather}>Search</button>
  </form>
</nav>
<p id='data' className="data"></p>
<br />
</div>
<div id='box' className="justify-content-center">


<div className="temp">
  <strong><p id='tempc'>{celsius} <span style={{fontSize:"30px"}}>&#176;C</span></p></strong>
  </div>
  <div className="city">
  <strong><p id='city'>  {city}</p></strong>
  <i className="material-icons"  style = {{fontSize :"48px", color:"red" }}></i> 
  </div>
  <div className="country">
  <strong><p id='country'>{country}</p></strong>
  </div>
  <div className="condition">
  <strong><p id='condition'>{condition}</p></strong>
  </div>
  {/* <p id='condition'>Condition : {condition}</p>
  <p id='region'>Region : {region}</p><br /> */}
  {/* <h2>{celsius}</h2> */}

</div>
    </>

    )
}
