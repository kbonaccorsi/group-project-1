// Global Variables 

// let americanBtn = document.querySelector("#american");
// let chineseBtn = document.querySelector("#chinese");
// let frenchBtn = document.querySelector("#french");
// let italianBtn = document.querySelector("#italian");
// let koreanBtn = document.querySelector("#korean");
// let indianBtn = document.querySelector("#indian");
// americanBtn.addEventListener('click', displayResults);
// let button = document.querySelectorAll(".button");

let container = document.querySelector(".nav")

container.addEventListener("click", function (event) {

    let element = event.target

    if (element.matches(".button")) {
        let state = element.getAttribute("id");


        displayResults(state) //displayResults('american')
    }
});


// get data attribute from the buttons. 
// then do fetch calls 
// grab appropriate parameters from fetch. 



function displayResults(region) {

    recipeApi(region); // foodApi('american')
    movieApi(region); // recipeApi('american')
};

function recipeApi(region) {
    console.log(region) // want to append this region onto the fetch request based on api specs

    fetch("https://api.edamam.com/api/recipes/v2?type=public&q=fish&app_id=1802ebf5&app_key=c4815f7f4cc77e6493a25d7413cc910b&cuisineType=American")
        .then(response => response.json())
        .then(response => console.log(response))

};


function movieApi(region) {
    console.log(region);
    //append the region string onto the fetch request based on api specs
    fetch("https://imdb-api.com/en/API/Title/k_50wgorsx/tt1375666")
        .then(response => response.json())
        .then(response => console.log(response))
};

// utilitiy if we need it---might not--good for conversions
// function regionHandlerForMovies(region) {
//     if (region === 'american') {
//         return 'US'
//     }
// };

// MOVIE CONTAINER

function getMovieResults(movieResults)
    for (let i = 0; i < 5; i++) {
        console.log(movieResults[i]);

    let movieContainer = document.querySelector("#movie-container");
    let div = document.createElement("div");

    // movie poster
    let img = document.createElement("img");

    //movie title
    let movieTitle = document.createElement("p");

    // list of movie information
    let information = document.createElement("ul");

    //runtime
    let runtime = document.createElement("li");

    //description
    let description = document.createElement("li");

    //languages available
    let languages = document.createElement("li");




    movieTitle.textContent= "Title: " + insertAPI.title;
    img.setAttribute("src", "******insert API.link");
    img.setAttribute("alt", movieTitle + "poster")
    runtime.textContent= "Runtime: " + insertAPI.runtime;
    description.textContent= "Description: " + insertAPI.description;
    languages.textContent= "Available languages: " + insertAPI.language;



    movieContainer.appendChild(div)
    div.classList.add("movie-results")
    div.appendChild(movieTitle)
    div.appendChild(img)
    div.appendChild(information)
    information.appendChild(runtime)
    information.appendChild(description)
    information.appendChild(languages)

};



// FOOD CONTAINER

function getFoodResults(foodResults)
    for (let i = 0; i < 5; i++) {
        console.log(foodResults[i]);
let foodContainer = document.querySelector("food-container");
let div = document.createElement("div");

// food image
let img = document.createElement("img");

//food title
let foodTitle = document.createElement("h4");

// list of recipe information
let information = document.createElement("ul");

//cooktime
let cookTime = document.createElement("li");

//description
let description = document.createElement("li");

//special notes available
let specialNotes = document.createElement("li");




foodTitle.textContent= "Title: " + insertAPI.title;
img.setAttribute("src", "******insert API.link");
img.setAttribute("alt", foodTitle + "poster")
cookTime.textContent= "cookTime: " + insertAPI.cookTime;
description.textContent= "Description: " + insertAPI.description;
specialNotes.textContent= "Available specialNotes: " + insertAPI.language;



foodContainer.appendChild(div)
div.classList.add("food-results")
div.appendChild(foodTitle)
div.appendChild(img)
div.appendChild(information)
information.appendChild(cookTime)
information.appendChild(description)
information.appendChild(specialNotes)