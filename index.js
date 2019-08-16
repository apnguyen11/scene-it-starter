$(document).ready(document.addEventListener('DOMContentLoaded', function(){
    function renderMovies(movieArray){
        var movieHTML = movieArray.map(function(currentMovie){  
            return `
            <div class="card text-white bg-primary col-3 mx-3 px-3 my-3 py-3" style="width: 18rem;">
            <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
            <div class="body" style="display:flex; flex-direction: column; padding-top: 15px" >
                <div>
                <h5 class="card-title">${currentMovie.Title}</h5>
               
                </div>
                <div>
                <a href="#" class="btn btn-warning">Add</a>
                <p class="card-text"><span>${currentMovie.Year}</span></p>
                </div>
            </div>
            </div>
            `  
        });
        return movieHTML.join("")
    }
    var movieContainer = document.getElementById('movies-container');
    movieContainer.innerHTML = renderMovies(movieData);
}))










