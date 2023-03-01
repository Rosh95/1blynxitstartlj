// Здесь функция makeUser возвращает объект.
//
//     Каким будет результат при обращении к свойству объекта ref? Почему?
//
//     function makeUser() {
//         return {
//             name: "John",
//             ref: this
//         };
//     }
//
//     let user = makeUser();
//
// alert( user.ref.name ); // Каким будет результат?
// будет ошибка, так как у свойста ref нету свойства name  ( так как функция). Был бы методом ref, получилось бы


// Создайте объект calculator (калькулятор) с тремя методами:
//
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
//     let calculator = {
//     // ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    read() {
        this.x = Number(prompt('x?', 0));
        this.y = Number(prompt('y?', 0));
    },
    sum() {
        return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
//
//     let ladder = {
//         step: 0,
//         up() {
//             this.step++;
//         },
//         down() {
//             this.step--;
//         },
//         showStep: function() { // показывает текущую ступеньку
//             alert( this.step );
//         }
//     };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
//
//     ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
//     ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.

//Чтоб выполнялась цепочка, нужно что-то возвращать, то есть возвращать this

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};