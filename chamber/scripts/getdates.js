const modif = document.lastModified;
console.log(modif);




document.querySelector(".date").textContent= `${modif} the last modified`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('close');
});