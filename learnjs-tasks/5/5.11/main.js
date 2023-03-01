// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//
//     Для вывода используйте console.log.

console.log(new Date(2012, 1, 20, 3, 12))

//-----------------------------------------------------------------------------------------------
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//
// Например:
//
//     let date = new Date(2012, 0, 3);  // 3 января 2012 года
// console.log( getWeekDay(date) );        // нужно вывести "ВТ"

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 января 2014 года
console.log(getWeekDay(date)); // ВТ

// -------------------------------------------------------------------------------
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
//
//     let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date) {
    let day = date.getDay();
    return day === 0 ? 7 : day;
}

let date1 = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date1));       // вторник, нужно показать 2

//-----------------------------------------------------------------------------------
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
//
//     К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
//
//     Функция должна надёжно работать при значении days=365 и больших значениях:
//
//     let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

let date2 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

console.log(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)

// ------------------------------------------------------------------------------
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
//
// Параметры:
//
//     year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2022, 0)); // 31
console.log(getLastDayOfMonth(2020, 1)); // 29
console.log(getLastDayOfMonth(2021, 1)); // 28

///-----------------------------------------------------------------
//
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//
//     Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let today = new Date();
    let result = today.getHours() * 3600 + today.getMinutes() + today.getSeconds();

    return result;
}

console.log(getSecondsToday()) // если вызвать несколько раз, то значение будет меняться всегда


//------------------------------------------------------------------------------------------------------
//
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//
//     Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let today = new Date();
    let totalSecondsToday = today.getHours() * 3600 + today.getMinutes() + today.getSeconds();
    let totalSecondsInADay = 86400;
    let result = totalSecondsInADay - totalSecondsToday;

    return result
}

console.log(getSecondsToTomorrow())

//----------------------------------------------------------------------------------------

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
//     Например:
//
// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
