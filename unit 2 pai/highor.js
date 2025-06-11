const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, duration: 148 },
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, duration: 152 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, duration: 169 },
  { title: "Tenet", year: 2020, genre: "Sci-Fi", rating: 7.4, duration: 150 },
  { title: "Dunkirk", year: 2017, genre: "War", rating: 7.9, duration: 106 },
  { title: "The Prestige", year: 2006, genre: "Drama", rating: 8.5, duration: 130 },
];

// 1. get list of movies title
const sortMovByRat = movies.slice().sort((a,b)=> b.rating-a.rating).map(movie=>movie.title)

// 2 filter movies by genre "sci fi"
const sciFi = movies.filter(movie =>movie.genre==="Sci-Fi");
// console.log(sciFi)

// 3. Map movies to strings like "Interstellar (2014) - 169 mins".
const movieStr = movies.map(movie=>`${movie.title} (${movie.year}) - ${movie.duration} mins`);
console.log(movieStr)

// 4.Calculate the average movie duration.
const avgDuration = movies.reduce((sum,movie) => sum+movie.duration,0)/movies.length;
console.log(avgDuration)

// 5. Find the highest rated movie title.

const highRatMov = movies.reduce((max,movie)=> movie.rating > max.rating ? movie:max).title;
// console.log(highRatMov)