var NumbersArr = [10, 30, 50, 20, 1, 9]; //define an array of numbers

console.log( "Array: ", NumbersArr ); //printing the array in the console

console.log( NumbersArr[2] ); //printing the value at index 2 -> 50

NumbersArr.push( 99 ); //add the number 99 to the array (from the end of the array)

NumbersArr.unshift( 99 ); //add the number 99 to the array (from the start of the array)

//------------------------------------------------------------------------------------------------//

var grades = [70 , 80, 90];

grades.push( 60 );
grades.push( 50 );

//grades --> [70, 80, 90. 60, 50]//

//-----------------------------------------------------------------------------------------------//

var forLoopArray = [];

for ( var i = 0; i < 10; i++ )
{
    forLoopArray.push(i+1);
}

console.log(forLoopArray);

//-----------------------------------------------------------------------------------------------//


var evenNumbers = [];
var even = 0;

for ( var i = 0; i < 10; i++ )
{
    evenNumbers.push( even );
    even += 2;
}
console.log("evenNumbers: ", evenNumbers);


//-----------------------------------------------------------------------------------------------//

var Num5 = [];
var sum = 0;

for ( var i = 0; i < Num5.length; i++ ) //Num5.length = the length of the array
{
    Num5[i] = +prompt("please enter a number");
    sum += Num5[i];
}

console.log("Num5 array sum: ", sum);

//-----------------------------------------------------------------------------------------------//

var user = [];
var sum = 0;

for ( var i = 0; i < 3; i++ )
{
    user.push( +prompt("please enter a number: ") );
    sum += user[i];
}

console.log( sum );

//---------------------------------------------------------------------------------------//

var random = [];
var num = 0;

for( var i = 0; i < 100; i++ )
{
    num = Math.floor(Math.random() * (99) + 1);
    num -= num % 10;
    random.push( num );
}



