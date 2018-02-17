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
let popularUrl
let topratedUrl
let upcomingUrl
let nowPlayingUrl


//SEARCH
document.getElementById('btn-search').addEventListener('click', function(){

    searchTerm = document.getElementById('searchTerm').value
    searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&query="+ searchTerm +"&page=1&include_adult=false"
    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg (poster path example)

    console.log(searchUrl)
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
            insert += "</article>"

        }


        let insertDiv = document.getElementById('insert-search')
        insertDiv.innerHTML = insert
    }
    )

    .catch(function(err) {
        console.log(err)
        let insert=""
        insert += "<h2>No search results for your term. Please Try Again</h2>"
        let insertDiv = document.getElementById('insert-search')
        insertDiv.innerHTML = insert
    })

    document.getElementById('searchTerm').value = ""
})

//CLOSE SEARCH
document.getElementById('btn-search-close').addEventListener('click', function(){
    let insert =""
    let insertDiv = document.getElementById('insert-search')
    insertDiv.innerHTML = insert
})


//POPULAR
document.getElementById('btn-popular').addEventListener('click', function(){

    //search = document.getElementById('searchTerm').value
    popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg (poster path example)

    console.log(popularUrl)
    fetch(popularUrl, {
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
            insert += "</article>"

        }


        let insertDiv = document.getElementById('insert-popular')
        insertDiv.innerHTML = insert
    }
    )

    .catch(function(err) {
        console.log(err)
        let insert=""
        insert += "<h2>No search results for your term. Please Try Again</h2>"
        let insertDiv = document.getElementById('insert-popular')
        insertDiv.innerHTML = insert
    })
})

//CLOSE POPULAR
document.getElementById('btn-popular-close').addEventListener('click', function(){
    let insert =""
    let insertDiv = document.getElementById('insert-popular')
    insertDiv.innerHTML = insert
})

//TOP RATED
document.getElementById('btn-toprated').addEventListener('click', function(){

        //search = document.getElementById('searchTerm').value
        topratedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
        //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg (poster path example)

        console.log(topratedUrl)
        fetch(topratedUrl, {
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
                insert += "</article>"

            }


            let insertDiv = document.getElementById('insert-toprated')
            insertDiv.innerHTML = insert
        }
        )

        .catch(function(err) {
            console.log(err)
            let insert=""
            insert += "<h2>No search results for your term. Please Try Again</h2>"
            let insertDiv = document.getElementById('insert-toprated')
            insertDiv.innerHTML = insert
        })
})

//CLOSE TOP RATED
document.getElementById('btn-toprated-close').addEventListener('click', function(){
    let insert =""
    let insertDiv = document.getElementById('insert-toprated')
    insertDiv.innerHTML = insert
})



//UPCOMING
document.getElementById('btn-upcoming').addEventListener('click', function(){

                //search = document.getElementById('searchTerm').value
                upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
                //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg (poster path example)

                console.log(upcomingUrl)
                fetch(upcomingUrl, {
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
                        insert += "</article>"

                    }


                    let insertDiv = document.getElementById('insert-upcoming')
                    insertDiv.innerHTML = insert
                }
                )

                .catch(function(err) {
                    console.log(err)
                    let insert=""
                    insert += "<h2>No search results for your term. Please Try Again</h2>"
                    let insertDiv = document.getElementById('insert-upcoming')
                    insertDiv.innerHTML = insert
                })
})


//CLOSE UPCOMING
document.getElementById('btn-upcoming-close').addEventListener('click', function(){
    let insert =""
    let insertDiv = document.getElementById('insert-upcoming')
    insertDiv.innerHTML = insert
})

//NOW PLAYING
document.getElementById('btn-nowplaying').addEventListener('click', function(){

    //search = document.getElementById('searchTerm').value
    nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=da4e154ebe86b26d95e75489941adefb&language=en-US&page=1"
    //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg (poster path example)
    //console.log(search)
    console.log(nowPlayingUrl)
    fetch(nowPlayingUrl, {
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
            insert += "</article>"

        }


        let insertDiv = document.getElementById('insert-nowplaying')
        insertDiv.innerHTML = insert
    }
    )

    .catch(function(err) {
    	console.log(err)
        let insert=""
        insert += "<h2>No search results for your term. Please Try Again</h2>"
        let insertDiv = document.getElementById('insert-nowplaying')
        insertDiv.innerHTML = insert
    })

})


//CLOSE NOW PLAYING
document.getElementById('btn-nowplaying-close').addEventListener('click', function(){
    let insert =""
    let insertDiv = document.getElementById('insert-nowplaying')
    insertDiv.innerHTML = insert
})
