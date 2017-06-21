
//*Zadanie 1
var number1a = 40;
var number1b = 40.678;


if (number1a > number1b) {
    console.log("Pierwsza liczba jest większa");
} else if (number1a < number1b) {
    console.log("Druga liczba jest większa");
} else {
    console.log("Liczby są równe");
}






//*Zadanie 2

var num1a = 4;
var num1b = 3;
var num1c = 3;




if (num1a > num1b && num1a > num1c) {
    console.log("Pierwsza liczba jest największa");
} else if (num1b > num1a && num1b > num1c) {
    console.log("Druga liczba jest największa");
} else if (num1c > num1a && num1c > num1b) {
    console.log("Trzecia liczba jest największa");

} else {
    console.log("Żadna liczba nie jest największa");

}
//Brakuje zabezpieczenia na wypadek wpisania typów innych niż liczby. Ale jest wskazanie na wypadek, gdy dwie czy trzy liczby są równe.//


//*Zadanie 3

var i = 1;

for (i; i <= 10; i++) {
    console.log("Lubię JavaScript po raz " + i);
}

//*Zadanie 4

var result = 0;


for(var i=0; i<=10; i++) {
   result = result + i;
   console.log("Pętla nr " + i + " suma cząstkowa ---> " + result);
}

console.log("Suma wszystkich liczb w przedziale -->  " + result);


// *Zadanie 5


var n = 10;
for (var i=0; i<= n; i++) {
    if (i%2 == 0) {;
    console.log(i + " -> parzysta");
    } else {
    console.log(i + " -> nieparzysta");
    }
}

// *Zadanie 6

for(var i=0; i<3; i++) {
    console.log("i -> " + i);
    for(var j=0; j<3; j++) {
    console.log("j -> " + j);
    }
}
//Wartości po wyjściu z obu pętli:
for(var i=0; i<3; i++) {
    //console.log("i -> " + i);
    for(var j=0; j<3; j++) {
    //console.log("j -> " + j);
    }
console.log("i= " + i + ", j= " + j);
}
// *Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}


//Zadanie 8

//Gwiazdki rosnące:


var starsUp = "";

for (var j = 0; j < 5; j++) {
     starsUp += "*";
     console.log(starsUp);
}


//Gwiazdki malejące (dodatkowo):


for (var i = 5; i >= 1; i--) {
     var starsDown = "";

     for (var j = i; j >= 1; j--) {
         starsDown += "*";
     }
  console.log(starsDown);
}

 //Zadanie 9, dodatkowe


 var amountOfStars = 5;
  var row = "";
  for(var i = 0; i < amountOfStars; i++) {
    row = "";
    for(var j = 0; j < amountOfStars; j++) {
      if(j <= i) {
        row = row + "*";
      }
      else {
        row = row + j;
      }
    }
    console.log(row);
  }
  var i = amountOfStars - 1;
  for(i; i >= 0; i--) {
    row = "";
    for(var j = 0; j < amountOfStars; j++) {
      if(j <= i) {
       row = row + "*";
      }
     else {
        row = row + j;
      }
    }
    console.log(row);
  }

  //Zadanie 10, dodatkowe, prawie dobrze...


  var res = "";

  for (var i = 1; i <= 3; i++) {
      var res = "";
    }
      for (var j = 1; j <= 3; j++) {
      res += "" + i + " x " + j + " = " + i * j + " | ";
      console.log(res);
  }
