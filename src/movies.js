// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(all) {
   let directorMoies = all.map(function(El){
   return El.director
   })
   return directorMoies;
    }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
      }).length;
      
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
      }
      const arrayOfRates = moviesArray.map(value => {
        return value.rate;
      });
      const sumOfRates = arrayOfRates.reduce((sum, rate, index, original) => {
        return sum + rate;
      }, 0);
      return sumOfRates / moviesArray.length;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => {
        
        return movie.genre.includes('Drama');
      });
       if (!dramaMovies.length) return 0;
      return calculateAverageMovieRate(dramaMovies);
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayCopy = [...moviesArray];
  return arrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      const firstMovieTitle = a.title.toLowerCase();
      const secondMovieTitle = b.title.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(movie => movie.title)
    .sort((a, b) => {
      const firstMovieTitle = a.toLowerCase();
      const secondMovieTitle = b.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const duration = movie.duration.split(' ');
        let minutes = 0;
        for (let time of duration) {
          if (time.includes('h')) {
            minutes += parseInt(time) * 60;
          } else {
            minutes += parseInt(time);
          }
        }
        return {
          ...movie,
          duration: minutes
        };
      });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
