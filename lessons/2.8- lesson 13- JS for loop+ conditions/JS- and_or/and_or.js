var num = +prompt("enter a number: ");

//between 40-50
if ( num > 40 && num < 50 )
{
    alert( "Yes" );
}

else
{
    alert( "No" );
}

//check if the number is even and between 30-60, else if odd or even
var number = +prompt("enter a number");

if ( (number % 2 == 0) && ( number >= 30 && number <= 60))
{
    alert( "Yes" );
}

else if ( number % 2 == 0 )
{
    alert( "even" );
}

else
{
    alert( "odd" );
}


//-----------------------------------------------//
//check the max of 3 numbers
var number1 = +prompt( "enter first number: " );
var number2 = +prompt( "enter second number: " );
var number3 = +prompt( "enter third number: " );
var number4 = +prompt( "enter forth number: " );

var max = 0;

if( number1 > max )
{
    max = number1;
}

if ( number2 > max )
{
    max = number2;
}

if (number3 > max )
{
    max = number3;
}

if ( number4 > max )
{
    max = number4;
}

alert( max );










