
var searched = []
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
                <button id="addButton" onclick="saveToWatchList('${currentMovie.imdbID}'); this.disabled=true" type="button" href="#" class="btn btn-warning add-movie-btn">Add Movie</button>
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
function clearWatchList(){

    var cleared = localStorage.clear('watchList')
    location.reload()
    return cleared
}














