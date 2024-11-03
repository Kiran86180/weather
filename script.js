const apiKey = 'd2d38b339f461f154702a47a5e704b38';  // Replace with your real API key

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Use AJAX to fetch weather data
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            displayWeather(data);
        } else {
            document.getElementById('weather-result').innerHTML = 'City not found!';
        }
    };
    xhr.send();
}

function displayWeather(data) {
    const city = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('weather-result').innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}
