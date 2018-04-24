/*imprime al 50 
si divide entre 7 continua 
si divide entre 10 o 15 imprime Donkey!
si no divide entre 2 y el anterior es divisible entre 10
imprime Monkey! */



/* ejercio de for 
for(var i = 1; i < 50; i++){
  if (i % 10 === 0 || i % 15 === 0)
   console.log("Donkey");

 else if(i % 7 === 0)
  { continue; }
 
 else if (i % 2!== 0){
  console.log("monkey");
 }
  
 else 
 console.log(i);
 }
*/
/*  impirme los valores del arreglo con numeros pares en el index
 var favoriteFoods = ["pizza","lasagna","tacos","sushi","pozole","apple"];

for(var i = 0; i<favoriteFoods.length; i+=2){
  console.log(favoriteFoods[i]);
}

*/

/** suma de numeros*/
 /*
var total = 0;
var numbers =[2,3,6,1,7,10];

for(var i=0; i <numbers.length; i++){

  total += numbers[i];
  console.log(total);
}
*/

/** promedio de una suma  */

/*
var sum =0;
var numbers=[1,7,4,11,16,10];

for(var i =0; i<numbers.length; i++){
 sum += numbers[i];

}

var promedio = sum / numbers.length;

console.log(promedio);
*/
/* comparacion del mas grande 
var currentLargest = null;

var numbers=[10,16,99,0,52,41];

for(var i=0; i< numbers.length; i++){

    if(numbers[i] > currentLargest){
      currentLargest = numbers[i];
    }
} 

console.log("the largest number is: "+ currentLargest);

*/
/*
function calculator () {
  var result = multiplyNumbers();
  
  console.log("the result is " + result);
}

function sumNumbers () {
  return 2 + 2;
}

function multiplyNumbers () {
  return 3 * 3;
}

calculator();function calculator () {
  var result = sumNumbers();
  
  console.log("the result is " + result);
}

function sumNumbers () {
  return 2 + 2;
}

function multiplyNumbers () {
  return 3 * 3;
}

calculator();

*/

/** ejercicio de funciones  */

/*
 function calculator( x1, x2, operator){
  if(operator==='addition'){
    addNumbers(x1, x2);
  }else if(operator==='substraction'){
    subtractNumbers(x1, x2);
  } 
  else if(operator==='multiplication'){
      multiplyNumbers(x1,x2);
  } else if(operator==='division'){
    divideNumbers(x1, x2);
  }

}

function addNumbers(x1, x2) {
  console.log(x1 + x2 );
}

function subtractNumbers(x1, x2){
   console.log(x1-x2);
}

function multiplyNumbers(x1, x2){
  console.log(x1 * x2);
}

function divideNumbers(x1, x2){
  console.log(x1 / x2);
}

 calculator(6, 8, 'addition');
 calculator(10, 5, 'substraction');
 calculator(7,9,'multiplication');
 calculator(12,6,'division');

 */


 /**ejercicio de matrix dimensionales juego de  */


var board= [
  [null, null, null, "S", null],
  [null, "S", null, "S", null ],
  ["S", null, null, null, null ],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];
for(var i=0; i<board.length; i++){
    // A single row, such as board[0], board[1], board[2]
    var row = board[i]; // le asigna el valor de row a la secuenca de la tabla en el recorrido

    // Loop over each element in the row
  // We use "j" because "i" is already being used.
  // What would happen if we used i in this loop instead? Try it.
  for(var j =0; j< row.length; j++){
    var column = row[j]; // le asigna el valo a la columna de el barrido de barra 
        // If the column is a ship, log the coords
        if(column ==="S"){
          console.log("ship found at: " + i + ", " + j);
        }
         // Instead of using variables, you could reference: board[i][j]
  }
}


/**for(var i = 0; i<10; i++){  //este ciclo es para que pase el turno del juego
var row = getRandomNum();
var column = getRandomNum();
console.log("Row " + row + " " + "Column " + column);
var randomSquare = board[row][column];
//console.log(randomSquare);
if(randomSquare === "S"){ //este es para ver si encuentra una "s " 
  console.log("hit on :" + row + ", " + column);
  board[row][column] = null;
}
}

function getRandomNum(){  //crea una funcion para obtener un numero aleatorio entre 0 y 4 
  return Math.floor(Math.random() * 5);
}
**/



