window.addEventListener("load", function(){
    console.log("page loaded");
});

window.onload = function(){

document.getElementById('movie-form').onsubmit = function(){

    return false
}

}



let searchTerm
let searchUrl
let popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
let topratedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
let upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
let nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"


//SEARCH
document.getElementById('btn-search').addEventListener('click', function(){

    searchTerm = document.getElementById('searchTerm').value
    searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&query="+ searchTerm +"&page=1&include_adult=false"

    fetch(searchUrl, {
        method: 'get'
    })

    .then (response => response.json() )

    .then (responseAsJson =>	 {


        console.log(responseAsJson)

        let insert =""

        for(var i = 0; i < responseAsJson.results.length ; i++){

            insert += "<article>"
            insert += "<img src='https://image.tmdb.org/t/p/w185" + responseAsJson.results[i].poster_path      +"'"+ "alt=''>"
            insert += "<h2>"+responseAsJson.results[i].title+"</h2>"
            insert += "<p>"+responseAsJson.results[i].overview+"</p>"
            insert += '<button onclick="modalFunction('+responseAsJson.results[i].id+')">View More</button>'
            insert += "</article>"

        }


        let insertDiv = document.getElementById('insert-content')
        insertDiv.innerHTML = insert
    }
    )

    .catch(function(err) {
        console.log(err)
        let insert=""
        insert += "<h2>No search results for your term. Please Try Again</h2>"
        let insertDiv = document.getElementById('insert-content')
        insertDiv.innerHTML = insert
    })

    document.getElementById('searchTerm').value = ""
})



function fetchURL (url) {

    fetch(url, {
        method: 'get'
    })

    .then (response => response.json() )

    .then (responseAsJson =>	 {

        let insert =""

        for(var i = 0; i < responseAsJson.results.length ; i++){


            insert += "<article>"
            insert += "<img src='https://image.tmdb.org/t/p/w185" + responseAsJson.results[i].poster_path      +"'"+ "alt=''>"
            insert += "<h2>"+responseAsJson.results[i].title+"</h2>"
            insert += "<p>"+responseAsJson.results[i].overview+"</p>"
            insert += '<button onclick="modalFunction('+responseAsJson.results[i].id+')">View More</button>'
            insert += "</article>"


        }


        let insertDiv = document.getElementById('insert-content')
        insertDiv.innerHTML = insert
    }
    )

    .catch(function(err) {
        console.log(err)
        let insert=""
        insert += "<h2>No search results for your term. Please Try Again</h2>"
        let insertDiv = document.getElementById('insert-content')
        insertDiv.innerHTML = insert
    })


}

//POPULAR
document.getElementById('btn-popular').addEventListener('click', function(){
    fetchURL(popularUrl)
})


//TOP RATED
document.getElementById('btn-toprated').addEventListener('click', function(){
    fetchURL(topratedUrl)
})


//UPCOMING
document.getElementById('btn-upcoming').addEventListener('click', function(){
    fetchURL(upcomingUrl)
})

//NOW PLAYING
document.getElementById('btn-nowplaying').addEventListener('click', function(){
    fetchURL(nowPlayingUrl)
})



//modal
function modalFunction (id) {

    let urlModal = "https://api.themoviedb.org/3/movie/"+id+"?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US"


        fetch(urlModal, {
            method: 'get'
        })

        .then (response => response.json() )

        .then (responseAsJson =>	 {

            let insertTitle =""
            let insertImg =""
            let insertOverview =""
            let insertTagline =""
            let insertGenre =""
            let insertLength =""
            let insertVote =""


            insertTitle +=     "<h1>"+responseAsJson.title+"</h1>"
            insertImg +=       "<img src='https://image.tmdb.org/t/p/w342" + responseAsJson.poster_path      +"'"+ "alt=''>"
            insertOverview +=  "<p>"+responseAsJson.overview+"</p>"
            insertTagline += "<h2>"+responseAsJson.tagline+"</h2>"
            insertLength += "<p>"+responseAsJson.runtime+" Minutes</p>"
            insertVote += "<p>"+responseAsJson.vote_average+" out of 10</p>"

            for(var i = 0; i < responseAsJson.genres.length ; i++){


                insertGenre += "<p>"+ responseAsJson.genres[i].name +"</p>"

            }


            let insertDiv = document.getElementById('modalTitle')
            insertDiv.innerHTML = insertTitle

            insertDiv = document.getElementById('modalImage')
            insertDiv.innerHTML = insertImg

            insertDiv = document.getElementById('modalOverview')
            insertDiv.innerHTML = insertOverview

            insertDiv = document.getElementById('modalTagline')
            insertDiv.innerHTML = insertTagline

            insertDiv = document.getElementById('modalGenres')
            insertDiv.innerHTML = insertGenre

            insertDiv = document.getElementById('modalLength')
            insertDiv.innerHTML = insertLength

            insertDiv = document.getElementById('modalVote')
            insertDiv.innerHTML = insertVote

            $('.modal-backdrop').css({'background-image':'url(https://image.tmdb.org/t/p/w1280' + responseAsJson.backdrop_path + ')' })
        })

        .catch(function(err) {
            console.log(err)
            let insert=""
            insert += "<h2>No search results for your term. Please Try Again</h2>"
            let insertDiv = document.getElementById('modalTitle')
            insertDiv.innerHTML = insert
        })


        $('#movieDetailModal').modal('show')

}
