
let url= "https://api.openweathermap.org/data/2.5/weather?q="
// belagavi
let id="&appid=283aa8e6a9668956d598ae09d747aea9&units=metric";
// clear sky

     // clouds
// few clouds
// scattered clouds
// broken clouds

// shower rain

// rain
// thunderstorm

// snow

// mist

let search=document.querySelector(".search-icon");
let inp=document.querySelector("input");
let wether_img=document.querySelector(".weather-img2");
let temp=document.querySelector(".temp2");
let city=document.querySelector(".city");
let humidity=document.querySelector(".humidity-text");
let wind=document.querySelector(".wind-text");

search.addEventListener("click",async ()=>{
    try{
    let info=await getTemp(inp.value);
   
    let temperature=info;
    let ans=temperature.data.main.temp;
    temp.innerHTML=ans+"°";

    let cityname=info;
    city.innerHTML=cityname.data.name;

    let humidityValue =info;
    humidity.innerHTML=humidityValue.data.main.humidity+"%";

    let windSpeed=info;
   wind.innerHTML=windSpeed.data.wind.speed+"Km/hr";

   let img=info;
   let weather=img.data.weather[0].description; 
   console.log(img.data.weather[0].description)
   if(weather=="clear sky"){
    wether_img.setAttribute("src","assests/clear.png");
   }
   // clear sky

   if(weather=="few clouds" || weather=="scattered clouds" || weather=="broken clouds"){
    wether_img.setAttribute("src","assests/clouds.png");
   }
   // clouds
// few clouds
// scattered clouds
// broken clouds

if(weather=="shower rain"){
    wether_img.setAttribute("src","assests/drizzle.png");
   }
// shower rain

if(weather=="rain"|| weather=="thunderstorm"){
    wether_img.setAttribute("src","assests/rain.png");
   }

// rain
// thunderstorm
if(weather=="snow"){
    wether_img.setAttribute("src","assests/snow.png");
   }
// snow

if(weather=="mist"){
    wether_img.setAttribute("src","assests/mist.png");
   }

// mist
    }
    catch{
        alert("Enter the correct city");
    }

   
})

async function getTemp(inpText){
    let res=await axios.get(url+inpText+id);
    return res;
}

// async function getCity(inpText){
//     let res=await axios.get(url+inpText+id);
//     return res;
// }
