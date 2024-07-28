'use strict';

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */



// First 
const numberOfFilms = prompt ('Скільки фільмів ви вже подивились?', '');
console.log(numberOfFilms);

// Second

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

const nameFirstFilm = prompt('Який один із фільмів ви нещодавно подивились', '');
const ratingFirstFilm = prompt('Як би ви оцінили цей фільм?', '');

personalMovieDB.movies[nameFirstFilm] = ratingFirstFilm;

const nameSecondFilm = prompt('Який ot один із фільмів ви нещодавно подивились', '');
const ratingSecondFilm = prompt('Як би ви оцінили цей фільм?', '');

personalMovieDB.movies[nameSecondFilm] = ratingSecondFilm;



console.log(personalMovieDB);


console.log(0 && 0);