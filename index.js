let topTitle = document.querySelector('.top-title').textContent
let topImg = document.querySelector('.top-news').style.background;
let topDesc = document.querySelector('.hline2-title').textContent

let hline1Title = document.querySelector('.hline1-title').textContent
let hline1Img = document.querySelector('.hline1-img').src
let hline1p = document.querySelector('.hline1-p').textContent

let hline2Title = document.querySelector('.hline2-title').textContent
let hline2Img = document.querySelector('.hline2-img').src
let hline2p = document.querySelector('.hline2-p').textContent

document.querySelector('button').addEventListener('click', test)
function test(){
let city = document.querySelector('#city').value.toLowerCase()
fetch(`http://api.mediastack.com/v1/news?access_key=e046e8d7db98d4cf3a1bf2f9d5897f8e&keywords=${city}&sources=en,-de`)
.then(res => res.json())
.then(data =>{

})
}