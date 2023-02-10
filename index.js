let topTitle = document.querySelector('.top-title')
let topImg = document.querySelector('.top-news').style.background;
let topDesc = document.querySelector('.top-p');

let hline1Title = document.querySelector('.hline1-title');
let hline1Img = document.querySelector('.hline1-img');
let hline1p = document.querySelector('.hline1-p');

let hline2Title = document.querySelector('.hline2-title');
let hline2Img = document.querySelector('.hline2-img');
let hline2p = document.querySelector('.hline2-p');

document.querySelector('button').addEventListener('click', news)


function news(){
let city = document.querySelector('#city').value.toLowerCase()
fetch(`http://api.mediastack.com/v1/news?access_key=e046e8d7db98d4cf3a1bf2f9d5897f8e&keywords=${city}&sources=en,-de`)
.then(res => res.json())
.then(data =>{
    console.log(data)

    topTitle.textContent = data.data[0].title;
    topDesc.textContent = data.data[0].description;

    hline1Img.src = data.data[1].image;
    hline1p.textContent = data.data[1].description;

    hline2Img.src = data.data[2].image;
    hline2p.textContent = data.data[2].description;

    //Prevent text overflow for headline and top news
    //Top News
    //Headline 1
        if(data.data[1].title.length >= 60){
            hline1Title.textContent = data.data[1].title.substring(0,60)+'...';
        }
        else hline1Title.textContent = data.data[1].title;

    //Headline 2
        if(data.data[2].title.length >= 60){
            hline2Title.textContent = data.data[2].title.substr(0,60) +'...';
        }
        else hline2Title.textContent = data.data[2].title;
    
    if(data.data[1].image == undefined || data.data[1].image == null){
        return hline1Img.src = 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
    }
    if(data.data[2].image == undefined || data.data[2].image == null){
        return hline2Img.src = 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
        
    }
})

}