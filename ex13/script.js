'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};
console.log('map log:', shoppingMallData.shops.map((item) => console.log('item', item)));
shoppingMallData.shops.forEach((item) => console.log('item', item));

// console.log(shoppingMallData.shops.reduce((total, current) => (
//     total + (current.length * current.width)
//   ), 0));
// console.log(data.shops.length * data.shops.width * data.height);

function isBudgetEnough(data) {
  
    const volumeOfAllShops = data.shops.reduce((total, current) => (
        total + (current.length * current.width)
    ), 0) * data.height;

    if (volumeOfAllShops*data.moneyPer1m3 > data.budget) {
        return 'Бюджета недостаточно'
    } else {
        return'Бюджета достаточно'
    }
}

isBudgetEnough(shoppingMallData);