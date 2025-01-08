const btn=document.querySelector(".btn")
const input = document.querySelector("#city") //alternate yei line ma .value
const temp =document.querySelector("#temp-div") 
// const apiKey = "33b36300c4b41becaa14d0325d1c5c0a";
    btn.addEventListener("click", async function() {
        let city = input.value
        const weatherinfo = await getWeatherInfo(city)
        // console.log(weatherinfo.main.temp)
  temp.innerHTML=weatherinfo.main.temp +"°C"
        // temp.innerHTML=city 
    })
async function getWeatherInfo(city){
    const apiKey = "33b36300c4b41becaa14d0325d1c5c0a";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

        const response = await fetch(apiurl)
        const data = await response.json()
        return data 
    
}
