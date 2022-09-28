var data = [];

for ( var i = 0; i < 10; i++ )
{
    data[i].push(Math.random() * (100 - 1) + 1);
}

var bool = true;

for ( var i = 0; i <= (data.length / 2)-1; i++ )
{
    if (data[i] == data[data.length-i])
    {
        continue;
    }
    else 
    {
        bool = false;
        break;
    }
}

if ( bool == true )
{
    console.log("this array is symmetric");
}

else
{
    console.log("this array isn't symmetric");
}








