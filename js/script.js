const apiurl= "https://api.openweathermap.org/data/2.5/weather?appid=de36c6305f808e50d79b782d1cd9b58c&units=metric&q=";

async function weather(city)
{
    const res=await fetch(apiurl+city);
    const data=await res.json();
    console.log(data);
    console.log(data.main.temp);
    document.querySelector('.temp').innerHTML=data.main.temp;
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity;
    document.querySelector('.wind').innerHTML=data.wind.speed+"Km/h";

}
  function fun()
  {
    var city = document.querySelector('.search input').Value;
    weather(city);
  }