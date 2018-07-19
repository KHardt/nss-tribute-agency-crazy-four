const NicolasCageDB = {};

NicolasCageDB.execSummary = [];
NicolasCageDB.career = [];
NicolasCageDB.personal = [];
NicolasCageDB.newFeed = [];

//Exec Summary stuff
const collaborators = ["testPerson", "test2person"] 
const portrait = {
    name: "Nicholas Cage",
    url: "https://nerdist.com/wp-content/uploads/2015/12/Nicolas-Cage-Con-Air.jpg"
}
const alias = ["Elvis", "Evil"];

const currentResidence = {
    location: "Las Vegas,Nevada",
    date: "1981-present",
}
NicolasCageDB.execSummary.push(collaborators)
NicolasCageDB.execSummary.push(portrait)
NicolasCageDB.execSummary.push(alias)
NicolasCageDB.execSummary.push(currentResidence)

// Persist the database to localStorage
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
   const stringifiedDatabase = JSON.stringify(databaseObject)

   /*
       Create a key in local storage, and store the string
       version of your inventory database as the value
   */
   localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(NicolasCageDB.execSummary, "NicolasCageDB")
//saveDatabase(HomeInventoryDatabase, "HomeInventory")



const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log(loadDatabase("NicolasCageDB"));

//var Element = document.getElementById("page-container").innerHTML;


  

    


