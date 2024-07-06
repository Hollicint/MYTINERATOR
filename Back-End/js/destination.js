$(document).ready(function () {

  const searchOneWay = document.getElementById("searchOneWay");
  searchOneWay.addEventListener("submit", async (e) => {
    const departure = document.getElementById("departure").value;
    const departureDate = document.getElementById("departure_date").value;
    const departure_date = departureDate.split('T')[0];
    const destination = document.getElementById("destination").value;
    const backEndPoint = `/destination/flights`;

    try {
      const response = await fetch(backEndPoint, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          departure: departure,
          departure_date: departure_date,
          destination: destination,
        }),
      });
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Error: ${error}`);
      }
    } catch (error) {
      console.log(error);
    }
  });


  //********************** */
  const destBtn = document.getElementById("destBtn");
  destBtn.addEventListener("click", async (e) => {
    var APIKey = "c856238063b4ed114f381f40450bf743";
    var choice = document.getElementById("location").value;
    var API1 =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      choice +
      "&APPID=" +
      APIKey;

    if (choice === "") {
      alert("Please enter a city");
      return;
    } else {
      try {
        const response = await fetch(API1);

        if (response.status === 404) {
          alert("Not a place, please try again.");
          choice === "";
          return;
        } else {
          var data = await response.json();
          console.log(data);

          var cityCard = (document.getElementById("place").innerHTML = "");
          var overviewCard = (document.getElementById("sky").innerHTML =
            "Overview: ");
          var humidCard = (document.getElementById("humidity").innerHTML =
            "Humidity: ");
          var tempCard = (document.getElementById("temp").innerHTML =
            "Temperature: ");
          var feelsCard = (document.getElementById("feels").innerHTML =
            "Feels like: ");
          var maxCard = (document.getElementById("tempMax").innerHTML =
            "Max temp: ");
          var minCard = (document.getElementById("tempMin").innerHTML =
            "Min temp: ");
          var windCard = (document.getElementById("wind").innerHTML =
            "Wind speed: ");

          var CityData = data["name"];
          document.getElementById("place").innerHTML += CityData;

          var skyOverlook = data["weather"][0]["description"];
          document.getElementById("sky").innerHTML += skyOverlook;

          if (skyOverlook.includes("clouds")) {
            document.getElementById("weatherImg").src =
              "/images/weather/Clouds.png";
          } else if (skyOverlook.includes("snow")) {
            document.getElementById("weatherImg").src =
              "/images/weather/Snow.png";
          } else if (skyOverlook.includes("rain")) {
            document.getElementById("weatherImg").src =
              "/images/weather/Rain.png";
          } else if (skyOverlook.includes("drizzle")) {
            document.getElementById("weatherImg").src =
              "/images/weather/Drizzle.png";
          } else if (skyOverlook.includes("clear")) {
            document.getElementById("weatherImg").src =
              "/images/weather/Clear.png";
          } else if (skyOverlook.includes("thunderstorm")) {
            document.getElementById("weatherImg").src =
              "/images/weather/Thunderstorm.png";
          } else if (
            skyOverlook.includes("mist") ||
            skyOverlook.includes("fog") ||
            skyOverlook.includes("haze") ||
            skyOverlook.includes("sand")
          ) {
            document.getElementById("weatherImg").src =
              "/images/weather/Atmosphere.png";
          } else {
            document.getElementById("weatherImg").src =
              "/images/weather/Base.png";
          }

          var humidityData = data["main"]["humidity"];
          document.getElementById("humidity").innerHTML += humidityData;

          var temp = Math.floor(data["main"]["temp"] - 273.15);
          document.getElementById("temp").innerHTML += temp;

          var feelsLike = Math.floor(data["main"]["feels_like"] - 273.15);
          document.getElementById("feels").innerHTML += feelsLike;

          var tempMax = Math.floor(data["main"]["temp_max"] - 273.15);
          document.getElementById("tempMax").innerHTML += tempMax;

          var tempMin = Math.floor(data["main"]["temp_min"] - 273.15);
          document.getElementById("tempMin").innerHTML += tempMin;

          var windSpeed = Math.round(data["wind"]["speed"] * 3.59) + " km/h";
          document.getElementById("wind").innerHTML += windSpeed;
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  //********************************* */
});
