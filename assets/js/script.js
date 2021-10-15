// Global Variables 
let container = document.querySelector(".nav")
let results = document.querySelector(".section");


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
            let foodTitle = document.querySelector("#food-title");
            foodTitle.textContent = resultF.recipe.label;
            let foodImg = document.querySelector("#food-img");
            foodImg.setAttribute("src", resultF.recipe.image);
            let foodUrl = document.querySelector("#food-link");
            foodUrl.setAttribute("href", resultF.recipe.foodUrl);
            foodUrl.setAttribute("target", "_blank");
            foodUrl.textContent = "Click here to view the recipe";
            let recipeAction = document.querySelector("#recipe-action");
            recipeAction.setAttribute("class", "hide");
            let recipeSuggestion = document.querySelector("#recipe-suggestion");
            recipeSuggestion.removeAttribute("class");
        });
};
let movieTitle = document.querySelector("#movie-title");
let btnResult = [];

function movieApi(region) {
    console.log(region);
    //append the region string onto the fetch request based on api specs
    fetch("https://imdb-api.com/en/API/Top250Movies/k_tq6blagh")
        .then(response => response.json())
        .then(response => {
            let resultsM = pickRandom(response.items);
            movieTitle.textContent = "Title: " + resultsM.title;
            let movieImg = document.querySelector("#movie-img");
            movieImg.setAttribute("src", resultsM.image);
            let movieAction = document.querySelector("#movie-action");
            movieAction.setAttribute("class", "hide");
            let titleSuggestion = document.querySelector("#movie-suggestion");
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
container.addEventListener("click", function (event) {
    let element = event.target
    if (element.matches(".button")) {
        let state = element.getAttribute("id");
        displayResults(state) //displayResults('american')
    }

});

