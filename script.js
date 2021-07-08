let myAPIKey = "a0122b050d686b7ed8e25c516d150d55";
let weatherLocation;
let searchOutput;
let searchOutput2;
let searchLan;
let searchLon;
let newRequest;

let currentDate = moment().format("DD/MM/YY");


// main elements
let cityMain = document.getElementById("cityMain");
let dateMain = document.getElementById("dateMain");
dateMain.textContent = currentDate;
let symbolMain = document.getElementById("weatherSymbolMain");
let tempMain = document.getElementById("tempMain");
let windMain = document.getElementById("windMain");
let humMain = document.getElementById("humMain");
let uvMain = document.getElementById("uvMain");

// day one elements
let dateOne = document.getElementById("date-one");
dateOne.textContent = moment().add(1, 'days').format("DD/MM");
let symOne = document.getElementById("day-one-symbol");
let tempOne = document.getElementById("day-one-temp");
let windOne = document.getElementById("day-one-wind");
let humOne = document.getElementById("day-one-hum");

// day two elements
let dateTwo = document.getElementById("date-two");
dateTwo.textContent = moment().add(2, 'days').format("DD/MM");
let symTwo = document.getElementById("day-two-symbol");
let tempTwo = document.getElementById("day-two-temp");
let windTwo = document.getElementById("day-two-wind");
let humTwo = document.getElementById("day-two-hum");

// day three elements
let dateThree = document.getElementById("date-three");
dateThree.textContent = moment().add(3, 'days').format("DD/MM");
let symThree = document.getElementById("day-three-symbol");
let tempThree = document.getElementById("day-three-temp");
let windThree = document.getElementById("day-three-wind");
let humThree = document.getElementById("day-three-hum");

// day four elements
let dateFour = document.getElementById("date-four");
dateFour.textContent = moment().add(4, 'days').format("DD/MM");
let symFour = document.getElementById("day-four-symbol");
let tempFour = document.getElementById("day-four-temp");
let windFour = document.getElementById("day-four-wind");
let humFour = document.getElementById("day-four-hum");

// day five elements
let dateFive = document.getElementById("date-five");
dateFive.textContent = moment().add(5, 'days').format("DD/MM");
let symFive = document.getElementById("day-five-symbol");
let tempFive = document.getElementById("day-five-temp");
let windFive = document.getElementById("day-five-wind");
let humFive = document.getElementById("day-five-hum");



// Pulling search function
function weatherSearch() {
    let location= document.getElementById("searchObject").value;
    weatherLocation = location;

//saving search to localStorage
//     localStorage.setItem("mostRecent", weatherLocation)
// if (localStorage.getItem("mostRecent") === " ") {
//     localStorage.setItem("secondSearch", weatherLocation)
//     if (localStorage.getItem("secondSearch") === " ") {
//         localStorage.setItem("thirdSearch", weatherLocation)
//         if (localStorage.getItem("thirdSearch") === " ") {
//             localStorage.setItem("fourthSearch", weatherLocation)
//         }
//     }
// }

let requestedURL = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherLocation}&units=metric&appid=${myAPIKey}`;
    
fetch(requestedURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        searchOutput = data;
        searchLan = searchOutput.city.coord.lat;
        searchLon = searchOutput.city.coord.lon;
        newRequest = `https://api.openweathermap.org/data/2.5/onecall?lat=${searchLan}&lon=${searchLon}&appid=${myAPIKey}&units=metric`
    fetch(newRequest)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            searchOutput2 = data;
        })
        .then(function setValues() {
    //main setters
    cityMain.textContent = searchOutput.city.name;
    //symbolMain.textContent = //TODO: Ask for assistance on this
    tempMain.textContent = `${searchOutput2.current.temp} °C`;
    windMain.textContent = `${searchOutput2.current.wind_speed} KPH`;
    humMain.textContent = `${searchOutput2.current.humidity} %`;
    uvMain.textContent = `${searchOutput2.current.uvi}`
        //TODO: create if statement for this colour change

    //day one setters
    //TODO: Symbol code - once figured out how to...
    tempOne.textContent = `${searchOutput2.daily[1].temp.day} °C`;
    windOne.textContent = `${searchOutput2.daily[1].wind_speed} MPH`;
    humOne.textContent = `${searchOutput2.daily[1].humidity} %`;

    //day two setters
    //TODO: Symbol code - once figured out how to...
    tempTwo.textContent = `${searchOutput2.daily[2].temp.day} °C`;
    windTwo.textContent = `${searchOutput2.daily[2].wind_speed} MPH`;
    humTwo.textContent = `${searchOutput2.daily[2].humidity} %`;

    //day three setters
    //TODO: Symbol code - once figured out how to...
    tempThree.textContent = `${searchOutput2.daily[3].temp.day} °C`;
    windThree.textContent = `${searchOutput2.daily[3].wind_speed} MPH`;
    humThree.textContent = `${searchOutput2.daily[3].humidity} %`;

    //day four setters
    //TODO: Symbol code - once figured out how to...
    tempFour.textContent = `${searchOutput2.daily[4].temp.day} °C`;
    windFour.textContent = `${searchOutput2.daily[4].wind_speed} MPH`;
    humFour.textContent = `${searchOutput2.daily[4].humidity} %`;

    //day five setters
    //TODO: Symbol code - once figured out how to...
    tempFive.textContent = `${searchOutput2.daily[5].temp.day} °C`;
    windFive.textContent = `${searchOutput2.daily[5].wind_speed} MPH`;
    humFive.textContent = `${searchOutput2.daily[5].humidity} %`;
});
})    
   

}


//TODO: create if statement to change text hightlight of UV text depending on levels

//TODO: Create function to fill in form after selecting previous search item