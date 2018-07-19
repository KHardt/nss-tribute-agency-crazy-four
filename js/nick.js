 // function expression 
// loadDatabase can be invoked with loadDatabase()
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey);
    // use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString);
  }
  
  const myData = loadDatabase("nickStorage");
  
  const container = document.querySelector(".page-container");
  
  // define a variable for each one of those keys
  // four for loops because you want to do something different
  // with each array within the main object
  
  // collaborators, portrait, aliases, residence
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Collaborators: <br/>";
  container.appendChild(paragraph);
  
  for (let i=0; i < myData.collaborators.length; i++) {
    let currentItem = myData.collaborators[i];
    paragraph.innerHTML += currentItem + "<br/><h1>HEY EVERYONE</h1>";
    // container.appendChild(paragraph);
  }
  
  let portraitPara = document.createElement("p");
  portraitPara.innerHTML = "Portrait info: <br/>";
  container.appendChild(portraitPara);
  for (let i=0; i < myData.portrait.length; i++) {
    for (var key in myData.portrait[i])
    currentItem = myData.portrait[i][key];
    portraitPara.innerHTML += currentItem + "<br/>";
  }
  
  let aliasParagraph = document.createElement("p");
    aliasParagraph.innerHTML = "Alias info: <br/>";
    container.appendChild(aliasParagraph);
  for (let i=0; i < myData.aliases.length; i++) {
    console.log(myData.aliases[i]);
    let currentItem = myData.aliases[i];
    aliasParagraph.innerHTML += currentItem + "<br/>";
    
  }
  
  let residenceParagraph = document.createElement("p");
    residenceParagraph.innerHTML = "Residence " + "<br/>";
    container.appendChild(residenceParagraph);
  for (let i=0; i < myData.residence.length; i++) {
    console.log(myData.residence[i]);
    let currentItem = myData.residence[i];
    residenceParagraph.innerHTML += currentItem;
    
  }