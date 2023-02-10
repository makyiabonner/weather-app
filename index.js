let topTitle = document.querySelector('.top-title').textContent
let topImg = document.querySelector('.headline1-title').textContent
let topDesc = document.querySelector('.headline2-title').textContent
document.querySelector('button').addEventListener('click', test)
function test(){
let city = document.querySelector('#city').value.toLowerCase()
fetch(`http://api.mediastack.com/v1/news?access_key=e046e8d7db98d4cf3a1bf2f9d5897f8e&keywords=${city}&sources=en,-de`)
.then(res => res.json())
.then(data =>{

})
}