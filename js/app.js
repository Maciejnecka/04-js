// console.log('JavaScript');
// console.log('jest');
// console.log('COOL');

// const str = 'Wartość typu string';

// const sum = 1 + 2; // Komentarz w JS

// console.log('Wyświetlam:', str);
// console.log('Wyświetlam również liczbę:', sum);

// alert('JS działa!'); //komunikat

///////////////////////////////////////////////////
// Zmienne i wartości. Deklaracja zmiennej
///////////////////////////////////////////////////

// let empty;
// deklaracja zmiennej bez przypisania
// taka zmienna ma wartośćundefined

// var num = 222;
// zmienna zadeklarowana przy pomocy
// słowa kluczowego var (starsze rozwiązanie)
// z przypisaniem wartości liczbowej (number)

// const str = 'jakiś ciąg znaków';
// deklaracja przy użyciu const
// rozwiązanie wprowadzone przy wersji ES6
// z przypisaniem wartości typu string

// let arr = [];
// deklaracja przy użyciu let
// rozwiązanie wprowadzone wraz z ES6
// z przypisaniem pustej tablicy

///////////////////////////////////////////////////
// const firstName = 'Mateusz';
// const lastName = 'Kowalski';

// const fieldName = 'age';
// const userAge = 18;

// let userPoints = 123;

///////////////////////////////////////////////////
// const tmp = 1234;
// nazwa zmiennej nie mówi co przechowujemy
// nie wiemy czy to temperatura czy może
// zmienna tymczasowa

// let 01step;
// let first-name;
// let user.age;
// jeśli będziemy błędnie nazywać zmienne
// to często IDE zwróci nam na to uwagę
// poprzez dziwne kolorwanie

// console.log(TMP);
// nie ma takiej zmiennej!
// istnieje jedynie tmp (małymi literami)

///////////////////////////////////////////////////
// var num = 222;
// let str = 'jakiś ciąg znaków';
// const arr = [];

// num = 1 + 2;
// zmienna została juz zadeklarowana więc nie musimy
// ponownie używać var, przechowywana wartość to 3
// str = 'nowy tekst'
// ten kod spowoduje błąd! zmienne zadeklarowane
// za pomocą słowa kluczowego const
// nie mogą być nadpisywane
// arr.push(11)
// do pustej tablicy dodaję element
// w tym przypadku jest to liczba (typ number)
// która dodawana jest za pomocą metody .push()
// tak nazywamy funkcje w obiekcie

///////////////////////////////////////////////////
// const basket1 = 2785.12;
// const basket2 = 451.88;
// const basket3 = 4764;

// const sum = basket1 + basket2 + basket3;
// obliczam sumę wszystkich zakupów

// const avg = sum / 3;
// potem dopiero dzielę przez ich ilość

// console.log(avg);
// wyświetlam w konsooli wartość zmiennej avg

///////////////////////////////////////////////////
// Var vs let & const
///////////////////////////////////////////////////
// var num = 2;
// nadal działa i będzie działać
// jednak jest przestarzałe

// let number = 44;
// jeśli wartośćzmiennej będzie nadpisywana
// należy użyć słowa kluczowe let

// const pi = 3.14;
// jesli nie bedziemy zmieniac wartosci
// lub nie zamierzamy tego robic
// to nalezy zyc slowa kluczowego const
// w pierwszej kolejnosci wybieramy te wersje
// poniewaz odczytanie tej wartosci bedzie szybsze

///////////////////////////////////////////////////
// const ratio = 1.65;
// const size = ratio * 50;
// Uncaught TypeError;
// Assignment to constant variable.

// let ratio = 1.65;
// const size = ratio * 50;

// ratio = 1.75;
// const size2 = ratio * 100;

///////////////////////////////////////////////////
// const rateFromUsdToPln = 3.8;
// const rateFromGbpToPln = 5.02;
// const valueUsd = 223;
// const valueGbp = 121;
// let pln;

