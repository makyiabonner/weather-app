let topTitle = document.querySelector('.top-title')
let topImg = document.querySelector('.top-news').style.background;
let topDesc = document.querySelector('.hline2-title');

let hline1Title = document.querySelector('.hline1-title');
let hline1Img = document.querySelector('.hline1-img');
let hline1p = document.querySelector('.hline1-p');

let hline2Title = document.querySelector('.hline2-title');
let hline2Img = document.querySelector('.hline2-img');
let hline2p = document.querySelector('.hline2-p');

document.querySelector('button').addEventListener('click', test)
function test(){
let city = document.querySelector('#city').value.toLowerCase()
fetch(`http://api.mediastack.com/v1/news?access_key=e046e8d7db98d4cf3a1bf2f9d5897f8e&keywords=${city}&sources=en,-de`)
.then(res => res.json())
.then(data =>{
    topTitle.textContent = data.data[0].title;
    topDesc.textContent = data.data[0].description;

    hline1Title.textContent = data.data[1].title;
    hline1Img.src = 
    hline1p.textContent = data.data[1].description;

    hline2Title.textContent = data.data[2].title;
    hline2Img.src = 
    hline2p.textContent = data.data[2].description;
})
}