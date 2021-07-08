let myAPIKey = "a0122b050d686b7ed8e25c516d150d55";
let weatherLocation;
let searchOutput;

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
    });

// value setter
function setValues() {
    //main setters
    cityMain.textContent = searchOutput.city.name;
}

tempMain.textContent = searchOutput.list[4].main.temp;


setValues();

}






//TODO: autofill the form when search has been completed

//TODO: create if statement to change text hightlight of UV text depending on levels

//TODO: Create function to fill in form after selecting previous search item