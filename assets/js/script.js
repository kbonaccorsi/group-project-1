// Global Variables 

//navigation bar to make the buttons have some action
let container = document.querySelector(".nav");
//recipe name
let foodTitle = document.querySelector("#food-title");
//image of recipe
let foodImg = document.querySelector("#food-img");
//url to view recipe
let foodUrl = document.querySelector("#food-link");
// makes the opening phrase disappear when results display
let recipeAction = document.querySelector("#recipe-action");
//recipe h2
let recipeSuggestion = document.querySelector("#recipe-suggestion");

let foodResult = document.getElementById("food-result").value;

let foodStorage = document.getElementById("store-last-recipe");
//h3 movie title display
let movieTitle = document.querySelector("#movie-title");
//image of movie poster
let movieImg = document.querySelector("#movie-img");
// makes the opening phrase disappear when results display
let movieAction = document.querySelector("#movie-action");
//movie h2
let titleSuggestion = document.querySelector("#movie-suggestion");

let movieResult = document.getElementById("movie-result").value;

let movieStorage = document.getElementById("store-last-movie");
//assigns the API parameter to choose from one of these choices
const foodQueries = ["beef", "chicken", "fish", "pork", "vegetarian"];

// gets a random element from an array and returns it
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

//uses the APIs and parameters to return suggestion names, images, and recipe url
function apis(region) {
    console.log(region)

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${pickRandom(foodQueries)}&app_id=1802ebf5&app_key=c4815f7f4cc77e6493a25d7413cc910b&cuisineType=${region}`)
        .then(response => response.json())
        .then(data => {
            let resultsF = pickRandom(data.hits);
            foodTitle.textContent = resultsF.recipe.label;
            foodImg.setAttribute("src", resultsF.recipe.image);
            foodUrl.setAttribute("href", resultsF.recipe.url);
            foodUrl.setAttribute("target", "_blank");
            foodUrl.textContent = "Click here to view the recipe";
            recipeAction.setAttribute("class", "hide");
            recipeSuggestion.removeAttribute("class");
            storePastSearches("previousRecipe", resultsF.recipe.label);
            console.log(resultsF);
            fetch("https://imdb-api.com/en/API/Top250Movies/k_tq6blagh")
                .then(response => response.json())
                .then(data => {
                    let resultsM = pickRandom(data.items);
                    movieTitle.textContent = resultsM.title;
                    movieImg.setAttribute("src", resultsM.image);
                    movieAction.setAttribute("class", "hide");
                    titleSuggestion.removeAttribute("class");
                    storePastSearches("previousMovie", resultsM.title);
                    console.log(resultsM);
                })
        });
    displayPastSearches()
};

//puts the food and movie suggestions on the webpage
function displayResults(region) {
    apis(region);
};


function storePastSearches(key, result) {
    localStorage.setItem(key, result);
};

function displayPastSearches() {
    foodStorage.innerHTML = localStorage.getItem("previousRecipe");
    movieStorage.innerHTML = localStorage.getItem("previousMovie");
};


//adds a click event to the entire navigation bar so any button clicked will have an action
container.addEventListener("click", function (event) {
    let element = event.target
    if (element.matches(".button")) {
        let state = element.getAttribute("id");
        displayResults(state) //displayResults('american')
    }
});

