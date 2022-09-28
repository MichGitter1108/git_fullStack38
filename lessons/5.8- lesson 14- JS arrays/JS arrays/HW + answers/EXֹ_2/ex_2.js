var data = [];

for ( var i = 0; i < 10; i++ )
{
    data[i].push( +prompt("please enter a number: ") );
} 

var bool = true;

for ( var i = 1; i <= data.length - 1; i++ )
{
    if ( data[i] == data[i - 1] ) // 
    {
        i++;
        if ( data[i] != data[i-1])
        {
            continue;
        }
        else
        {
            bool = false;
            break;
        }
    }
    else 
    {
        bool = false;
        break;
    }
}

if ( bool == true )
{
    console.log( "The array does meet the condition..." );
}

else
{
    console.log( "The array doesn't meet the condition..." );
}


