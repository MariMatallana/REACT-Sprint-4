const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director)

  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(function (movie) {
    return movie.director === director;
  })

 // console.log("EXERCICE 2 ->", moviesFromDirector)
  return moviesFromDirector;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const moviesDirector = []
  let directorAverage = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i].director === director) {
      moviesDirector.push(array[i])
    }
  }

  for (let j = 0; j < moviesDirector.length; j++) {
    directorAverage += moviesDirector[j].score
  } directorAverage = directorAverage / moviesDirector.length

 // console.log("EXERCICE 3 ->", directorAverage)
  return Number(directorAverage.toFixed(2))

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let firstTwenty = [...array].map(movie => movie.title)
  .sort()
  .slice(0,20)

 // console.log("EXERCICE 4 ->", firstTwenty)
  return firstTwenty;

}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const moviesByYear = [...array]

  moviesByYear.sort((a, b) => {
    
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }

    return 0
  });

 // console.log("EXERCICE 5 ->", moviesByYear)
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const moviesByGenre = array.filter( movie => movie.genre == genre)

  const averageByCategory = moviesByGenre.reduce((acumulado, sig) => acumulado += sig.score, 0)
  let averageTotal = averageByCategory / moviesByGenre.length
 
  console.log("EXERCICE 6 ->", moviesByGenre, averageTotal)
  return Number(averageTotal.toFixed(2))
} 

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
   

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
