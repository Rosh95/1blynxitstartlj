// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
//     Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    let result = 0;

    for (let item of Object.values(salaries)) {
        result += item;
    }
    return result;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650

// -------------------------------------------------------------
//
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
//
//     let user = {
//         name: 'John',
//         age: 30
//     };
//
// alert( count(user) ); // 2


function count(user) {
    return Object.keys(user).length
}
let user = {
        name: 'John',
        age: 30
    };

console.log( count(user) ); // 2