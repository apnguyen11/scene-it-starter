$(document).ready(document.addEventListener('DOMContentLoaded', function(){
    var watchListStorage = localStorage.getItem('watchList');
    var watchlist = JSON.parse(watchListStorage)
    var mappedMovies = watchlist.map(function(movie){
        
        return `
        <div class="card text-white bg-primary col-3 mx-3 px-3 my-3 py-3" style="width: 18rem;">
        <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
        <div class="body" style="display:flex; flex-direction: column; padding-top: 15px" >
            <div>
            <h5 class="card-title title">${movie.Title}</h5>
            </div>
            <div>
            <button onclick="saveToWatchList('${movie.imdbID}')" type="button" href="#" class="btn btn-warning add-movie-btn">Add Movie</button>
            <p class="card-text"><span>${movie.Year}</span></p>
            </div>
        </div>
        </div>
        `  
    }).join("")

    
    var movieContainer = document.getElementById('movies-container');
    movieContainer.innerHTML = mappedMovies
}));