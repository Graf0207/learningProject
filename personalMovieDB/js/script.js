'use strict';

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {

        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        
        while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?', '');
        };
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 ) {
            alert('Ви подивились мало фільмів')
        }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Ви класичний глядач')
        }
        else if (personalMovieDB.count >= 30) {
            alert('Ви кіноман!')
        }
        else {
            alert('Виникла помилка!')
        };
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const nameMovie = prompt(`Який ${i+1}-ий із фільмів ви нещодавно подивились`, ``).trim();
            const ratingMovie = prompt(`Як би ви оцінили цей фільм?`, '').trim(); 
        
            if ( nameMovie != null && ratingMovie != null && nameMovie != '' && ratingMovie != '' && nameMovie.length <= 50 ) {
                personalMovieDB.movies[nameMovie] = ratingMovie;
            } else {
                i --;
            }  
        };
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 2; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером ${i+1}`, ``);

            if ( genre === null || genre === '') {
                alert('Ви не ввели дані!');
                i --;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((elem , i) => {
            console.log(`Любимый жанр ${++i} - это ${elem}`)
        });

    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

};

console.dir(personalMovieDB);
