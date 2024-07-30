'Use strict!'

const lines = 6;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i=1; i<=lines; i++) {
    
    let spaces = ' '.repeat(lines - i);
    let stars = '*'.repeat(2 * i - 1);
    result += spaces + stars + '\n';
};

console.log(result);