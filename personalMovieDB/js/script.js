'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start () {
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');
    };
}
start ();

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

function detectPersonalLevel () {
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
}
detectPersonalLevel();

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let nameMovie = prompt(`Який ${i+1}-ий із фільмів ви нещодавно подивились`, ``).trim();
        let ratingMovie = prompt(`Як би ви оцінили цей фільм?`, '').trim(); 
    
        if ( nameMovie != null && ratingMovie != null && nameMovie != '' && ratingMovie != '' && nameMovie.length <= 50 ) {
            personalMovieDB.movies[nameMovie] = ratingMovie;
        } else {
            i = i - 1;
        }  
    };
}
rememberMyFilms();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}`, ``);
    }
}
writeYourGenres ();

// console.log(personalMovieDB);
