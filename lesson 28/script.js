'use strict'

function calculateVolumeAndArea(length) {
    if (isNaN(length) || length <= 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    } else {
        console.log(`Объем куба: ${length*length*length}, площадь всей поверхности: ${length*length*6}`);
        return`Объем куба: ${length*length*length}, площадь всей поверхности: ${length*length*6}`;
    }
}


// Место для второй задачи
function calculateVolumeAndArea(length) {
    if (isNaN(length) || length <= 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    } else {
        console.log(`Объем куба: ${length*length*length}, площадь всей поверхности: ${length*length*6}`);
        return`Объем куба: ${length*length*length}, площадь всей поверхности: ${length*length*6}`;
    }
}
// Место для первой задачи
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    const arr = [ a, b, c, d];
    const result = Math.max(...arr);

    if (arr.every(element => typeof element === 'number') && arr.every(element => element > 0)) {
        console.log(result);
        return result
    } else {
        console.log(0);
        return 0
    }
}

// Числа фебоначі

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
// Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

function fib(n) {

    if ( typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return ''
    }

    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n).join(" ");
}
