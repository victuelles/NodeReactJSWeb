//write a function to retrieve a blob of json
// make ajax request use the 'fetch' function, promise driven (ES2017)
//http://rallycoding.herokuapp.com/api/music_albums

/*
[  
   {  
      "title":"Taylor Swift",
      "artist":"Taylor Swift",
      "url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
      "image":"https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
      "thumbnail_image":"https://i.imgur.com/K3KJ3w4h.jpg"
   },
   ....
*/
/*
function fetchAlbums(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res=>res.json())
    .then(json=>console.log(json))
}*/
//using async await
// 1. add 'async' keyword on function 
// 2. identify the different promises that are created by the function
// 3. assign variable on intermediate value
async function fetchAlbums(){
   //browser will not execute the next line of code until a response is received, but will continue
   //executing other codes 
   const res  = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
   const json = await res.json()
   console.log(json)
}
fetchAlbums()