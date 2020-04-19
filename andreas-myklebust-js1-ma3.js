// question 1

(a, b) => a - b;

// question 2
const sportsUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(sportsUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      logNames(json);
   })
   .catch(function (error) {
      document.location.href = "error.html";
   });

function logNames(json) {
   const sportsGames = json.results;

   for (let i = 0; i < sportsGames.length; i++)
      console.log(sportsGames[i].name);
}

// question 3

const sentence = "These cats are outrageous.";

const newSentence = sentence.replace("cats", "giraffes");

console.log(newSentence);

// question 4

let userID = "";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.dir(params);

if (params.has("userId")) {
   userID = params.get("userId");
}

switch (userID) {
   case "==> 10":
      document.location.href = "first.html";
      break;
   case "<== 10":
      document.location.href = "second.html";
      break;
   default:
      document.location.href = "third.html";
}

// question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// question 6

const animalsList = document.querySelector(".animals");
const newListItem = document.createElement("li");
const elephantListItem = document.querySelector(".elephants");

newListItem.className = "parrots";

const newAnimal = document.createTextNode("Parrots");

newListItem.appendChild(newAnimal);

animalsList.appendChild(newListItem);

newListItem.after(elephantListItem);

/* This does not make much sense to me (Line 79). It would make more sense to use 

        newListItem.before(elephantListItem); 

    but this was the only way I could make the order 
    of the list items correct in the browser.   */

// question 7

let gameRating = "";
const q7Url = "https://api.rawg.io/api/games/3801";

fetch(q7Url)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      insertRating(json);
   })
   .catch(function (error) {
      console.log(error);
   });

function insertRating(json) {
   const ratingsContainer = document.querySelector(".rating");

   const gameRating = json.rating;

   ratingsContainer.innerText = gameRating;
}
