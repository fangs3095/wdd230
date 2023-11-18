const curentTemp = document.querySelector ('#curent-temp');
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