// pln = valueUsd * rateFromUsdToPln;
// console.log('Wartosc dolarow to: ', pln);

// pln = valueGbp * rateFromGbpToPln;
// console.log('Wartosc funtów to: ', pln);
///////////////////////////////////////////////////
// let empty;
// deklaracja zmiennej bez przypisania
// taka zmienna posiada wartosc specjalna undefined

// var num = 222;
// zmienna zadeklarowana przy pomocy
// slowa kluczowego var
// z przypisaniem wartosci liczbowej

// const str = 'ciag znaków'
// deklaracja przy uzyciu const
// rozwiazanie wprowadzone przy wersji ES6
// z przypisaniem wartosci typu string

// let arr = []
// deklaracja przy uzyciu let
// rozwiazanie wprowadzone wraz z ES6
// z przypisaniem pustej tablicy

///////////////////////////////////////////////////
// Typy proste (prymitywne)

// number => 222, 21.94, NaN
// string => 'ciag znakow', '0'
// boolean => true, false
// undefined => undefined
// null => null
// symbol => Symbol()
// bigint => 134656765765783n,
// BigInt(498756948670304354686857)

// Typy złożone
// object => [], {}
// function => function(){}

///////////////////////////////////////////////////
// var num = 222;
// console.log(typeof num);
// // konsola 'number'

// const str = 'ciag znaków';
// console.log(typeof str);
// // konsola 'string'

// let arr = [];
// const arrType = typeof arr;
// console.log(arrType);
// // konsola 'object'

// const fn = function () {
//   // funkcja nic nie robi
// };
// const fnType = typeof fn;
// console.log(fnType);
// // konsola 'funcion'

///////////////////////////////////////////////////
// let myVar = null;
// let myObj = {};

// console.log(typeof myVar, typeof myObj);
// // w konsoli zobaczymy: 'object' 'object'

// console.log(myVar === null, myObj === null);
// // w konsoli zobaczymy: true, false

// console.log(typeof myVar === 'object', typeof myObj === 'object');
// // w konsoli zobaczymy true, true

// // to moze powodowac bledne sprawdzenie
// if(typeof myVar === 'object'){
//    myVar.prop = 'value';
//    // TypeError: Cannot set property 'prop' of null
// }

///////////////////////////////////////////////////
// Konwersja (coercion)
///////////////////////////////////////////////////
// const name = 'Agnieszka';
// const nameObj = new String('Agnieszka');
// console.log(name.length, nameObj.length);

// const nameUpper = name.toUpperCase();
// const nameObjUpper = nameObj.toLocaleUpperCase();
// console.log(nameUpper, nameObjUpper);

// const price = 5.952;
// const priceObj = new Number(5.952);
// console.log(price.toFixed(2), priceObj.toFixed(2));
// console.log(price); // 5.952

// const priceFixed = price.toFixed(2);
// console.log(priceFixed); // 5.95
// console.log(typeof priceFixed); // string

///////////////////////////////////////////////////
// const txt = '245.65';
// const numInt = parseInt(txt);
// const numFloat = parseFloat(txt);

// Js nie rozroznia wartosci
// calkowitych (integer/int) oraz
// rzeczywistych (float)
// jednak mozemy "obciac"
// wartosci po przecinku

// console.log(numInt, typeof numInt, numFloat, typeof numFloat);

///////////////////////////////////////////////////
// Operatory
///////////////////////////////////////////////////

// Arytmetyczne

// const res1 = 2 + 4;
// const res2 = res1 / 2;
// const res3 = res2 * res2;
// const res4 = res3 / 2;
// const res5 = res4 % 2;

// let res6 = 1;
// res6++; // 2
// let res7 = 2;
// res7--; // 1

// const res8 = 2 + '1'; // 21

// console.log(res1, res2, res3, res4, res5, res6, res7, res8);

// const x = 1;
// const y = '2';

// const result1 = x + y;
// console.log(result1, typeof result1); // string

