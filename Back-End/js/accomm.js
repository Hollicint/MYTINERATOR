$(document).ready(function () {
  
    const accommBtn = document.getElementById("accommBtn");
    accommBtn.addEventListener("click", async (e) => {
      var APIKey = "fca6fb30";
      var choice = document.getElementById("location").value;
      var API = 'https://my.api.mockaroo.com/hotels.json?key='+APIKey;
  
      if (choice === "") {
        alert("Please enter a city");
        return;
      } else {
        try {
            const response = await fetch(API);
    
            if (response.status === 404 || response.status === 401) {
              alert("Not in the database, please try again.");
              choice === "";
              return;
            } else {
              var data = await response.json();
              console.log(data);

              const results = document.getElementById("accommResults");
              results.innerHTML = '';

              data.forEach(hotel => {
                if(hotel.location == choice){
                    const resultDiv = document.createElement('div');
                    resultDiv.innerHTML = '<div class="col">' +
                    '<h2><a id="hotelLink" href="/accommodation/' + hotel.hotel_id + '">'
                    + hotel.hotel_name + '</h2><p>Room type: ' + hotel.room_type +
                    '</p><p>Price per night: ' + hotel.price_per_night +
                    '</p>'+'</p><p>Rating: '+ hotel.rating +
                    '<p>Location: '+ hotel.location + '</p>' + '</div>'
                    results.appendChild(resultDiv);
                }
              });
          }
  
          } catch (error) {
            console.log(error);
          }
    }
    });
    //********************************* */
  });
  