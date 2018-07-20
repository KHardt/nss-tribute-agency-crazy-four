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

 // variable container is a reference to the DOM area we want to write
 const container = document.querySelector(".page-container");

/*
* Teammate's respective function for their data handling will go here
* and then be called when their button on index.html is clicked
*/

// P
 function execFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML += "<h1>Executive Page to be loaded from DB within this func</h1><br/>";
 }

 // Nick Black's Area
 function careerFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  // I want a reference to nickBigAssFunction so maybe I can troubleshoot in console
  nickBigAssFunction();
  
  // container.innerHTML = fack;
 }

 // K
 function personalFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML = "<h1>Personal Page information to be loaded from DB within this func";
 }

 // D
 function newsfeedFunc() {
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML = "<h1>Newsfeed  Page information to be loaded from DB within this func";
 }


 /*
 *
 *  Nick Black
 * 
 *  This loads the data from local storage for Nick, and then 
 *  iterates over it creating paragraph html elements and appending them
 *  to the DOM with the appropriate data contained inside.
 * 
 * 
 */ 
 const nickBigAssFunction = function () {
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

  // handle the data inside local storage for nick's data
    
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "<h3>Introduction</h3>";
    container.appendChild(paragraph);
    paragraph.innerHTML += myData.intro;

    let p2 = document.createElement("p");
    p2.innerHTML = "<h3>Skills/talents</h3>";
    container.appendChild(p2);
 
    for (let i=0; i < myData.skills.length; i++) {
      currentItem = myData.skills[i];
      p2.innerHTML += currentItem + "<br/>";
    }

    let p3 = document.createElement("p");
    p3.innerHTML = "<h3>Public Works</h3>";
    container.appendChild(p3);

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
          x.setAttribute("width", "210");
          x.setAttribute("height", "320");
          x.setAttribute("alt", "nic cage photo");
          container.appendChild(x);
          // don't write image url to DOM, jump above to parent loop's next iteration
          break;
        }
        p3.innerHTML += currentItem + "<br/>";
      }
    }

  let p4 = document.createElement("p");
    p4.innerHTML = "<br/><h3>Residence</h3>";
    container.appendChild(p4);
  for (let i=0; i < myData.residence.length; i++) {
    // console.log(myData.residence[i]);
    let currentItem = myData.residence[i];
    p4.innerHTML += currentItem + "<br/>";
  }

  let p5 = document.createElement("p");
    p5.innerHTML = "<h3>Collaborators</h3>";
    container.appendChild(p5);
  for (let i=0; i < myData.collaborators.length; i++) {
    let currentItem = myData.collaborators[i];
    p5.innerHTML += currentItem + "<br/>";
  }

  let p6 = document.createElement("p");
    p6.innerHTML = "<h3>Awards</h3>";
    container.appendChild(p6);
    for (let i=0; i < myData.awards.length; i++) {
      for (var key in myData.awards[i]) {
        currentItem = myData.awards[i][key];
        p6.innerHTML += currentItem + "<br/>";
      }
      p6.innerHTML += "<br/>";
    }

  } // nickBigAssFunction()


