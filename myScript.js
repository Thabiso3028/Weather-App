let weather = {
    apiKey: ,
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&unit=metric&appid=" + this.apiKey
        ).then((response)=>response.json()).then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.getElementById("name").innerText = "Weather in " + name;
        document.getElementById("temp").innerText = temp + "°C";
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.getElementById("descr").innerText = description;
        document.getElementById("humidity").innerText = humidity;
        document.getElementById("wind").innerText = speed;
    }
};