// const z = parseInt(y);
// const result2 = x + z;
// console.log(result2, typeof result2);

// const x = '1';
// const y = '2';

// const result1 = x * y;
// console.log(result1, typeof result1);

// const z = 'abc';
// const result2 = x * z;
// console.log(result2, typeof result2);

// const x = 'a';
// const y = '2';

// const result = x / y;
// console.log(result);

// console.log(result === result); // false
// // NaN nigdy nie jest sobie równy
// // to kolejny wyjątek w JavaScript!

// console.log(Number.isNaN(result)); // true
// // w ten sposob mozemy sprawdzic
// // czy wartosc jest typu NaN

// const res1 = 5 % 2;
// const res2 = 7 % 5;
// const res3 = 9 % 3;

// console.log(res1, res2, res3);

///////////////////////////////////////////////////
// Przypisania
///////////////////////////////////////////////////
// let res; //undefined
// // zadeklarowana zmienna
// // do której nie przypisałem wartości
// // posiada ona wartosc specjalna undefined

// res = 4; //4
// res -= 2; // 4-2 = 2
// res *= 3; // 2 * 3 = 6
// res /= 2; // 6 / 2 = 3
// res %= 2; // 3 % 2 = 1
// console.log(res);

// let x = 12;
// x += '0'; // x = 12 + '0';
// console.log(x); // '120' (string)
// x -= 100; // x = 120 - 100;
// console.log(x); // 20
// x *= 'a'; // x = 20 * 'a';
// console.log(x); // NaN
// x = 1000;
// console.log(x); // 1000
// x /= 'b' // x = 1000 / 'b'
// console.log(x); // NaN

// Jesli wykorzystalibyśmy słłowo kluczowe const to pojawilby sie blad poniewaz ta zmienna nie moze byc nadpisana

///////////////////////////////////////////////////
// Porównania
///////////////////////////////////////////////////
// const x = 5;

// console.log(x == '5'); // true
// // dane sa sprowadzone do 'wspolnego mianownika' w tym przypadku string jest zamieniony na number nastepnie jest wykonywane porwownanie

// console.log(x === '5'); // false
// // typ anych jest istotny nie ma tutaj niejawnej konwersji tj. zmiany danych do tego samego typu dlatego te wartosci nie sa rowne

// console.log(x !== '5'); // true
// console.log(x !== 5); // false

// console.log('0' == 0); // true
// // bo '0' => 0, 0 === 0
// console.log(0 == false); //true
// // bo false => 0, 0 === 0
// console.log(false == '0'); // true
// // bo false => 0 & '0' => 0, 0 === 0

// Jesli mamy luzne (loose) porownanie tj. == js uzywa niejawnej konwersji, aby wartosci sprowadzic do tego samego typu i dopiero potem porownac

// console.log('0' === 0); //false
// console.log(0 === false ); //false
// console.log(false === '0'); //false

// w przypadku tzw. scislego (strict) porownania tj. uzycia === typ wartosci musi sie zgadzac jesli tak nie jest juz mamy falsz

// console.log(111 < 231); // true
// console.log(1 < 5); // true
// console.log(1 <= 1); // true

// console.log('a' > 'b'); //false
// // a => 97, b => 98
// console.log('ń' > 'z'); // true
// // ń => 324, z => 122
// console.log('a' > 'A'); // true
// a => 97, A => 65

///////////////////////////////////////////////////
// Logiczne
///////////////////////////////////////////////////
// const x = 5;
// const y = 6;

// console.log(x < y); // true

// console.log(!(x < y)); // false
// // negacja poprzedniego wyniku

// console.log(x < y && x > y); // false
// // x nie moze byc jednoczesnie wiekszy oraz mniejszy niz y

// console.log(x < y || x > y); // true
// // jedyna mozliwosc kiedy bylby to falsz to moment gdy x bylby rowny y

// const x = 7;
// const y = 1;
// const min = 4;
// const max = 10;

