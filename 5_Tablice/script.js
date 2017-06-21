//Zadanie 1
var myArr = [1, "text", true];

// /Na piechotę/
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

//Ponad polecenie: /for/
for (var i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// /while/
var i = 0;
while (i < myArr.length) {
  console.log(myArr[i]);
  i++;
}


//Zadanie 2

var myArr2 = ["Jabłko", "Japko", "Japuko"];
console.log(myArr2[0]);
console.log(myArr2[myArr2.length-1]);


for (var i=0; i<myArr2.length; i++) {
    console.log("Element nr " + i + " ---> " + myArr2[i]);
}

//Zadanie 3

var array = [2,0,2,0,0,1,0,0,1,0];
var count = 0;

for (var i=0; i < array.length; i++) {
    count = count + array[i];
}

console.log(count);

//Zadanie 4


var myArr4 = [2,2,2,0,0,0,0,0,0,0];

var count4 = 0;
var countParzyste = 0;
   for (var i=0; i < myArr4.length; i++) {
        if(myArr4[i]%2 == 0) {
          count4 = count4 + myArr4[i];
          countParzyste++;
        }
   }

  console.log("Suma liczb parzystych: " + count4 + ".  Liczb parzystych jest... --->  " + countParzyste);



//Zadanie 5

var myArr5 = [12,12,12,0,0,0,0,0,0,0];
var myMax5 = myArr5[0];

for (var i=0; i < myArr5.length; i++) {
   if (myArr5[i]>myMax5) {
      myMax5=myArr5[i];
   }
}

console.log(myMax5);

//Wada rozwiązania wskazujemy największą liczbę, ale gdy wszystkie takie same, to i tak program wskaże liczbę :)

//Zadanie 6


var myArr6 = [0, 13, 22, 123, 23, 123, 23];
var IndexReply = null;

for (var i=0; i < myArr6.length; i++) {
   for (var j=i+1; j< myArr6.length; j++) {
        if (myArr6[i] == myArr6[j]) {
          IndexReply = i;
        }
   }
   if (IndexReply != null) {
   break;
   }
}

console.log("Indeks, który się powtarza --> " + i + ", liczba: ---> " + myArr6[i]);

// Zadanie 7

var myArr7 = [0,1,2,3,4,5,6,7,8,9];
var i = myArr7.length-1;

for(i; i>0; i--) {
    console.log("Liczba o indeksie " + i + " to ---> " + myArr7[i]);
}
