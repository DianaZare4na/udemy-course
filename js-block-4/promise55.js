'use strict';

// console.log('Запрос данных...');

// const reg = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// reg.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             console.log(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
   
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('error');
// }).finally(() => {
//     console.log('finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);

    });
};
 
// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race');
});