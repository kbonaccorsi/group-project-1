// Global Variables 
let container = document.querySelector(".nav")
let results = document.querySelector(".section");
let foodTitle = document.querySelector("#food-title");
let foodImg = document.querySelector("#food-img");
let foodUrl = document.querySelector("#food-link");
let recipeAction = document.querySelector("#recipe-action");
let recipeSuggestion = document.querySelector("#recipe-suggestion");
let movieTitle = document.querySelector("#movie-title");
let btnResult = [];
let movieImg = document.querySelector("#movie-img");
let movieAction = document.querySelector("#movie-action");
let titleSuggestion = document.querySelector("#movie-suggestion");


// get data attribute from the buttons. 
// then do fetch calls 
// grab appropriate parameters from fetch. 

const foodQueries = ["beef", "chicken", "fish", "pork", "vegetarian"]

function pickRandom(arr) { // gets a random element from an array and returns it
    return arr[Math.floor(Math.random() * arr.length)]
}

function displayResults(region) {
    recipeApi(region); // foodApi('american')
    movieApi(region); // recipeApi('american')
};

function recipeApi(region) {
    console.log(region) // want to append this region onto the fetch request based on api specs

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${pickRandom(foodQueries)}&app_id=1802ebf5&app_key=c4815f7f4cc77e6493a25d7413cc910b&cuisineType=${region}`)
        .then(response => response.json())
        .then(data => {
            let resultF = pickRandom(data.hits);
            foodTitle.textContent = resultF.recipe.label;
            foodImg.setAttribute("src", resultF.recipe.image);
            foodUrl.setAttribute("href", resultF.recipe.foodUrl);
            foodUrl.setAttribute("target", "_blank");
            foodUrl.textContent = "Click here to view the recipe";
            recipeAction.setAttribute("class", "hide");
            recipeSuggestion.removeAttribute("class");
        });
};

function movieApi(region) {
    console.log(region);
    //append the region string onto the fetch request based on api specs
    fetch("https://imdb-api.com/en/API/Top250Movies/k_tq6blagh")
        .then(response => response.json())
        .then(response => {
            let resultsM = pickRandom(response.items);
            movieTitle.textContent = "Title: " + resultsM.title;
            movieImg.setAttribute("src", resultsM.image);
            movieAction.setAttribute("class", "hide");
            titleSuggestion.removeAttribute("class");
        })
};

function init() {
    let storedPastParings = JSON.parse(localStorage.getItem("movie"));
    if (!storedPastParings === null) {
        btnResult = storedPastParings
    }
    movieApi();
}

function storePastParings() {
    localStorage.setItem("movie", JSON.stringify(btnResult));
    // let pastMovie = (movieTitle.value)
    // console.log(pastMovie);
    // let displayPastMovie = document.querySelector("#last-movie")
    // localStorage.getItem(pastMovie);
};

// utilitiy if we need it---might not--good for conversions
// function regionHandlerForMovies(region) {
//     if (region === 'american') {
//         return 'US'
//     }
// };
console.log(movieTitle);

container.addEventListener("click", function (event) {
    let element = event.target
    if (element.matches(".button")) {
        let state = element.getAttribute("id");
        displayResults(state) //displayResults('american')
    }

});