// console.log( x >= min && x <= max); // true
// // bno 7 >= 4 oraz 7 <= 10
// console.log(y >= min && y <= max); // false
// // bo 1 < 4 (nie trzeba sprawdzac dalej)
// console.log(x < min || x >= max); // true
// // bo 7 > 4 oraz 7 < 10
// console.log(y < min || y >= max); // true
// // bo 1 < 4 (nie trzeba sprawdzac dalej)

// console.log(!(x === y)); // true
// bo x === y => false, !false => true
///////////////////////////////////////////////////
// const weather = 'deszcz';
// let place;

// if (weather === 'deszcz') {
//   place = 'home';
// }
// console.log(place);

// const winner = 'ja';
// let building;
// if (winner === 'ja') {
//   building = 'home';
// } else {
//   building = 'flat';
// }
// console.log(building);

///////////////////////////////////////////////////
// const userAge = prompt('Ile masz lat?', 0);

// const userAgeInt = parseInt(userAge);

// const isAdult = userAgeInt >= 18;

// if (!isAdult) {
//   const leftAge = 18 - userAge;
//   alert('Do pełnoletności brakuje Ci: ' + leftAge);
// }
///////////////////////////////////////////////////
// Wartości fałszywe
// false (boolean),
// 0 (number),
// 0n (BigInt) [zero dla dużych liczb],
// "",", `` (string) [pusty ciąg znaków],
// null (object),
// undefined (undefined),
// Nan (number).
///////////////////////////////////////////////////

// let value;
// value = '';
// console.log(value);
// if (value) {
//   console.log('prawda!');
// } else {
//   console.log('fałsz!');
// }

// // '' => 'fałsz!'

// value = '0';
// console.log(value);
// if (value) {
//   console.log('prawda!');
// } else {
//   console.log('fałsz!');
// }

// '0' => 'prawda!'
///////////////////////////////////////////////////

// const userAge = prompt('Ile masz lat?', 0);
// // pobieranie danych od uzytkownika

// const userAgeInt = parseInt(userAge);

// if (userAgeInt >= 18) {
//   alert('Jesteś pełnoletni! Gratuluje!');
// }
///////////////////////////////////////////////////
// const a = 62;
// const b = 55;
// const c = 19;

// if (a > b && a > c) {
//   // jesli a jest wieksza od b i od c to
//   console.log('a jest najwieksze!');
// } else if (b > c) {
//   // jesli b jest wieksze od c i biorac pod uwage poprzedni warunek tj. ze a nie jest najwieksze to
//   console.log('b jest najwieksze!');
// } else {
//   // w przeciwnym wypadku tj. gdy a i b nie sa najwieksze to
//   console.log('C jest najwieksze!');
// }
///////////////////////////////////////////////////
// Operator warunkowy
///////////////////////////////////////////////////

// const a = 1112;
// const b = 55;

// const info = a > b ? 'A wieksze' : 'B większe';
// console.log(info); // B wieksze

// const diff = a > b ? a - b : b - a;
// console.log(diff); // 43 - zawsze nieujemna
///////////////////////////////////////////////////

// const a = 12;
// const b = 55;

// const info = a > b ? 'A większe' : 'B większe';
// console.log(info);

// const diff = a > b ? a - b : b - a;
// console.log(diff);

// const numsAreEven1 = a % 2 === 0 && b % 2 === 0 ? 'yes' : 'no';

// const numsAreEven2 = !(a % 2) && !(b % 2) ? 'yes' : 'no';

// console.log(numsAreEven1, numsAreEven2);
///////////////////////////////////////////////////
// const monthNumber = parseInt(prompt('Podaj numer miesiaca:', 0));
// let monthName;

// if (monthNumber === 1) {
//   alert('Styczeń');
// } else if (monthNumber === 2) {
//   alert('Luty');
// }
// switch (monthNumber) {
//   case 1:
//     monthName = 'Styczeń';
//     break;1
//   case 2:
//     monthName = 'Luty';
//     break;
//   case 3:
//     monthName = 'Marzec';
//     break;
//   // ...
//   default:
//     alert('Podano błędne dane!');
//     break;
// }

