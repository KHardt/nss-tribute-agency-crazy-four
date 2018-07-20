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

function execFunc() {
  // console.log("clearing document");
  container.innerHTML = "";
  //container.innerHTML += "<h1>Executive Page to be loaded from DB within this func</h1><br/>";
  priyaExective();
}

// Nick Black's Area
function careerFunc() {
  // console.log("clearing document");
  container.innerHTML = "";
  console.log("executing Nick Func");
  nickBigAssFunction();
}


function personalFunc() {
  // console.log("clearing document");
  container.innerHTML = "";
  klausBigFunction();
}

// D
function newsfeedFunc() {
  // console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML = "<h1>Newsfeed  Page information to be loaded from DB within this func";
  DejanBigAssFunction();
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




  const priyaExective = function () {



      const loadDatabase = function (localStorageKey) {
        // Get the string version of the database
        const databaseString = localStorage.getItem(localStorageKey)

        // Use JSON.parse() to convert the string back into an object
        return JSON.parse(databaseString)
      }
      console.log(loadDatabase("NicolasCageDB"));


      const container = document.querySelector(".page-container")

      const imgPortrait = document.createElement("img")
      imgPortrait.className = "imgPort"
      imgPortrait.src = NicolasCageDB.execSummary.portrait.url
      container.appendChild(imgPortrait)




      const portraitTitle = document.createElement("h2")
      portraitTitle.className = "portraitHeader"
      portraitTitle.innerHTML = `Name: ${NicolasCageDB.execSummary.portrait.name} `
      container.appendChild(portraitTitle)


      //const container=document.getElementById("executivesummery")
      const aliasNames = document.createElement("h4")
      aliasNames.className = "Aliasheader"
      aliasNames.innerHTML = `Alias: ${NicolasCageDB.execSummary.alias.First} , ${NicolasCageDB.execSummary.alias.Second}`
      //aliasNames.innerHTML=NicolasCageDB.execSummary.alias.Second
      container.appendChild(aliasNames)


      const collabNames = document.createElement("h4")
      collabNames.className = "collabHeader"
      collabNames.innerHTML = `Mother: ${NicolasCageDB.execSummary.collaborators.Mother}<br> Father:  ${NicolasCageDB.execSummary.collaborators.Father}`
      container.appendChild(collabNames)

      const currentRes = document.createElement("h4")
      currentRes.className = "resHeader"
      currentRes.innerHTML = `Location: ${NicolasCageDB.execSummary.currentResidence.location} ${NicolasCageDB.execSummary.currentResidence.date}`
      container.appendChild(currentRes)



    }



  // Klaus fucntion for handling data here

  function klausBigFunction() {

    const loadDatabasePersonal = function (localStorageKey) {

      const databaseString = localStorage.getItem(localStorageKey)


      return JSON.parse(databaseString)
    }

    let data = loadDatabasePersonal("NicolasCageDBPersonal")
    //console.log(data) I did this to confirm. Then forgot why. Then paniced I did not confirm then asked Steve and drew a blank again


    //loop was to verify all info was showing up which it is. 
    //Writing to dom line can be used independently **NOTE cannot use dot notation completely to path to the desired object since part is in array- need index number as well
    // for (i = 0; i < data.personal.length; i++) {
    //     console.log(data.personal[i]);

    // }

    let addStuff = document.querySelector(".page-container")

    /*
    addStuff.innerHTML += 
        `<div>
            <h2>Born: ${data.personal[0].birthCity}  ${data.personal[0].birthDate}</h2>
            <h4>Famous Relations:</h4>
        </div>`; */
console.log(data)

    let pInfo = data.personal[0];
    function addPersonalData(test1) {
      addStuff.innerHTML +=
        `<div>
            <h2>Born: ${test1.birthCity}  ${test1.birthDate}</h2>
            <h4>Famous Relations:</h4>
        </div>`;
    }

    addPersonalData(pInfo)

    /*
    /* data.personal.forEach(element => {
        let addStuff1 = document.querySelector(".page-container").innerHTML += `<p>Born: ${element.birthDate}<p>`;
     }); */


    let person = data.personal[1];

    function addFamily(info) {
      for (let i = 0; i < info.length; i++) {
        addStuff.innerHTML +=
          `<div class="person-flex">
                    <img src="${person[i].picture}">  
                    <div>
                        <h2>${person[i].name}</h2>
                        <h3>${person[i].relationship}</h3>
                        <h3>${person[i].begin_end}</h3>
                    </div>
                </div>`;
      }
    }
    addFamily(person);

    console.log(data)

    //  for (i = 0; i < data.personal[1].length; i++) {
    //     addStuff = document.querySelector(".page-container").innerHTML += `<img src="${data.personal[1].picture}">  ${data.personal[0].birthDate}`
    //  }




  } // klausBigFunction()


  function DejanBigAssFunction() {

    const loadDatabaseNews = function (localStorageKeyNews) {
      // Get the string version of the database
      const databaseStringNews = localStorage.getItem(localStorageKeyNews)

      // Use JSON.parse() to convert the string back into an object
      return JSON.parse(databaseStringNews)
    }
    let array = loadDatabaseNews("NicolasCageDBNewsFeed")
    // console.log(loadDatabaseNews("NicolasCageDBNewsFeed"));

    console.log(array)

    const container = document.querySelector(".page-container");


    function addNews(info1) {
      for (let i = 0; i < info1.length; i++) {
        console.log(info1)
        container.innerHTML +=
          `<div class="newsCSS">
            <img src="${info1[i].image}" class="image">
            <div class="newsDetails">
                <h2>${info1[i].name}</h2>
                <p>${info1[i].date}<p>
                <h3>${info1[i].location}</h3>
                <h3>${info1[i].collaborators}</h3>
                <p>${info1[i].information}</p>
                <h5>${info1[i].link}</h5>
              </div>
            </div>`
      }
    }
    addNews(array);
  }
  


  