var input=document.querySelector(".input");
var apilink="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var apiid="&appid=a3d52f18ab9912384a0111854c0e471e";

setTimeout(()=>{console.log(input.value.toLowerCase())},10000)
async function check() {
    const res=await fetch(apilink+input.value.toLowerCase()+apiid);
    var data=await res.json();
    if(res.status== 404){
        alert("invalid city")
    }
    console.log(data)
    document.querySelector(".city").innerHTML=`<h2>${data.name}</h2>`;
    document.querySelector(".deg").innerHTML=`<h1>${Math.round(data.main.temp)}<sup style="font-size: 11px">o</sup>C</h1>`;
    document.querySelector(".humidity-range").innerHTML=`${data.main.humidity}%`;
    document.querySelector(".wind-speed").innerHTML=`${data.wind.speed}KM/H`;
    var weather=data.weather[0].main;
    var weathe="Mist";
    var icon=document.querySelector(".imgs");
    if(weather=="Clouds"){
        icon.src="weather-app-img/images/clouds.png"
    }else if(weather==="Mist"){
        icon.src="weather-app-img/images/mist.png"
    }
    else if(weather=="Rain"){
        icon.src="weather-app-img/images/rain.png"
    }else if(weather=="Snow"){
        icon.src="weather-app-img/images/snow.png"
    }
    else if(weather=="Clear"){
        icon.src="weather-app-img/images/clear.png"
    }
    else if(weather=="Drizzle"){
        icon.src="weather-app-img/images/drizzle.png"
    }
    console.log(weather)
}




