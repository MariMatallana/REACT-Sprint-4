const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director)

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter(function (movie) {
    return movie.director === director;
  })

  //.map(function (movie) {
  //  return movie.director
  //})

  /* const moviesFromDirector = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].director === director) {
          moviesFromDirector.push(array[i].title)
        }
    } */

  console.log("EXERCICE 2 ->", moviesFromDirector)
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

  console.log("EXERCICE 3 ->", directorAverage)
  return directorAverage

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const firstTwenty = []

  for (let i = 0; i < array[20]; i++) {
    firstTwenty.push(array[i].title)
  }

  firstTwenty.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }

    return 0;
  })

  console.log("EXERCICE 4 ->", firstTwenty)
  return firstTwenty;

}


// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const moviesByYear = []

  for (let i = 0; i < array.length; i++) {
    moviesByYear.push(array[i])
  }

  moviesByYear.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }

    if (a.title.toLowerCase() < b.year.toLowerCase()) {
      return -1;
    }
    if (a.title.toLowerCase() > b.year.toLowerCase()) {
      return 1;
    }

    return 0
  });

  console.log("EXERCICE 5 ->", moviesByYear)
  return moviesByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const moviesByGenre = []
  const averageByCategory = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i].genre === genre) {
      moviesByGenre.push(array[i])
    }
  }

  for (let h = 0; h < moviesByGenre.length; h++) {
    averageByCategory = averageByCategory + moviesByGenre[i].score
  }
  averageByCategory = averageByCategory / moviesByGenre.length

  console.log("EXERCICE 6 ->", averageByCategory)
  return averageByCategory
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
