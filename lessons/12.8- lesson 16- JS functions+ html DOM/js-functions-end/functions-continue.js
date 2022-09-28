function addFunction( n )
{
    if (n < 20)
    {
        return 1;
    }
    if ( n >= 20 && n < 30)
    {
        return 2;
    }

    var result = n*10;
    return result; //put out the variable result
}

var res = addFunction(9); // result (the returning value) gets into res

console.log(res);

