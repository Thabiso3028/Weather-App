let weather = {
    apiKey: "ab7e42b1446f28cf4a2348082c197d37",
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=ab7e42b1446f28cf4a2348082c197d37"
        ).then((response)=>response.json()).then((data)=>console.log(data));
    },
};
