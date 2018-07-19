$('.carousel').carousel({
    interval: 2000
  })

 // add event listeners that take care of nav loading proper content to DOM
 // executive: id: #Executive

 const exec = document.querySelector("#Executive");
 exec.addEventListener("click", execFunc);

 function execFunc() {
  const container = document.querySelector(".page-container");
  console.log("clearing document");
  container.innerHTML = "";
  container.innerHTML += "<h1>TEST TEST TEST</h1><br/>";
 }