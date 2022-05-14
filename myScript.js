
let weather = {
<<<<<<< HEAD
    apiKey: "ab7e42b1446f28cf4a2348082c197d37",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&unit=metric&appid=" + this.apiKey
        ).then((response)=>response.json()).then((data)=>this.displayWeather(data));
=======
    apiKey: "",
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid="
        ).then((response)=>response.json()).then((data)=>console.log(data));
>>>>>>> 402639bc1dab4a206638daedf87523e2b5adc762
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    }
};
 