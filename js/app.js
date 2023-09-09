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

console.log(111 < 231); // true
console.log(1 < 5); // true
console.log(1 <= 1); // true

console.log('a' > 'b'); //false
// a => 97, b => 98
console.log('ń' > 'z'); // true
// ń => 324, z => 122
console.log('a' > 'A'); // true
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
