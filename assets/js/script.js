// Global Variables 
let movieInfo;
// let americanBtn = document.querySelector("#american");
// let chineseBtn = document.querySelector("#chinese");
// let frenchBtn = document.querySelector("#french");
// let italianBtn = document.querySelector("#italian");
// let koreanBtn = document.querySelector("#korean");
// let indianBtn = document.querySelector("#indian");
// americanBtn.addEventListener('click', displayResults);
// let button = document.querySelectorAll(".button");
// consolidate data and get data on the page. 
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
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            let result = pickRandom(data.hits);
            console.log(result);

            let foodContainer = document.querySelector("#food-container");
            let div = document.createElement("div");
            // food image
            let img = document.createElement("img");
            //food title
            let foodTitle = document.createElement("h3");
            // link to recipe
            let url = document.createElement("a");
            
            // let healthLabels = document.createElement("ul");




            foodTitle.textContent = result.recipe.label;
            console.log(foodTitle)
            foodContainer.appendChild(foodTitle);

            img.setAttribute("src", result.recipe.image);
            console.log(img);
            foodContainer.appendChild(div);
            div.classList.add("food-results");
            div.appendChild(img);

            url.setAttribute("href", result.recipe.url);
            url.setAttribute("target", "_blank");
            url.textContent = "recipe HERE";
            console.log(url);
            div.appendChild(url);

            // healthLabels = ""
            // for (let i = 0; i < result.recipe.healthLabels.length; i++) {
            // healthLabels.textContent = result.recipe.healthLabels[i];
            // console.log(healthLabels);
            // div.appendChild(healthLabels);
            // }
        });
};

function movieApi(region) {
    console.log(region);
    //append the region string onto the fetch request based on api specs
    fetch("_blankhttps://imdb-api.com/en/API/Top250Movies/k_50wgorsx")
        .then(response => response.json())
        .then(response => {
            console.log(pickRandom(response.items))
        })
};

// utilitiy if we need it---might not--good for conversions
// function regionHandlerForMovies(region) {
//     if (region === 'american') {
//         return 'US'
//     }
// };

// MOVIE CONTAINER

function getMovieResults(movieResults) {
    for (let i = 0; i < 5; i++) {
        console.log(movieResults[i]);

        let movieContainer = document.querySelector("#movie-container");
        let div = document.createElement("div"); // call this ANYTHING but "div"

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




        movieTitle.textContent = "Title: " + insertAPI.title;
        img.setAttribute("src", "******insert API.link");
        img.setAttribute("alt", movieTitle + "poster")
        runtime.textContent = "Runtime: " + insertAPI.runtime;
        description.textContent = "Description: " + insertAPI.description;
        languages.textContent = "Available languages: " + insertAPI.language;



        movieContainer.appendChild(div)
        div.classList.add("movie-results")
        div.appendChild(movieTitle)
        div.appendChild(img)
        div.appendChild(information)
        information.appendChild(runtime)
        information.appendChild(description)
        information.appendChild(languages)

    }
};

