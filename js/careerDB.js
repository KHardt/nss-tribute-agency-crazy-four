const NicolasCageDB = {};

NicolasCageDB.career = [];

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

NicolasCageDB.career.push(intro, skillTalents, works, residences,awards)

console.log(NicolasCageDB.career)
