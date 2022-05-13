let weather = {
    apiKey: "",
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid="
        ).then((response)=>response.json()).then((data)=>console.log(data));
    },
};
