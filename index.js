function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    var apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f04b977d069d0b065211587e203216f5=${searchTerm}&appid=${apiKey}`;
  
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
  }
  
  function display(data) {
    var weatherContainer = document.getElementById("results");
    weatherContainer.innerHTML = "";
  
    if (data.cod === '404') {
        weatherContainer.innerHTML = "City not found.";
    } else {
        var weatherIcon = document.createElement("img");
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIcon.alt = data.weather[0].description;
        weatherIcon.classList.add("weather-icon");
        
        var temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature to Celsius
        var description = data.weather[0].description;
        
        var weatherInfo = document.createElement("div");
        weatherInfo.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>
                                <p>${description}</p>
                                <p>Temperature: ${temperature}°C</p>`;
        
        weatherContainer.appendChild(weatherIcon);
        weatherContainer.appendChild(weatherInfo);
    }
  }
  