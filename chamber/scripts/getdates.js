fetch("scripts/members.json")
	.then(function (response) {
		return response.json();
	})

	.then(function (members) {
		let placeholder = document.querySelector("#data-output")
		let out = "";
		for (let member of members) {
			out += ` <tr> 
				<td> ${member.name}</td>
				<td> ${member.adress}</td>
				<td> ${member.phonenumbers}</td>
				<td> ${member.websiteurl}</td>
				<td> <img src='${member.images}'</td>
				<td> ${member.membershiplevels}</td>
			</tr>`;
		}

		placeholder.innerHTML = out;
	})


const modif = document.lastModified;
console.log(modif);




document.querySelector(".date").textContent = `${modif} the last modified`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('open');
// 	hambutton.classList.toggle('close');
// });


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
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
document.querySelector('.today').textContent = Date.now();
const msToDays = 86400000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#today");
const christmasElement = document.querySelector("#christmas");
const christmasDateElement = document.querySelector("#christmasDate");
const daysElement = document.querySelector("#daysleft");

// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;
