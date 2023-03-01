// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

let user = {};
user.name = 'Rosh';
user.surname = 'Azimov';
user.name = 'Pete';
delete user.name

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
//     Должно работать так:
//
//     let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
//
// const user = {
//     name: "John"
// };
//
// // это будет работать?
// user.name = "Pete";

//Да, будет так как объект хранит ссылку. Но мы не сможем изменить user, например, на число.

// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 390

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:
//
// // до вызова функции
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//
//     P.S. Используйте typeof для проверки, что значение свойства числовое.

const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof key === 'number') {
            obj[key] *= 2
        }
    }
}