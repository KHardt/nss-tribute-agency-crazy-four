const loadDatabase = function (localStorageKey) {
    
    const databaseString = localStorage.getItem(localStorageKey)

    
    return JSON.parse(databaseString)
} 

let data = loadDatabase("NicolasCageDB")
//console.log(data) 


//loop was to verify all info was showing up which it is. 
//Writing to dom line can be used independently **NOTE cannot use dot notation completely to path to the desired object since part is in array- need index number as well
for (i = 0; i < data.personal.length; i++) {
    console.log(data.personal[i]);
    
}

let addStuff = document.querySelector(".page-container").innerHTML = (`Born: ${data.personal[0].birthCity}  ${data.personal[0].birthDate}`);

/*data.personal.forEach(element => {
    let addStuff1 = document.querySelector(".page-container").innerHTML += `<p>Born: ${element.birthDate}<p>`;
 }); */


