 const NicolasCageDBPersonal = {};

NicolasCageDBPersonal.personal = [];

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
        picture: "../image/francis-ford-coppola-250.jpg",
        begin_end: ""
    },

    {
        name: "Patricia Arquette",
        relationship: "ex-spouse",
        picture: "../image/arquette__140305185045.png ",
        begin_end: "1995-2001",
    },

    {
        name: "Lisa Maria Presley",
        relationship: "ex-spouse",
        picture: "../image/lisa-marie-presley-9542148-1-402.jpg",
        begin_end: "2002-2004"

    }
];


NicolasCageDBPersonal.personal.push(personalBasic, family)

//console.log(NicolasCageDB.personal);



const saveDatabasePersonal = function (databaseObject, localStorageKeyPersonal) {
   
    const stringifiedDatabase = JSON.stringify(databaseObject)

   
   localStorage.setItem(localStorageKeyPersonal, stringifiedDatabase)
}

saveDatabasePersonal(NicolasCageDBPersonal, "NicolasCageDB")


/*const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)

    
    return JSON.parse(databaseString)
} */

//let testIt = loadDatabase("NicolasCageDB")
//console.log(loadDatabase("NicolasCageDB"));



