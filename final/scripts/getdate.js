const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome! Let us know if you have any questions.!`;
}


numVisits++;


localStorage.setItem("numVisits-ls", numVisits);

function myFunction(event) {
  var n = event.timeStamp;
  document.getElementById("demo").innerHTML = n;
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


const modif = document.lastModified;
console.log(modif);




document.querySelector(".date").textContent= `${modif} the last modified`;
