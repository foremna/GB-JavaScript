"use strict";

/* Задать температуру в градусах по Цельсию.
 Вывести в alert соответствующую температуру в градусах по Фаренгейту.
  Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/

let Tc = 40;
let Tf = (9 / 5) * Tc + 32;
alert("Температура в градусах по Фаренгейту" + " " + Tf);


let name = "Василий"; // Тут Василий
let admin = name; // Перезаписали name = "Василий" в переменную admin
console.log(admin);


// 10+10=20 потом происходит конкатенация и к 20 плюсуется строка "10" и выходит строка 2010
console.log(10 + 10 + "10");

/* 10 плюсуется к строке "10", конкатенируется, выходит строка 1010, к строке 1010 плюсуется 10,
   конкатенируется к строке 1010 и выходит строка 101010
*/
console.log(10 + "10" + 10);

// 10+10=20 к 20 плюсуется будто бы строка, но унарный плюс превращает строку "10" в число, 10+10+10=30 выходит 30
console.log(10 + 10 + +"10");

// Все равно, что делить на 0. Будет минус бесконечность
console.log(10 / -"");

// Нельзя делить число на строку, программа ждет число, а не строку. Ожидания программы не оправдались. Получается NaN
console.log(10 / +"2,5");


let mode = "normal"; // Можно
let my_valu3 = 102; // Можно
let 3my_value3 = "102"; // Нельзя
let __hello__ = "world"; // Нельзя
let $$$ = "money"; // Нельзя
let !0_world = true; // Нельзя