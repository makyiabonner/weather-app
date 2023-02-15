let topTitle = document.querySelector('.top-title')
let topImg = document.querySelector('.top-news')
let topP = document.querySelector('.top-p');

let hline1Title = document.querySelector('.hline1-title');
let hline1Img = document.querySelector('.hline1-img');
let hline1p = document.querySelector('.hline1-p');

let hline2Title = document.querySelector('.hline2-title');
let hline2Img = document.querySelector('.hline2-img');
let hline2p = document.querySelector('.hline2-p');

document.querySelector('button').addEventListener('click', getNews)

function getNews(){
    let city = document.querySelector('#city').value.toLowerCase()
fetch(`https://newsapi.org/v2/everything?q=${city}&apiKey=dff81faf29a9453b9309efa6b5b274df`)
.then(res => res.json())
.then(data =>{
    console.log(data)

    topImg.style.background = `url(${data.articles[0].urlToImage})`;
    topImg.style.backgroundPosition = 'center';
    topImg.style.backgroundSize = 'cover';
    topImg.style.backgroundRepeat = 'no-repeat';
   

    hline1Img.style.background = `url(${data.articles[1].urlToImage})`;
    hline1Img.style.backgroundPosition = 'center';
    hline1Img.style.backgroundSize = 'cover';
    hline1Img.style.backgroundRepeat = 'no-repeat';

    hline2Img.style.background = `url(${data.articles[2].urlToImage})`;
    hline2Img.style.backgroundPosition = 'center';
    hline2Img.style.backgroundSize = 'cover';
    hline2Img.style.backgroundRepeat = 'no-repeat';
//Prevent text overflow for headline and top news
  //Top News
      //Title
        if(data.articles[0].title.length >= 60){
            topTitle.textContent = data.articles[0].title.substring(0,60)+'...';
        }
        else topTitle.textContent = data.articles[0].title;

      //Description
        if(data.articles[0].description.length >= 90){
            topP.textContent = data.articles[0].description.substring(0,90)+'...';
        }
        else topP.textContent = data.articles[0].description;
    
  //Headline 1
      //Title
        if(data.articles[1].title.length >= 60){
            hline1Title.textContent = data.articles[1].title.substring(0,60)+'...';
        }
        else hline1Title.textContent = data.articles[1].title;

      //Description
        if(data.articles[1].description.length >= 90){
            hline1p.textContent = data.articles[1].description.substring(0,90)+'...';
        }
        else hline1p.textContent = data.articles[1].description;

  //Headline 2
      //Title
        if(data.articles[2].title.length >= 60){
            hline2Title.textContent = data.articles[2].title.substr(0,60) +'...';
        }
        else hline2Title.textContent = data.articles[2].title;
        
      //Description
        if(data.articles[2].description.length >= 90){
            hline2p.textContent = data.articles[2].description.substring(0,90)+'...';
        }
        else hline2p.textContent = data.articles[2].description;
    
    if(data.articles[1].urlToImage == undefined || data.articles[1].urlToImage == null){
        return hline1Img.src = 'https://cdn.vectorstock.com/i/preview-1x/82/99/no.urlToImage-available-like-missing-picture-vector-43938299.jpg';
    }
    if(data.articles[2].urlToImage == undefined || data.articles[2].urlToImage == null){
        return hline2Img.style.background = 'url("https://cdn.vectorstock.com/i/preview-1x/82/99/no.urlToImage-available-like-missing-picture-vector-43938299.jpg")';
        
    }
})

}