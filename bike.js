var cityInputEl = document.querySelector('#city-input')
var bikeShareBoxEl = document.querySelector('#bikeShareLocationBox')

function currentBikeLocation() {
    var cityInputValue = cityInputEl.value 
    var queryURL = "https://cors-anywhere.herokuapp.com/https://bikeshare-research.org/api/v1/systems/" + cityInputValue 
// API not functioning correctly.  Can't pull data.  Research other options.
    console.log(queryURL)

    // This appears to be a workable function, but need to test with a different api
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            console.log(data.bssid)
            console.log(data.name)
        
            var cityNameEl = document.createElement('h2')
            cityNameEl.setAttribute("class", "")
            var stationLocationEl = document.createElement('p')

            cityNameEl.textContent = data.bssid
            stationLocationEl.textContent = data.name

            bikeShareBoxEl.appendChild(cityNameEl)
            bikeShareBoxEl.appendChild(stationLocationEl)

            localStorage.setItem("city", data.bssid)
            localStorage.setItem("location", data.name)
        })    
        
}

var WeatherBtn = document.querySelector('#WeatherBtn')
WeatherBtn.addEventListener('click', function (event) {
    event.preventDefault();


    currentBikeLocation();
})