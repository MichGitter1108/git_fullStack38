var random = Math.floor((Math.random() * 100) + 1);
var num;

for ( var i = 1; i <= 10; i++ )
{
    num = +prompt( "please enter a number between 1 and 100: " );
    if ( num > random )
    {
        console.log( "your number is bigger! try again " );
    }
    else if ( num < random ) 
    {
        console.log( "your number is smaller! try again " );
    }
    else 
    {
        break;
    }
}

console.log( "you guessed the right number!" );
