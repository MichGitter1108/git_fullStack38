//for loop//

for (var i = 0; i < 10; i+=2) //all the evens 'til 10
{
    console.log(i);
}

console.log("done");


for (var i = 0; i <= 10; i++ )
{
    console.log( i );
}

console.log( "End loop" );




//-------------------------------------//
//all the evens between 1-100//

for ( i = 0; i <= 100; i+=2 )
{
        console.log( i );
}




//-------------------------------------//
//all the numbers that are divided by 3 between 1-100//

for ( i = 0; i < 100; i+=3 )
{
    console.log( i );
}




//-------------------------------------//
//all the numbers that are divided by 3 or 5 between 1-100//

for ( i = 1; i < 100; i++ )
{
    if ( i % 3 == 0 || i % 5 == 0 )
    {
        console.log( i );
    }
}






//-------------------------------------//
//all the numbers from input on reverse//

var i = +prompt("please enter a number: ");
for (; i >= 0; i-- )
{
    console.log( i );
}


//-------------------------------------//
//input number - sum from 1 to the number//

var num1 = +prompt("please enter a number: ");
var sum = 0;

for ( i = 0; i <= num1; i+=3 )
{
    sum += i;
}

console.log( sum );


//if number bigger then 50 or smaller then 50- if מקוצר//
var number = +prompt("please enter a number between 0 and 100: ");
var smallerThen50 = number < 50 ? "smaller":"bigger" // והכנסנו את הביטוי למשתנה ובסוף מדפיסים(if)קלטנו פרמטר, הצבנו תנאי 






