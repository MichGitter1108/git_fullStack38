// **var vs let** // 

let num1 = 10; //לא ניתן להגדיר את המשתנה שוב

var num2 = 15;
var num2 = 15;

//------------------------------------------------------//

//-let variable is defined only in the if block-//
if ( num2 > 8 )
{
    let num3 = 30;
    var num4 = 50;

    console.log( num3 );
}

console.log( num3 ); // --> num3 is not defined


//-----------------------------------------------------//


//const type variable//

const id = 1234567;
//const variable can not be changed- id = 4 can not be a command


//----------------------------------------------------------------------------------//


//for loop - ES6 - forEach loop

let i = 0;
for ( let post of posts ) // --> "post" = posts[i]- איבר אחד במערך
{
    if ( i % 2 == 0 )
    {
        console.log(post);
    }
    i++;
}

//----------------------------------------------------------------------------------//

//functions - ES6 - Arrow functions
let number = 100;
let function1 = (number) => 
{
    console.log("Hello function: ",number);
}


//another function//
let number2 = 102;
let function2 = (number2) =>
{
    console.log("Hello function 2: ",number2);
}


//function with default parameter value
let number3 = 50;
let function3 = (number3 = 100) => //100 is the default variable value if we not pass some parameter value (line 72)
{
    console.log("Hello function 2: ",number3);
}

function3(number3);
function3(); //--> if we not pass a parameter- the default value is 100 because of line 66

