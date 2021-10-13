

















































































































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

