async function loadweather() {

  var APIKey = 'c856238063b4ed114f381f40450bf743';
  var choice = document.getElementById("location").value;
  var API1 = "http://api.openweathermap.org/data/2.5/weather?q="+choice+"&APPID=" + APIKey;

  if(choice === ''){
    alert('Please enter a city');
    return;
  } else {


    try {
      const response = await fetch(API1);

      if(response.status === 404) {
        alert("Not a place, please try again.");
        choice === "";
        return;
      } else {
        var data = await response.json();
        console.log(data);
      
        var cityCard = document.getElementById('place').innerHTML = "";
        var humidCard = document.getElementById('humidity').innerHTML= "Humidity: ";
        var tempCard = document.getElementById('temp').innerHTML= "Temperature: ";
        var feelsCard = document.getElementById('feels').innerHTML= "Feels like: ";
        var maxCard = document.getElementById('tempMax').innerHTML= "Max temp: "
        var minCard = document.getElementById('tempMin').innerHTML= "Min temp: ";
        var windCard = document.getElementById('wind').innerHTML = "Wind speed: ";
      
        var CityData = data["name"];
        document.getElementById('place').innerHTML += CityData;
      
        var humidityData = data["main"]["humidity"];
        document.getElementById('humidity').innerHTML += humidityData;
      
        var temp = Math.floor(data["main"]["temp"] - 273.15);
        document.getElementById('temp').innerHTML += temp;
      
        var feelsLike = Math.floor(data["main"]["feels_like"] - 273.15);
        document.getElementById('feels').innerHTML += feelsLike;
      
        var tempMax = Math.floor(data["main"]["temp_max"] - 273.15);
        document.getElementById('tempMax').innerHTML += tempMax;
      
        var tempMin = Math.floor(data["main"]["temp_min"] - 273.15);
      document.getElementById('tempMin').innerHTML += tempMin;
      
        var windSpeed = data["wind"]["speed"];
        document.getElementById('wind').innerHTML += windSpeed;

      }      
    } catch (error) {
      console.log(error);
    }  
  }

}
