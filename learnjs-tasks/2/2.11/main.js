// Что выведет код ниже?

console.log(null || 2 || undefined); // true

console.log(console.log(1) || 2 || console.log(3)); // 1, 2

console.log(1 && null && 2); // null

console.log(console.log(1) && console.log(2)); // 1, undefined

console.log(null || 2 && 3 || 4);  // ответил 2, но правильный 3, забыл про приоритет

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

if (age >= 14 && age <= 90) {
}

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (!(age >= 14 && age <= 90)) {
}
if (age < 14 || age > 90) {
}


// Какие из перечисленных ниже alert выполнятся?
//
//     Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');  // выполнится 1 и 3. У второго будет в скобках 0, а это преобразовыввется  в false