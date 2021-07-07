//TODO: figure out the fetch mechanics
    //TODO: Once I know this, inspect the data from the API and see how to use it
let myAPIKey = "a0122b050d686b7ed8e25c516d150d55";
let weatherLocation;
let searchOutput;

// Pulling search function
function weatherSearch() {
    let location= document.getElementById("searchObject").value;
    weatherLocation = location;

//saving search to localStorage
    localStorage.setItem("mostRecent", weatherLocation)
if (localStorage.getItem("mostRecent") === " ") {
    localStorage.setItem("secondSearch", weatherLocation)
    if (localStorage.getItem("secondSearch") === " ") {
        localStorage.setItem("thirdSearch", weatherLocation)
        if (localStorage.getItem("thirdSearch") === " ") {
            localStorage.setItem("fourthSearch", weatherLocation)
        }
    }
}


let requestedURL = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherLocation}&units=metric&appid=${myAPIKey}`;

fetch(requestedURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        console.log(data);
        searchOutput = data;
    });

function setValues() {
    
}

}


//TODO: autofill the form when search has been completed

//TODO: create if statement to change text hightlight of UV text depending on levels

//TODO: Create function to fill in form after selecting previous search item