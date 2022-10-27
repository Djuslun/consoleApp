let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

let lastMovie1 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieRating1 = prompt('На сколько оцените его?', '');
let lastMovie2 = prompt('Один из последних просмотренных фильмов?', '');
let lastMovieRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovie1] = lastMovieRating1;
personalMovieDB.movies[lastMovie2] = lastMovieRating2;

console.log(personalMovieDB);