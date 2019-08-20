var watchList = []
function saveToWatchList(imdbid){
    watchList.push(imdbid)
   }
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
                <button onclick="saveToWatchList('${currentMovie.imdbID}')" type="button" href="#" class="btn btn-warning add-movie-btn">Add Movie</button>
                <p class="card-text"><span>${currentMovie.Year}</span></p>
                </div>
            </div>
            </div>
            `  
        });

      

       //var addBtn = document.getElementsByClassName("add-movie-btn")
        return movieHTML.join("")
    }
    var movieContainer = document.getElementById('movies-container');
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault()
        var inputValue = $('#input').val().toLowerCase() 
        var filteredMovies = movieData.filter((movie) => { 
            let titleArray = movie.Title.split(' ').map(function(word){
                return word.toLowerCase();
            })

            if(titleArray.includes(inputValue)){
                return true
            } else {
                return false 
            }
        }) 

        movieContainer.innerHTML = renderMovies(filteredMovies);
       
    })
    
}))










