var number = +prompt( "please enter a number: " );

var prime = true;

for ( var i = 2; i <= number-1; i++ )
{
    if ( number % i == 0 )
    {
        prime = false;
    }
}

if ( prime == true )
{
    console.log( "your number is a prime number... " );
}

else
{
    console.log( "your number isn't a prime number..." )
}


