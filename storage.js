const NicolasCageDB = {};

NicolasCageDB.execSummary = [];
NicolasCageDB.career = [];
NicolasCageDB.personal = [];
NicolasCageDB.newsFeed = [];

//Exec Summary stuff
const collaborators = ["testPerson", "test2person"] 

const portrait = {
    name: "",
    url: "link"
}
const alias = ["Elvis", "Evil"];

const currentResidence = {
    location: "",
    date: "",
}

//Career
const intro = {
    basicInfo: "",

}

const skillTalents = ["acting", "writing"]

const works = [
    {
        name: "Gone in 60 Seconds",
        image: "#"
    },

    {
        name: "Lord of War",
        image: "#"
    }, 

    {
        name: "The Weatherman",
        image: "#"
    }
]

const residences = [
    {
        location: "",
        beginTime: "",
        endTime: ""
    },

    {
        location: "",
        beginTime: "",
        endTime: ""
    },

    {
        location: "",
        beginTime: "",
        endTime: ""
    }
]

const awards = [
    {
        type: "Academy",
        movie: "Leaving Las Vegas",
        date: "1996"
    }

]

//Personal 

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
]

    //NEWSFEED
const events = [

    {
        date: "",
        location: "",
        image: "#",
        type: "",
        collaborators: "",
    },
    {
        date: "",
        location: "",
        image: "#",
        type: "",
        collaborators: "",
        
    },
    {
        date: "",
        location: "",
        image: "#",
        type: "",
        collaborators: "",
        
    },

]




NicolasCageDB.execSummary.push(collaborators, portrait, alias, currentResidence)


NicolasCageDB.career.push(intro, skillTalents, works, residences,awards)


NicolasCageDB.personal.push(personalBasic, family)


NicolasCageDB.newsFeed.push(events)


console.log(NicolasCageDB.execSummary)
console.log(NicolasCageDB.personal)
console.log(NicolasCageDB.newsFeed)
console.log(NicolasCageDB.career)





