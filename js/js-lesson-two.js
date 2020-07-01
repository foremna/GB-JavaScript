"use strict";

/* 2 потому, что а = 1, потом в переменную "с" записываем ++а,
 два плюса (инкремент) обозначают увеличение переменной на единицу.
 То есть, alert выводит с = а+1, с = 2
*/
let a = 1, b = 1, c, d; c = ++a;
alert(c); // ответ: 2

/* Инкремент стоящий до переменной увеличивает
 b на единицу, инкремент стоящий после также увеличивает b,
 но возвращает старое значение (которое было до увеличения).
 Так что alert покажет 1
*/
d = b++;
alert(d); // ответ: 1

/* c = 2, а = 2.
 с + ++а инкремент стоящий до переменной увеличивает
 а на единицу
 а = 3
 2 + 3 = 5
*/
c = 2 + ++a;
alert(c); // ответ: 5

// Не поняла
d = 2 + b++;
alert(d); // ответ: 4

// Не поняла
alert(a); //3
alert(b); //3

/* а = 2
 создаем переменную х
 в переменную х записываем 1 + (q *= 2)
 (q *= 2) умножение с присваиванием, а умножили на 2, получили 4
 в а теперь 4
 в переменную х записываем 1 + 4
 х = 5
*/
let q = 2;
let x = 1 + (q *= 2); // ответ: 5


/* если v и f положительные, вывести их разность
 если v и f отрицательные, вывести их произведение
*/

let v = -15, f = -5;
if (v >= 0 && f >= 0) {
    console.log(v - f);
} else if (v < 0 && f < 0) {
    console.log(v * f);
}


// Сложение вариант 1
function increase () {
    let a = Number(prompt("Введите первое число для сложения"));
    let b = Number(prompt("Введите второе число для сложения"));
    let sum = a + b;
    alert(sum);
    return;
};

increase();

// Сложение вариант 2
function increaseTwo (a, b) {
    return a + b;
};

console.log("Результат сложения" + " " + increaseTwo(5, 10));


// Вычитание вариант 1
function decrease () {
    let a = Number(prompt("Введите первое число для вычитания"));
    let b = Number(prompt("Введите второе число для вычитания"));
    let sum = a - b;
    alert(sum);
    return;
};

decrease();

// Вычитание вариант 2
function decreaseTwo (a, b) {
    return a - b;
};

console.log("Результат вычитания" + " " + decreaseTwo(10, 5));


// Умножение вариант 1
function multiplying () {
    let a = Number(prompt("Введите первое число для умножения"));
    let b = Number(prompt("Введите второе число для умножения"));
    let sum = a * b;
    alert(sum);
    return;
};

multiplying();

// Умножение вариант 2
function multiplyingTwo (a, b) {
    return a * b;
};

console.log("Результат умножения" + " " + multiplyingTwo(10, 5));


// Деление вариант 1
function divide () {
    let a = Number(prompt("Введите первое число для деления"));
    let b = Number(prompt("Введите второе число для деления"));
    let sum = a / b;
    alert(sum);
    return;
};

divide();

// Деление вариант 2
function divideTwo (a, b) {
    return a / b;
};

console.log("Результат деления" + " " + divideTwo(10, 5));


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return increaseTwo(arg1, arg2);
        case "-":
            return decreaseTwo(arg1, arg2);
        case "*":
            return multiplyingTwo(arg1, arg2);
        case "/":
            return divideTwo(arg1, arg2);
    
        default:
            throw new Error("Такой операции" + operation + "нет");
    }
}

console.log(mathOperation(7, 3, "+"));
console.log(mathOperation(7, 3, "-"));
console.log(mathOperation(10, 3, "*"));
console.log(mathOperation(300, 3, "/"));


let rubles = Number(prompt("Какую сумму вы хотите положить на счет в банк МяуБанк?"));

function sumMeowBank (rub) {
    let strRubles = rubles.toString().length;

    if (strRubles = 3) {
        alert("На ваш счет зачислено" + " " + rubles + " " + "рубль");
    } else if (strRubles = 5) {
        alert("На ваш счет зачислено" + " " + rubles + " " + "рублей");
    } else if (strRubles = 6) {
        alert("На ваш счет зачислено" + " " + rubles + " " + "рубля");
    };
};

sumMeowBank();