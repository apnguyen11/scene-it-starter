//var watchlist = []
// var mappedMovies = movieData.map(function(movieObject){
//     return movieObject
// })
//console.log(mappedMovies)
var searched = []


// function saveToWatchList(imdbID){
//     var movie = movieContainer.find(function(currentMovie){
//         return currentMovie.imdbID == imdbID 
//     })
//     var watchListJSON = localStorage.getItem('watchList');
//     var watchlist = JSON.parse(watchListJSON)
//     if(watchlist === null){
//         console.log('watchlist null')
//         watchlist = []
//     } 
//     watchlist.push(movie);
//     watchListJSON = JSON.stringify(watchlist);
//     localStorage.setItem('watchList', watchListJSON)
// }
   
$(document).ready(document.addEventListener('DOMContentLoaded', function(){
    function renderMovies(movieArray){ 
        var movieHTML = movieArray.map(function(currentMovie){    
            
            return `
            <div class="card text-white bg-primary col-3 mx-3 px-3 my-3 py-3" style="width: 18rem;">
            <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
            <div class="body" style="display:flex; flex-direction: column; padding-top: 15px" >
                <div>
                <h5 class="card-title title">${currentMovie.Title}</h5>
                </div>
                <div>
                <button id="addButton" onclick="saveToWatchList('${currentMovie.imdbID}')" type="button" href="#" class="btn btn-warning add-movie-btn">Add Movie</button>
                <p class="card-text"><span>${currentMovie.Year}</span></p>
                </div>
            </div>
            </div>
            `  
        });
        return movieHTML.join("")
    }
    var movieContainer = document.getElementById('movies-container');
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();  
        var inputValue = $('#input').val().toLowerCase() ;
        var urlEncodedSearchString = encodeURIComponent(inputValue)
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
            .then(function(response) {
                movieContainer.innerHTML = renderMovies(response.data.Search)
                searched.push(response.data.Search)
                console.log(searched[0])
                // var addButton = document.getElementById('addButton');
                // addButton.addEventListener('click', function saveToWatchList(imdbID))
        })
        
       
    })
    
}))

function saveToWatchList(imdbID){
    var movie = searched[0].find(function(currentMovie){
        return currentMovie.imdbID == imdbID 
    })
    var watchListJSON = localStorage.getItem('watchList');
    var watchlist = JSON.parse(watchListJSON)
    if(watchlist === null){
        console.log('watchlist null')
        watchlist = []
    } 
    watchlist.push(movie);
    watchListJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchList', watchListJSON)
}











