const curentTemp = document.querySelector ('#curent-temp');
const description = document.querySelector('#description')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.296067345725014&lon=-112.06998053320164&&units=imperial&&appid=540a684f158f6278139dbc3d9487f7d5';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
 
apiFetch();

function displayResults(data){
    curentTemp.innerHTML = `${data.main.temp}&deg;F`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`
}

async function apiFetch () { 

try{ 

 const response = await fetch(forecastUrl); 
const data = await response.json(); 

 if(response.ok){ 



let one1 = data.list[3].dt_txt.slice(8,11); 

let one2 = data.list[3].weather[0].description; 

 let dayone = document.createElement('p'); 

 let daytwo = document.createElement('p'); 

 dayone.textContent= `November ${one1} `; 
 daytwo.textContent= one2; 

 one.appendChild(dayone); 

one.appendChild(daytwo); 

 

 let one3 = data.list[11].dt_txt.slice(8,11); 

 let one4 = data.list[11].weather[0].description; 

let daythree = document.createElement('p'); 

let dayfour = document.createElement('p'); 

daythree.textContent= `November ${one3} ` 

dayfour.textContent= one4; 

one.appendChild(daythree); 

one.appendChild(dayfour); 

 
let one5 = data.list[19].dt_txt.slice(8,11); 

let one6 = data.list[19].weather[0].description; 

let dayfive = document.createElement('p'); 

let daysix = document.createElement('p'); 

dayfive.textContent= `November ${one5} ` 

 daysix.textContent= one6; 
 one.appendChild(dayfive); 

one.appendChild(daysix); 
}else{ 

throw Error(await response.text()); 

 } 

 } 

 catch (error){ 

console.log(error) 

} 

 } 