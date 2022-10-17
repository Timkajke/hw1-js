// Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».

/* var userName = prompt("Please enter your name");
alert(`Hey, ${userName}!`); */

// Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.

/* const currentYear = 2022;
var userYearOfBirth = prompt("Enter your year of birth to find out your current age");
var userCurrentAge = currentYear - userYearOfBirth;
alert(`Hey, your current age is ${userCurrentAge}`); */

// Запросите у пользователя длину стороны квадрата 
// и выведите периметр такого квадрата.

/* var lengthOfSquareSide = prompt("Enter length of square side (cm)");
var perimeterOfSquare = 4 * lengthOfSquareSide;
alert(`Hey, perimeter of square is ${perimeterOfSquare} cm`); */

// Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.

/* const pi = 3.14;
var radiusOfCircle = prompt("Enter radius of circle (cm)");
var areaOfCircle = 3.14 * Math.pow(radiusOfCircle, 2);
alert(`Hey, area of circle is ${areaOfCircle} cm2`); */

// Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

/* var distanceBetweenCities = prompt("Enter distance between City A and City B (km)");
var hoursToArrive = prompt("Enter how many hours do you want to spend to reach City B? (h)");
var speed = distanceBetweenCities / hoursToArrive;
alert(`Hey, you should drive with this speed ${speed} km/h to reach City B`); */

// Реализуйте конвертор валют. Пользователь вводит доллары, 
// программа переводит в евро. Курс валюты храните в константе.

/* const course = 1.03;
var dollar = prompt ("Enter how many dollars do you want to convert into euros?");
var dollarToEuro = dollar * course;
alert(`Hey, you'll get ${dollarToEuro} euros`); */

// Пользователь указывает объем флешки в Гб. Программа
// должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

/* const sizeOfFile = 820;
var sizeOfUSB = prompt ("Enter how many GB your USB has?");
var quantityOfFiles = Math.floor((sizeOfUSB * 1024) / sizeOfFile);
alert(`Hey, you can put ${quantityOfFiles} files on your USB`); */

// Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

/* var amountOfMoney = prompt("Enter how much money do you have in your wallet? (RUB)");
var priceOfOneChocolate = prompt("Enter the price of one chocolate bar");
var quantityOfChocolateBars = Math.floor(amountOfMoney / priceOfOneChocolate);
var spendMoney = priceOfOneChocolate * quantityOfChocolateBars;
var remainingMoney = Math.floor(amountOfMoney - spendMoney);
alert(`Hey, you can buy ${quantityOfChocolateBars} chocolate bars. 
You'll have ${remainingMoney} RUB in your wallet`); */

// Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).

/* var userNumber = prompt("Enter three-digit number which you want to turn over");
var oneDigit = userNumber % 10;
var remainingNumber = Math.floor((userNumber - oneDigit) / 10);
var secondDigit = remainingNumber % 10;
var thirdDigit = Math.floor((remainingNumber - secondDigit) / 10);
alert(`Hey, your turn-overed three-digit number is ${oneDigit}${secondDigit}${thirdDigit}`); */

// Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

/* var userDigit = prompt(`Enter your number. You'll get 'true' if your number is even.
You'll get 'false' if your number is odd.`);
alert(userDigit %2 === 0); */