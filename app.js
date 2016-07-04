$(function(){

var movies = ['The Usual Suspects', 'The Shawshank Redemption', 'Lost Highway'];
var omdbapiSearch = 'http://www.omdbapi.com/?s='
var firstMovie = 'Usual+suspects&y=&plot=short&r=json';


for (var i = 0; i < movies.length; i++) {
  var title = movies[i];
  console.log(title);

  $.get('http://www.omdbapi.com/?t='+ movies[i])
    .then(function(data) {
      $('#container').append('<div class="movie"><div class="header"><h1 class="title">' + data.Title + '</h1></div>'+
      '<div class="posterFrame"><img class="poster" src="'+data.Poster+'"></img></div>'+
      '<div class="movieFrame"><p class="bold">Director: ' + data.Director + '</p>'+
      '<p>Plot: ' + data.Plot + '</p></div>'+
      '<div class="header"><p class="bold">Release Date: ' + data.Released + '</p></div></div>');
    })

}

});
