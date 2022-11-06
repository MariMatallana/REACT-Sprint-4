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

  const moviesDirector = array.filter( movie => movie.director == director)

  let directorAverage = moviesDirector.reduce((count, movie) => {
    count += movie.score
    return (count)
  }, 0)

  directorAverage = directorAverage / moviesDirector.length

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
  
  let averageByCategory = moviesByGenre.reduce((count, movie) => {
      count += movie.score
    return (count)
  }, 0)

  averageByCategory = averageByCategory / moviesByGenre.length 

  console.log("EXERCICE 6 ->", moviesByGenre, averageByCategory, )
  return Number(averageByCategory.toFixed(2)) 
} 

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
   
  const moviesInMinutes = [].concat(array)



// console.log("EXERCICE 7 ->",  )
return moviesInMinutes
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  const moviesByYear2 = array.filter(movie => movie.year === year)

  moviesByYear2.sort((a, b) => {
    
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
  })
  
  moviesByYear2.reverse()
  const bestMovieOfTheYear = []
  bestMovieOfTheYear.push(moviesByYear2[0])

  // console.log("EXERCICE 8 ->",  moviesByYear2, bestMovieOfTheYear)
  return bestMovieOfTheYear

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
