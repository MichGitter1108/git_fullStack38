var array = [];

//add 10 values to the array
for ( var i = 0; i < 10; i++ )
{
    array[i].push(+prompt( "please enter a number to the array: " )); 
}

//summary of all the array values
var sum = 0;

for ( var i = 0; i < array.length; i++ )
{
    sum += array[i];
}

console.log( sum );

//divide every value by 10
var res = 0;
for ( var i = 0; i < array.length; i++ )
{
    res = array[i]/10;
    console.log( res );
}

//how many values are bigger than 80 and smaller than 20
var bigger80 = 0;
var smaller20 = 0;

for ( var i = 0; i < array.length; i++ )
{
    if ( array[i] > 80 )
    {
        bigger80 += 1;
    }
    else if ( array[i] < 20 )
    {
        smaller20 += 1;
    }
}

console.log( "there are: ", bigger80, "values bigger than 80" );
console.log( "there are: ", smaller20, "values smaller than 20" );

//finding the biggest value
var max = 0;
for ( var i = 0; i < array.length; i++ )
{
    if ( array[i] > max )
    {
        max = array[i];
    }
}

console.log( max );

//printing all the even values
for ( var i = 0; i < array.length; i++ )
{
    if ( array[i] % 2 == 0 )
    {
        console.log( array[i] );
    }
}

//how many values are divided by 3
var count = 0;
for ( var i = 0; i < array.length; i++ )
{
    if ( array[i] % 3 == 0 )
    {
        count += 1;
    }
}

console.log( "there are : ", count, "values divided by 3" );

