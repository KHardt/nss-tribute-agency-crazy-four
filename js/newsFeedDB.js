const NicolasCageDBNews = {};

NicolasCageDBNews.newsFeed =[

   {
       name: "Chilling to the BONE!!!",
       date: "December 2013",
       location: "New York and Mongolia",
       image: "../image/nic-cage-dinosaur-skull.jpg",
       type: "Drama",
       collaborators: "US attourney of Manhattan",
       information: "Cage found himself in a pickle after bidding and buying a rare dinosaur skull. Soon thereafter the US attourney of Manhattan and the Mongolian government moved in to determine the skull as smuggled illegally to the U.S.A. Cage is not accused of wrong doing and has returned the piece. Nic paid $276,000 for the artifact.",
       link: href = "https://www.independent.co.uk/arts-entertainment/films/news/nicolas-cage-to-return-stolen-dinosaur-skull-to-the-mongolian-government-a6784081.html"
   },
   {
       name: "Name of news!",
       date: "date2",
       location: "location2",
       image: "../image/cage-type-movies.png",
       type: "type2",
       collaborators: "collaborators",
       information: "sdfsdfsdf sdafasdfs sdfsdfsdf sdffsdf",
       link: href ="https://fivethirtyeight.com/features/the-five-types-of-nicolas-cage-movies/"
   },
   {
       name: "Name of news!",
       date: "date3",
       location: "location3",
       image: "../image/mandy-movie-nick.jpeg",
       type: "type3",
       collaborators: "collaborators",
       information: "sdfsdfsdf sdafasdfs sdfsdfsdf sdffsdf",
       link: href = "https://bloody-disgusting.com/movie/3510526/weve-got-fresh-batch-images-insane-nic-cage-film-mandy/"
   },

]






// console.log(NicolasCageDBNews.newsFeed)

// Persist the database to localStorage
const saveDatabaseNews = function (databaseObjectNews, localStorageKeyNews) {
   /*
       Convert the Object into a string.
   */
  const stringifiedDatabaseNews = JSON.stringify(databaseObjectNews)

  /*
      Create a key in local storage, and store the string
      version of your inventory database as the value
  */
  localStorage.setItem(localStorageKeyNews, stringifiedDatabaseNews)
}
saveDatabaseNews(NicolasCageDBNews.newsFeed, "NicolasCageDBNewsFeed")