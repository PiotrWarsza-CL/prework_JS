//**Zadanie 1


var myFalse = false;
var myTrue = true;

// Przyrównanie za pomocą operatora == zwrócić odp. false, gdyż false
// nie równa się true. Podobnie, gdy użyjemy ===.
// Gdy użyjemy operatora !=, to odp. będzie true.


//**Zadanie 2

var myNumb1 = 12;
var myNumb2 = 10;
var resultModulo = myNumb1%myNumb2;
console.log("Reszta z dzielenia to " + resultModulo);


//*Zadanie 3

var joinedStrings = "";

var myString1 = "String pierwszy z zadania trzeciego. ";

var myString2 = "String drugi z zadania trzeciego";

joinedStrings = myString1 + myString2;

console.log(joinedStrings);

//*Zadanie 4

var myNumber = 4;
var myString = "4";


// myNumber == myString;
// Zwraca true, ponieważ przypisane zmiennym wartości się zgadzają.
//
//
// Przyrównanie:
// myNumber === myString;
// Zwraca false, ponieważ choć przypisane zmiennym wartości się zgadzają, to nie zgadza się typ zmiennej (string i liczba).


//*Zadanie 5

var number5 = 145;
number5++;
console.log(number5);
number5--;
console.log(number5);

//*Zadanie 6

var number6a = 303;

var number6b = 404;

var result = null;


result = number6a > number6b;

console.log(result);
