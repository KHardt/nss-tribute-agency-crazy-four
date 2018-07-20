const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log(loadDatabase("NicolasCageDB"));


const container=document.getElementById("executivesummery")

const imgPortrait=document.createElement("img")
imgPortrait.src=NicolasCageDB.execSummary.portrait.url
container.appendChild(imgPortrait)


const portraitTitle=document.createElement("h2")
portraitTitle.className="portraitHeader"
portraitTitle.innerHTML=`Name: ${NicolasCageDB.execSummary.portrait.name}`
container.appendChild(portraitTitle)



//const container=document.getElementById("executivesummery")
const aliasNames=document.createElement("h4")
aliasNames.className="Aliasheader"
aliasNames.innerHTML=`Alias: ${NicolasCageDB.execSummary.alias.First} ${NicolasCageDB.execSummary.alias.Second}`
//aliasNames.innerHTML=NicolasCageDB.execSummary.alias.Second
container.appendChild(aliasNames)


const collabNames = document.createElement("h4")
collabNames.className="collabHeader"
collabNames.innerHTML=`${NicolasCageDB.execSummary.collaborators.testperson1} ${NicolasCageDB.execSummary.collaborators.testperson2}`
container.appendChild(collabNames)

const currentRes=document.createElement("h4")
currentRes.className="resHeader"
currentRes.innerHTML=`${NicolasCageDB.execSummary.currentResidence.location} ${NicolasCageDB.execSummary.currentResidence.date}`
container.appendChild(currentRes)




