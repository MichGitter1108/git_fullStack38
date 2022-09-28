//building a function
function printTxt() 
{
    var num = 8; //the variable num is **only for the function**
    console.log('Hello', num);
}

//calling the function
printTxt();


function printTxt1() 
{
    var num = 4; //the variable num is **only for the function**
    if ( num > 6 )
    {
        console.log('Hello1', num); //won't be printed because num isn't bigger than 6
    }
}

console.log( num ); //null

