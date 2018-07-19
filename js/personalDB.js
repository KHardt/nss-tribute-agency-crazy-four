const NicolasCageDB = {};

NicolasCageDB.personal = [];

const personalBasic = {
    birthDate: "January 7th, 1964",
    birthCity: "Long Beach, CA",
    birthName: "Nicolas Kim Coppola",
    countryOfResidence: "Las Vegas, USA",
}

const family = [
    {
        name: "Francis Ford Coppola",
        relationship: "Uncle",
        picture: "#",
    },

    {
        name: "Patricia Arquette",
        relationship: "ex-spouse",
        picture: "#",
        begin_end: "1995-2001",
    },

    {
        name: "Lisa Maria Presley",
        relationship: "ex-spouse",
        picture: "#",
        begin_end: "2002-2004"

    }
];


NicolasCageDB.personal.push(personalBasic, family)

console.log(NicolasCageDB.personal);



const saveDatabase = function (databaseObject, localStorageKey) {
   
    const stringifiedDatabase = JSON.stringify(databaseObject)

   
   localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(NicolasCageDB.personal, "NicolasCageDB")


const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)

    
    return JSON.parse(databaseString)
}
console.log(loadDatabase("NicolasCageDB"));



