var num = +prompt( "please enter a number: " );
var atzeret = 1;

for ( var i = 1; i <= num; i++ )
{
    atzeret *= i;
}

console.log( atzeret );