//Exercise 1//
var num1 = 10;
var num2 = 20;

var sum = num1 + num2;

console.log("the sum of the two numbers is ", sum);

//---------------//
//Exercise 2//
var radius = 3.5;

var s = 3.14 * radius ** 2;
var p = 2 * 3.14 * radius;

console.log(s , p);



//------------------//
//Exercises 3+4//
var num3 = +prompt("please enter a number: ");
var num4 = +prompt( "please enter another number:" );

if ( num3 > num4 )
{
    console.log( num3 );
}

else if ( num3 > num4 )
{
    console.log( num3);
}

else
{
    console.log( "they equal" );
}

//--------------//
//Exercise 5//
var num5 = +prompt("please enter a number: ");
var num6 = +prompt( "please enter another number:" );

if ( num6 < 0 && num5 < 0 )
{
    console.log(Math.abs(num6 + num5));
}

else if ( num5 < 0 )
{
    console.log( Math.abs(num5) + num6 );
}

else if ( num6 < 0 )
{
    console.log( num5 + Math.abs(num6) ); 
}

else
{
    console.log( num5 + num6 );
}

//-------------//
//Exercise 6//
var year = +prompt( "please enter a year: ");

if ( year % 4 == 0 )
{
    if ( year % 100 == 0 )
    {
        if ( year % 400 == 0 )
        {
            console.log("this year isn't a leap year");
        }
        else 
        {
            console.log("this year is a leap year");
        }
    }
}

else if ( year % 100 == 0 )
{
    if ( year % 100 == 0 )
    {
        if ( year % 400 == 0 )
        {
            console.log("this year isn't a leap year");
        }
        else 
        {
            console.log("this year is a leap year");
        }
    }
}

//----------------//
//Exercise 7 - all the months are with 30 days//
var day = +prompt("please enter the day:");
var month = +prompt("please enter the month:");

if ( day + 7 > 30 ) //for example - day 28 -> 28 + 7 = 35
{
    month += 1;
    day = ( day+7 )-30;
    alert (day + '/' + month)
}

else 
{
    alert ((day + 7) + '/' + month);
}












