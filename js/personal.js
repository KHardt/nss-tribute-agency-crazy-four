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
     
     function addFamily(info){
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
    
    console.log(data.personal[1])
    
    //  for (i = 0; i < data.personal[1].length; i++) {
    //     addStuff = document.querySelector(".page-container").innerHTML += `<img src="${data.personal[1].picture}">  ${data.personal[0].birthDate}`
    //  }
    
    
    

}

