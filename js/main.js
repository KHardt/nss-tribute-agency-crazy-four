// code bootstrap needed for carousel.  JQuery reference so make sure CDN included on index.html

$('.carousel').carousel({
    interval: 2000
})

 // add event listeners that take care of nav loading proper content to DOM
 // #Executive, #Career, #Personal, #Newsfeed

 const exec = document.querySelector("#Executive");
 exec.addEventListener("click", execFunc);

 const career = document.querySelector("#Career");
 career.addEventListener("click", careerFunc);

 const personal = document.querySelector("#Personal");
 personal.addEventListener("click", personalFunc);

 const newsfeed = document.querySelector("#Newsfeed");
 newsfeed.addEventListener("click", newsfeedFunc);

/*
* Teammate's respective function for their data handling will go here
* and then be called when their button on index.html is clicked
*/

 function execFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML += "<h1>TEST TEST TEST</h1><br/>";
 }

 
 function careerFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML = "<h1>Career page information to be loaded from database within this function</h1><br/>"
 }

 function personalFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML = "<h1>Personal Page information to be loaded from DB within this func";
 }

 function newsfeedFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML = "<h1>Newsfeed Page information to be loaded from DB within this func";
 }

  
 
 // function expression 
// loadDatabase can be invoked with loadDatabase()
const loadDatabase = function (localStorageKey) {
  // Get the string version of the database
  const databaseString = localStorage.getItem(localStorageKey);
  // use JSON.parse() to convert the string back into an object
  return JSON.parse(databaseString);
}

// myData is now a reference to nickStorage DB
const myData = loadDatabase("nickStorage");


const container = document.querySelector(".page-container");

// define a variable for each one of those keys
// four for loops because you want to do something different
// with each array within the main object

// collaborators, portrait, aliases, residence
let paragraph = document.createElement("p");
paragraph.innerHTML = "<strong>Introduction</strong> <br/>";
container.appendChild(paragraph);
paragraph.innerHTML += myData.intro;


let portraitPara = document.createElement("p");
portraitPara.innerHTML = "<strong>Skills/talents</strong> <br/>";
container.appendChild(portraitPara);
// for (let i=0; i < myData.portrait.length; i++) {
//   for (var key in myData.portrait[i])
//   currentItem = myData.portrait[i][key];
//   portraitPara.innerHTML += currentItem + "<br/>";
// }
for (let i=0; i < myData.skills.length; i++) {
  currentItem = myData.skills[i];
  portraitPara.innerHTML += currentItem + "<br/>";
}

let aliasParagraph = document.createElement("p");
  aliasParagraph.innerHTML = "<strong>Public Works</strong> <br/>";
  container.appendChild(aliasParagraph);

  for (let i=0; i < myData.works.length; i++) {
    for (var key in myData.works[i]) {
      currentItem = myData.works[i][key];
      // if key === photo, then display photo to dom
      if (key === "photo") {
        // create image object and append
        let x = document.createElement("IMG");
        // if this doesn't work try adding quotes to currentItem w/ concatenate
        // currentItem += `${currentItem}`;
        x.setAttribute("src", currentItem);
        container.appendChild(x);
        // don't write image url to DOM, jump above to parent loop's next iteration
        break;
      }
      aliasParagraph.innerHTML += currentItem + "<br/>";
    }
  }
// for (let i=0; i < myData.works.length; i++) {
//   console.log(myData.works[i]);
//   let currentItem = myData.works[i];
//   aliasParagraph.innerHTML += currentItem + "<br/>";
  
// }

let residenceParagraph = document.createElement("p");
  residenceParagraph.innerHTML = "<strong>Residence</strong> " + "<br/>";
  container.appendChild(residenceParagraph);
for (let i=0; i < myData.residence.length; i++) {
  // console.log(myData.residence[i]);
  let currentItem = myData.residence[i];
  residenceParagraph.innerHTML += currentItem + "<br/>";
  
}

let collabParagraph = document.createElement("p");
  collabParagraph.innerHTML = "<strong>Collaborators</strong> " + "<br/>";
  container.appendChild(collabParagraph);
for (let i=0; i < myData.collaborators.length; i++) {
  // console.log(myData.collaborators[i]);
  let currentItem = myData.collaborators[i];
  collabParagraph.innerHTML += currentItem + "<br/>";
}

let awardsParagraph = document.createElement("p");
  awardsParagraph.innerHTML = "<strong>Awards</strong> " + "<br/>";
  container.appendChild(awardsParagraph);
  for (let i=0; i < myData.awards.length; i++) {
    for (var key in myData.awards[i]) {
      currentItem = myData.awards[i][key];
      awardsParagraph.innerHTML += currentItem + "<br/>";
    }
    awardsParagraph.innerHTML += "<br/>";
  }