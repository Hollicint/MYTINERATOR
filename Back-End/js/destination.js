const oneWayBtn = document.getElementById("oneWayBtn");

oneWayBtn.addEventListener("click", (e) => {
  const departLocation = document.getElementById("departLocation").value;
  const departDate = document.getElementById("departDate").value;
  const destination = document.getElementById("destination").value;


})

async function loadFlight() {

  var API = "https://my.api.mockaroo.com/flight_data.json?key=fca6fb30";

  try {
    const response = await fetch(API);

    if(response.status === 404) {
      alert("Not a place, please try again.");
      return;
    } else {
      var data = await response.json();
      alert("added to console.");
      var departLoc = document.getElementById("departLoc").value;
      var returnLoc = document.getElementById("returnLoc").value;
      var departDate = document.getElementById("departDate").value;
      var returnDate = document.getElementById("returnDate").value;

      console.log(data);
      console.log(departLoc);
      console.log(returnLoc);
      console.log(departDate);
      console.log(returnDate);

  
    }      
  } catch (error) {
    console.log(error);
  }  
}

async function dateCheck() {
  var API = "https://my.api.mockaroo.com/flight_data.json?key=fca6fb30";

  try {
    const response = await fetch(API)

    if(response.status === 404) {
      alert("Error.");
      return;
    } else {
      var data = await response.json()

      //alert("added to console.");
      console.log(data)

      console.log(data[0]);
      

        
      }

         
  } catch (error) {
    console.log(error);
  }   }


async function loadOneWayFLight() {
const departLocation = document.getElementById("departLocation").value;
const departDate = document.getElementById("departDate").value;
const destination = document.getElementById("destination").value;

var airline = document.getElementById("airline").value;
var departureDate = document.getElementById("departDate").value;
var departure = document.getElementById("departLocation").value;
var Price = document.getElementById("price").value;
var Status = document.getElementById("status").value;

var API = "https://my.api.mockaroo.com/flight_data.json?key=fca6fb30";
var DubAPI = "https://my.api.mockaroo.com/from_dublin.json?key=fca6fb30";

try {
  const response = await fetch(DubAPI)

  if(response.status === 404) {
    alert("Not a place, please try again.");
    return;
  } else {
    var data = await response.json()
    const flightData = document.getElementById("flightList"); 

    //alert("added to console.");

    console.log(data);
    console.log(departLocation, departDate, destination);


    for(let i=0; i < data.length; i++){
      if(data[i]["departure"] == departLocation && data[i]["destination"] == destination && data[i]["departure_date"] == departDate){
        //&& data[i]["departure_date"] == departDate 
        console.log(data[i]);
      } 
    }

  }      
} catch (error) {
  console.log(error);
}  

}

function loadReturn() {
document.getElementById("searchReturn").style.display='flex';
document.getElementById("searchOneWay").style.display='none';
document.getElementById("oneWayBtn").style.display='none';
document.getElementById("returnBtn").style.display='flex';
}
function loadOneWay() {
document.getElementById("searchReturn").style.display='none';
document.getElementById("searchOneWay").style.display='flex';
document.getElementById("returnBtn").style.display='none';
document.getElementById("oneWayBtn").style.display='flex';

}

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
      var overviewCard = document.getElementById('sky').innerHTML= "Overview: ";
      var humidCard = document.getElementById('humidity').innerHTML= "Humidity: ";
      var tempCard = document.getElementById('temp').innerHTML= "Temperature: ";
      var feelsCard = document.getElementById('feels').innerHTML= "Feels like: ";
      var maxCard = document.getElementById('tempMax').innerHTML= "Max temp: "
      var minCard = document.getElementById('tempMin').innerHTML= "Min temp: ";
      var windCard = document.getElementById('wind').innerHTML = "Wind speed: ";
    
      var CityData = data["name"];
      document.getElementById('place').innerHTML += CityData;

      var skyOverlook = data["weather"][0]["description"];
      document.getElementById('sky').innerHTML += skyOverlook;

      if(skyOverlook.includes("clouds")){
        document.getElementById("weatherImg").src = "/images/weather/Clouds.png";
      } else if (skyOverlook.includes("snow")) {
        document.getElementById("weatherImg").src = "/images/weather/Snow.png";
      } else if (skyOverlook.includes("rain")) {
        document.getElementById("weatherImg").src = "/images/weather/Rain.png";
      } else if (skyOverlook.includes("drizzle")) {
        document.getElementById("weatherImg").src = "/images/weather/Drizzle.png";
      } else if (skyOverlook.includes("clear")) {
        document.getElementById("weatherImg").src = "/images/weather/Clear.png";
      }else if (skyOverlook.includes("thunderstorm")) {
        document.getElementById("weatherImg").src = "/images/weather/Thunderstorm.png";
      }else if (skyOverlook.includes("mist") ||skyOverlook.includes("fog") ||skyOverlook.includes("haze") ||skyOverlook.includes("sand")) {
        document.getElementById("weatherImg").src = "/images/weather/Atmosphere.png";
      }else {
        document.getElementById("weatherImg").src = "/images/weather/Base.png";
      }
    
    
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
    
      var windSpeed = Math.round(data["wind"]["speed"] * 3.59) + ' km/h';
      document.getElementById('wind').innerHTML += windSpeed;

    }      
  } catch (error) {
    console.log(error);
  }  
}

}
