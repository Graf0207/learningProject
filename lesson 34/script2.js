'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    
    while (arr.length == 0) {
        return 'Семья пуста'
    }

    let str = `Семья состоит из: ${arr.join(' ')}`
    return str
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';

    for ( let key in arr ) {
        str = `${arr[key].toLowerCase()}`
        console.log(str);
    }
}
standardizeStrings(favoriteCities);