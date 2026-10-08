// =================================================================
// PROBLEM 1 — Reading Object Properties
// =================================================================
// You are given this movie object. Write code below to:
//   1. Print the title
//   2. Print the director
//   3. Print true/false: is the runtime over 120 minutes?
//   4. Add a new property `watched` set to true
//   5. Print each key-value pair using console.log("Title:", movie.title) style

const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
};


// TODO 1: Print the movie title
console.log(movie.title)

// TODO 2: Print the director's name
console.log(movie.director)

// TODO 3: Print true/false — is runtime over 120?
if (movie.runtime > 120){
  console.log(true)
}

// TODO 4: Add a `watched` property set to true
movie.watched = true

// TODO 5: Print each key-value pair
console.log("Title:", movie.title)
console.log("Year:", movie.year)
console.log("Director:", movie.director)
console.log("Rating:", movie.rating)
console.log("Runtime:", movie.runtime)
console.log("Watched:", movie.watched)