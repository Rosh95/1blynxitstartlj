// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";

const ucFirst = (str) => {
    if (str) {
        let result = str[0] + str.toLowerCase().slice(1);
        return result;
    }
    return str;

}
//
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
//     Функция должна быть нечувствительна к регистру:
//
//     checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('XXX')) {
        return false;
    } else return true;
}

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
//     Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
//     Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
//
// truncate("Всем привет!", 20) = "Всем привет!"

const truncate = (str, maxlength) => {
    if (str.length > maxlength) {
        let result = str.slice(0, maxlength - 1) + '...';
        return result;
    }
    return str;

}

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//
//     Например:
//
// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
    return Number(str.slice(1))
}