const API_Key = "sC88xi363+QY4v01H/tX3g==rIErPXL6LbsBkYgp";
const search_input = document.getElementById("searchCity")
const searBtn = document.getElementById("searchButton")

const fetchWeather = async (city) => {
  try {
    const encodedCity = encodeURIComponent(city);
    const geoRes = await fetch(
      `https://api.api-ninjas.com/v1/geocoding?city=${encodedCity}`,
      { headers: { "X-Api-Key": API_Key } }
    );

    const geoData = await geoRes.json()

    if(geoData === 0){
        alert("City not found")
        return;
    }

    let lon = geoData[0].longitude
    let lat = geoData[0].latitude

    const response = await fetch(
      `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`,
      { headers: { "X-Api-Key": API_Key } }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); 

    document.getElementById("cityName").textContent = city;
    document.getElementById("temperature").textContent = data.temp + "°C"
    document.getElementById("windSpeed").textContent = data.wind_speed + 'km/h'
    document.getElementById("humidity").textContent = data.humidity + "%"
    // document.getElementById("temperature").textContent = data.temp + "C"


    console.log("Weather Data:", data);
    console.log("Temperature:", data.temp);

  } catch (error) {
    console.log("Error:", error);
  }
};

searBtn.addEventListener("click", ()=>{
    const city = search_input.value
    if(city) fetchWeather(city)
})