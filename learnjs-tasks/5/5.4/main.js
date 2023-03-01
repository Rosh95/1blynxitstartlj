// Что выведет следующий код?
//
//     let fruits = ["Яблоки", "Груша", "Апельсин"];
//
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
//
// // что в fruits?
// alert( fruits.length ); // ?  //4, так ссылка будет на один и тот же объект

// Давайте произведём 5 операций с массивом.
//
//     Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте Рэп и Регги в начало массива.
//     Массив по ходу выполнения операций:
//
//     Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");

// Каков результат? Почему?
//
//     let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// });
//
// arr[2](); // ?  // a,b,function(){...} . Так как 3 элемент указывает на массив.

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
//     Например:
//
// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
//
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
//Тут я начал гуглить и изучать алгоритмы, так как мое решение было нелогичным и долгим

function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let item of arr) {
        currentSum += item;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
}