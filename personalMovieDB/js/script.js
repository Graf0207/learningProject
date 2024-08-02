'use strict';

// --------------- PRACTICE №1

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
// const numberOfFilms = prompt ('Скільки фільмів ви вже подивились?', '');
// console.log(numberOfFilms);

// // Second

// const personalMovieDB = {
//     'count': numberOfFilms,
//     'movies': {},
//     'actors': {},
//     'genres': [],
//     'privat': false
// };

// const nameMovie = prompt('Який один із фільмів ви нещодавно подивились', '');
// const ratingFirstFilm = prompt('Як би ви оцінили цей фільм?', '');

// personalMovieDB.movies[nameMovie] = ratingFirstFilm;

// const nameSecondFilm = prompt('Який ot один із фільмів ви нещодавно подивились', '');
// const ratingSecondFilm = prompt('Як би ви оцінили цей фільм?', '');

// personalMovieDB.movies[nameSecondFilm] = ratingSecondFilm;



// console.log(personalMovieDB);



// --------------- PRACTICE №2

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла +

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = prompt ('Скільки фільмів ви вже подивились?', '');


let personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};


// ------------------- First version

// while (numberOfFilms == false || numberOfFilms === null) {
//     numberOfFilms = prompt ("Обов'язково введіть число. Скільки фільмів ви вже подивились?", "");
// };


// if (numberOfFilms < 10 ) {
//     alert('Ви подивились мало фільмів')
// }
// else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
//     alert('Ви класичний глядач')
// }
// else if (numberOfFilms >= 30) {
//     alert('Ви кіноман!')
// }
// else {
//     alert('Виникла помилка!')
// };

// // console.log(numberOfFilms); //check the number of watched movies

// for (let i = 0; i < 2; i++) {
//     let nameMovie = prompt(`Який ${i+1}-ий із фільмів ви нещодавно подивились`, ``);
//     let ratingMovie = prompt(`Як би ви оцінили цей фільм?`, ''); 

//     while (!nameMovie || nameMovie.length >= 50) {
//         nameMovie = prompt(`Який ${i+1}-ий із фільмів ви нещодавно подивились`, ``);
//     };
//     while (!ratingMovie) {
//         ratingMovie = prompt(`Як би ви оцінили цей фільм?`, ``);
//     };

//     personalMovieDB.movies[nameMovie] = ratingMovie;
// };
// console.log(personalMovieDB);


// ------------------- Second version

while (numberOfFilms == false || numberOfFilms === null) {
    numberOfFilms = prompt ("Обов'язково введіть число. Скільки фільмів ви вже подивились?", "");
};


if (numberOfFilms < 10 ) {
    alert('Ви подивились мало фільмів')
}
else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Ви класичний глядач')
}
else if (numberOfFilms >= 30) {
    alert('Ви кіноман!')
}
else {
    alert('Виникла помилка!')
};

// console.log(numberOfFilms); //check the number of watched movies

for (let i = 0; i < 2; i++) {
    let nameMovie = prompt(`Який ${i+1}-ий із фільмів ви нещодавно подивились`, ``);
    let ratingMovie = prompt(`Як би ви оцінили цей фільм?`, ''); 

    if ( nameMovie != null && ratingMovie != null && nameMovie != '' && ratingMovie != '' && nameMovie.lastIndexOf <= 50 ) {
        personalMovieDB.movies[nameMovie] = ratingMovie;
    } else {
        i = i - 1;
    }

    
};
console.log(personalMovieDB);