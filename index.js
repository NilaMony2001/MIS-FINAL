function searchWeather() {
    const apiKey = "f04b977d069d0b065211587e203216f5";
    const searchInput = document.getElementById("searchInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const location = `${data.name}, ${data.sys.country}`;
            const temperature = `${Math.round(data.main.temp - 273.15)}°C`;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById("location").innerHTML = location;
            document.getElementById("temperature").innerHTML = temperature;
            document.getElementById("description").innerHTML = description;
            document.getElementById("weather-icon").src = iconUrl;
            document.getElementById("humidity").innerHTML = `${humidity}%`;
            document.getElementById("wind-speed").innerHTML = `${windSpeed} m/s`;
        })
        .catch(error => console.error("Error fetching data:", error));

}

