// Возможно ли создать функции A и B, чтобы new A() == new B()?
//
//     function A() { ... }
//     function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true
// Если да – приведите пример вашего кода.  Так как объект могут быть равны, когда у них одиннаковая ссылка, поэтому можно
// создать одну переменную снаружи и возвращать ее.

let newObj = {}

function A() {
    return newObj
}

function B() {
    return newObj
}

let a = new A();
let b = new B();

alert(a == b); // true

//
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
//     Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {

    this.read = function () {
        this.x = Number(prompt('x?', 0));
        this.y = Number(prompt('y?', 0));
    };

    this.sum = function () {
        return this.x + this.y;
    };

    this.mul = function () {
        return this.x * this.y;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Создайте функцию-конструктор Accumulator(startingValue).
//
//     Объект, который она создаёт, должен уметь следующее:
//
//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
//     Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.
//
//     Ниже вы можете посмотреть работу кода:
//
//     let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += Number(prompt('Сколько нужно добавить?', 0));
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);