// console.log(monthName);
///////////////////////////////////////////////////
// for (let i = 0; i <= 13; i++) {
//   console.log(i);
// }

// for (let i = 4; i > 0; i--) {
//   console.log(i);
// }
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 3; i <= 100; i = i + 3) {
//   console.log(i);
// }
///////////////////////////////////////////////////
// const randomNumber = Math.round(Math.random() * 5);
// // losuje liczbe 0 / 5

// let userNumber;
// // deklaruje zmienna, która bedzie przechowywac liczbe wprowadzona przez uzytkownika

// let counter = 0;
// // liczba wykonywanych prób

// // wykonuj pętle dopki wylosowana liczba bedzie rozna od tej wprowadzonej przez uzytkownika
// while (userNumber !== randomNumber) {
//   userNumber = parseInt(prompt('Zgadnij liczbe!'));
//   counter++; // lub counter ++
// }

// alert('Gratulacje! Zgadłes za ' + counter + ' razem!');
// let i = 3;
// while (i <= 100) {
//   console.log(i);
//   i += 3;
// }

// let j = 1;
// while (j <= 100) {
//   if (j % 3 === 0) {
//     console.log(j);
//   }
//   j++;
// }

// function showInfo() {
//   console.log('Funckje');
//   console.log('są');
//   console.log('fajne');
// }
///////////////////////////////////////////////////
// function showInfo(text) {
//   console.log(text);
// }
// showInfo('Funkcje');
// showInfo('są');
// showInfo('super');

// function sumNumbers() {
//   const a = 2;
//   const b = 4;
//   console.log(a + b);
// }

// sumNumbers();

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(4, 5);
// sum(11, 44);
///////////////////////////////////////////////////
// function sum(a, b) {
//   const result = a + b;
//   return result;
// }

// const res1 = sum(4, 5);
// const res2 = sum(11, 44);
// console.log(res1, res2);
///////////////////////////////////////////////////
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// function showEvenNumbers(start, stop) {
//   for (let i = start; i < stop; i++) {
//     if (isEven(i)) {
//       console.log(i + ' jest parzysta!');
//     }
//   }
// }

// showEvenNumbers(1, 10);

// function isEven(num) {
//   console.log('>>> uruchomione: isEven()');
//   console.log('>>> num =', num);
//   if (num % 2 === 0) {
//     console.log('>>> warunek prawdziwy :)');
//     return true;
//   }
//   console.log('>>> warunek fałszywy :(');
//   return false;
// }
// function showEvenNumbers(start, stop) {
//   console.log('> uruchomione: showEvenNumbers()');
//   console.log('> start =', start, 'stop =', stop);
//   for (let i = start; i < stop; i++) {
//     console.log('=> pętla for, i = ', i);
//     if (isEven(i)) {
//       console.log(i + ' jest parzysta!');
//     }
//   }
// }

// showEvenNumbers(1, 10);
///////////////////////////////////////////////////

// function getUserInput(messageForUser) {
//   const userInput = prompt(messageForUser);
//   return userInput;
// }

// const fn = getUserInput;

// const inputFromUser = fn('Ile masz lat?');
// console.log(inputFromUser);

///////////////////////////////////////////////////

// const fn = function getUserInput(messageForUser) {
//   const userInput = prompt(messageForUser);
//   return userInput;
// };

// const inputFromUser = fn('Ile masz lat??33');
// console.log(inputFromUser);
///////////////////////////////////////////////////
// const getUserInput = function (message) {
//   return prompt(message);
// };

// const sumNumbersFromUser = function (userInputFn) {
//   const a = userInputFn('Podaj liczbę a');
//   const b = userInputFn('Podaj liczbę b');

//   const sum = parseFloat(a) + parseFloat(b);
//   return sum;
// };

// const result = sumNumbersFromUser(getUserInput);
// console.log(result);
///////////////////////////////////////////////////

// const sumNumbersFromUser = function (userInputFn) {
//   const a = userInputFn('Podaj liczbę a');
//   const b = userInputFn('Podaj liczbę b');

//   const sum = parseFloat(a) + parseFloat(b);
//   return sum;
// };

// const result = sumNumbersFromUser(function (message) {
//   return prompt(message);
// });
// console.log(result);
///////////////////////////////////////////////////

// function showMessage() {
//   console.log('setTimeout!');
// }

// const showName = function () {
//   console.log('Michał!');
// };

// setTimeout(showMessage, 1000);
// setTimeout(showName, 2000);

// setTimeout(function () {
//   console.log('funkcja anonimowa!');
// }, 5000);
///////////////////////////////////////////////////
// let counter = 1;

// const showCounter = function () {
//   console.log(counter);
//   counter++;
// };

// console.log('before setInterval()');
// setInterval(showCounter, 1000);
// console.log('after setInterval()');
///////////////////////////////////////////////////
// let idInterval;
// let counter = 1;

// const showCounter = function () {
//   console.log(counter);
//   counter++;

//   if (counter > 5) {
//     clearInterval(idInterval);
//   }
// };

// idInterval = setInterval(showCounter, 1000);
///////////////////////////////////////////////////
// Deklaracja zmiennych globalncyh
// var fistName = 'Ewa';
// const num = 12;
// let counter = 1;

// function fn(param1, param2) {
//   // Parametry funkcji sa zmiennymi lokalnymi
//   var firstNameLocal = 'Anna';
//   const numLocal = 12;
//   let counterLocal = 2;
// }
// {
//   // deklaracja zmiennej globalnej
//   var firstNameBlock = 'Kasia';
//   // deklaracja zmiennych lokalnych
//   const numBlock = 3;
//   let counterBlock = 12;
// }
///////////////////////////////////////////////////
// zmienna globalna
// const num = 12;
// console.log(num);

// function fn() {
//   //zmienna lokalna
//   const num = 44;
//   console.log(num);
// }
// fn();
// console.log(num);
///////////////////////////////////////////////////
// const num = getNum();
// console.log(num);

// function getNum() {
//   return 2;
// }
// // deklaracja zostala przeniesiona na gore, ale bez wartosci wiec mamy undefined
// console.log(firstName);

// var firstName = 'Anna';
///////////////////////////////////////////////////
// const userA = prompt('Podaj a...');
// const userB = prompt('Podaj b...');
// const userC = prompt('Podaj c...');
// // poniewaz działa hoisting to moge uruchomic ponizsze funckje
// const sum = getSum(userA, userB, userC);
// const avg = getAverage(sum, 3);
// console.log(avg);

// function getSum(a, b, c) {
//   let sum = parseInt(a);
//   sum += parseInt(b);
//   sum += parseInt(c);
//   return sum;
// }
// function getAverage(sum, count) {
//   if (count === 0) {
//     return 0;
//   }
//   return sum / count;
// }
///////////////////////////////////////////////////
// console.log(firstName);

// // deklaracja zmiennej
// var firstName = 'Anna';
// console.log(firstName);

// showInfo();

// // ta sama zasada dotyczy wyrazen
// var showInfo = function () {
//   console.log('Hoisting!');
// };
///////////////////////////////////////////////////
// deklaracja zmiennych (globalncyh)
// let state;

// function fn(c) {
//   // zmienne lokalne
//   const a = 3;
//   const b = 4;
// }

// console.log(hoisting);
// const hoisting = '??';
///////////////////////////////////////////////////
// const arr = [];
// // deklaracja pustej tablicy

// const names = ['Jan', 'Anna', 'Kasia'];
// // deklaracja 3 elementowej tablicy

// console.log(names[0]); //jan
// // pierwsza wartosc elementu

// console.log(names.length); //3
// // pobieranie ilosci elementow

// const lastIndex = names.length - 1;
// console.log(names[lastIndex]);
///////////////////////////////////////////////////
// const arr = new Array(0);
// // deklaracja pustej tablicy

// const names = new Array('Jan', 'Anna', 'Kasia');
// // deklaruje 3 elementowa tablice
// console.log(names[0]);
// // pobieram wartosc pierwszego elementu

// console.log(names.length);
// pobieram ilosc elementow
///////////////////////////////////////////////////
// const numbers = [];
// // deklaracja pustej tablicy
// const names = new Array();
// // deklaruje pusta tablice
// console.log(numbers, names);

// numbers.push(1, 2, 3);

// names.push('Jan');
// // dodaje 1 element typu [string]
// console.log(numbers, names);

// console.log(numbers.length, names.length);
///////////////////////////////////////////////////
// const names = ['Jan', 'Anna', 'Kasia'];

// if (names.indexOf('Jan') > -1) {
//   console.log('Istnieje w tablicy!');
// } else {
//   console.log('Brak w tablicy');
// }

// if (names.includes('Kasia')) {
//   console.log('Istnieje w tablicy!');
// } else {
//   console.log('Brak w tablicy!');
// }
///////////////////////////////////////////////////
// deklarujemy zmienna, ktora bedzie przechowywac nasze wylosowane liczny
// const numbers = [];
// // tworzymy petle ktora bedzie sie wykonywac dopoki ilosc elementow w tablicy jest mniejsza niz 5
// while (numbers.length < 5) {
//   // losujemy liczbe [1]
//   const num = Math.round(Math.random() * 10);
//   //sprawdzamy czy wylosowana liczba znajduje sie w taliby [2]
//   if (!numbers.includes(num)) {
//     // nic nie rob, czyli ponowne losowanie [2a]
//     numbers.push(num);
//   }
// }
// console.log(numbers);
///////////////////////////////////////////////////
// const numbers = [111, 12, 2, 1, 201];

// numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(numbers);

// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);
///////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// // wiświetlanei danych w konsoli
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // obliczanie sumy na podstawie liczb z tablicy
// let sum = 0;
// for (let j = 0; j < numbers.length; j++) {
//   sum += numbers[j];
// }
// console.log(sum);
///////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// const sum = getSum(numbers);
// console.log(sum);

// function getSum(arr) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     sum += arr[j];
//   }
//   return sum;
// }
// ///////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = getEvenNumbers(numbers);
// const sum = getSum(evenNumbers);
// console.log(sum);

// function getEvenNumbers(arr) {
//   const evenNumbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumbers.push(arr[i]);
//     }
//   }
//   return evenNumbers;
// }
// function getSum(arr) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     sum += arr[j];
//   }
// }
///////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (element, index, array) {
//   console.log(element);
// });

// function showItemWithIndex(item, index) {
//   console.log(index, '=>', item);
// }
// numbers.forEach(showItemWithIndex);
// const numbers = [1, 2, 3, 4, 5];
// const sum = getSum(numbers);
// console.log(sum);

// function getSum(arr) {
//   let sum = 0;
//   arr.forEach(function (num) {
//     sum += num;
//   });
//   return sum;
// }
///////////////////////////////////////////////////
// const numbers = [1.12, 2.13, 3.12, 4.61, 5.32];
// const integers = numbers.map(parseNumbersToInt);
// console.log(integers);

// function parseNumbersToInt(element, index, array) {
//   return parseInt(element);
// }

// const evenNumbers = integers.map(isEven);
// console.log(evenNumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }
///////////////////////////////////////////////////
const arr = [];
const alfa = ['aaa', 'bbcccc', 'cccc'];

const cart = [
  ['skarpetki', 3, 4.9],
  ['długopis', 4, 3, 3.9],
  ['zeszyt', 2, 5.9],
];

const newCart = cart.filter(function (product) {
  return product[0] !== 'długopis';
});

console.log(newCart);
