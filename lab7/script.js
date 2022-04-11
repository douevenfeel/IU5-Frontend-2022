let weather = {
    appid: "431510dc1e639b30d748709effdbd825",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=ru&appid=" + this.appid)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Влажность: " + humidity + "%";
        document.querySelector(".wind").innerText = "Скорость ветра: " + (speed * 3.6).toFixed(2) + "м/c";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchInput").value);
    },
};

document.querySelector(".searchButton").addEventListener("click", () => {
    weather.search();
});

document.querySelector(".searchInput").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        weather.search();
    }
});
console.log(weather.fetchWeather("Москва"));
