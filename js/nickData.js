    const localStorageKey = "nickStorage";

    // initialize the database in memory as an object 
    const HomeInventoryDatabase = {};

    // Init all of the tables (i.e. arrays) that you want to use in DB

    HomeInventoryDatabase.intro = "Actor Nicolas Cage, star of such films as Moonstruck and The Rock, is known for his intense on- and off-screen personality, as well as his passion for method acting.";

    // filled (pushed) below with portraitInfo object
    HomeInventoryDatabase.skills = ["Acting", "Smiling", "Standing Tall"];
    HomeInventoryDatabase.works = [];
    HomeInventoryDatabase.residence = ["Malibu", "Longbeach", "Paradise Island"];
    HomeInventoryDatabase.collaborators = ["Quentin Tarantino", "John Travolta", "Steve Buschemi", 
        "Sean Connery", "Ed Harris", "Julianne Moore", "Meryl Streep", "Maggie Gyllenhaal", "Judy Greer"];
    HomeInventoryDatabase.awards = [];

    // objects for works
    const theRock = {
        name: "The Rock",
        photo: "./image/nickImg/theRock.jpg"
    }

    HomeInventoryDatabase.works.push(theRock);

    const conAir = {
        name: "Con Air",
        photo: "./image/nickImg/conAir.jpg"
    }

    HomeInventoryDatabase.works.push(conAir);

    const faceOff = {
        name: "Face Off",
        photo: "./image/nickImg/faceOff.jpg"
    }

    HomeInventoryDatabase.works.push(faceOff);


    /*******************/
    /* awards info here *
    /*******************/

    const academyAward = {
        name: "Academy Award for Best Actor",
        movie: "Leaving Las Vegas",
        year: "1996"

    }

    // push to array
    HomeInventoryDatabase.awards.push(academyAward);

    const goldenGlobe = {
        name: "Golden Globe Award for Best Actor",
        movie: "Leaving Las Vegas",
        year: "1996"
    }

    HomeInventoryDatabase.awards.push(goldenGlobe);

    const mtvAward = {
        name: "MTV Movie Award for Best On-Screen Duo",
        movie: "Face/Off, The Rock",
        year: "1997, and 1998"
    }

    HomeInventoryDatabase.awards.push(mtvAward);


    // I needed to put saveDatabase in here so it had access to localStorage variable
    const saveNickDatabase = function (databaseObject) {
        // convert the object into a string.
        const stringifiedDatabase = JSON.stringify(databaseObject);
        
        // create a key in local storage, and store the string version
        // of your inventory database as the value
    
        localStorage.setItem(localStorageKey, stringifiedDatabase);
    }


    // Persist the database to localStorage
    saveNickDatabase(HomeInventoryDatabase, "HomeInventory");


