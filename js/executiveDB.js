const NicolasCageDB = {};

NicolasCageDB.execSummary = {
    
    
    portrait: {
        name: "Nicholas Cage",
        url: "https://nerdist.com/wp-content/uploads/2015/12/Nicolas-Cage-Con-Air.jpg"
    },
    alias:
    {
        First: "nick",
        Second:"Cage"
    },
    
    
    collaborators: {
        testperson1: "Mother",
        testperson2: "Father"

    },
    
    currentResidence: {
        location: "Las Vegas,Nevada",
        date: "1981-present",
    }
}



console.log(NicolasCageDB.execSummary)


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
//saveDatabase(executiveDatabase, "executivesummery")



// const loadDatabase = function (localStorageKey) {
//     // Get the string version of the database
//     const databaseString = localStorage.getItem(localStorageKey)

//     // Use JSON.parse() to convert the string back into an object
//     return JSON.parse(databaseString)
// }
// console.log(loadDatabase("NicolasCageDB"));

//var Element = document.getElementById("page-container").innerHTML;


