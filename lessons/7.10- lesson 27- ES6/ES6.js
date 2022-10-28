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

//console.log( num3 ); // --> num3 is not defined


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
    console.log("Hello function 3: ",number3);
}

function3(number3);
function3(); //--> if we not pass a parameter- the default value is 100 because of line 66




//-------------------------------------------------------------------------------------------//
//_map filter_- a short of the *original for* loop- the most relevant function

let postsArray = posts.map(post => 
{
    if ( post.id <= 30 && post.id >= 20 )
    {
        return post.id; //doing the command of postsArray.push(p.id)
    }
    return null;
    //if the js not entering to the if block then returned undefined at the array and console log
    //if we do for example: return 1 the array will be with numbers of 1
})

console.log("map: ", postsArray);


//----------------------------------//
//how to solve that?- _filter method_

let postFilter = posts.filter((post, i) => //the second parameter is always the index
{
    if ( post.id <= 30 && post.id >= 20 )
    {
        post.index = i; //adding index key to the object
        return post;
    }
})

console.log("filter: ", postFilter);


//---------------------------------//
//_find method_- specific array object
let postsFind = posts.find( post =>{
    return (post.id == 20 || post.id == 30); //only the first post he finds according to the if condition and ends the function
})

console.log("find: ", postsFind);

//---------------------------------//
//_findIndex_
let postsFindIndex = posts.findIndex( post =>{
    return (post.id == 20 || post.id == 30); //only the first post he finds according to the if condition and ends the function
})

console.log("find index: ", postsFindIndex);




//----------------------string functions--------------------------------------//
let string = "abcdefghijklmnopqrstuvwxyz";

if ( string[0] == "a" && string[1] == "b" )
{
    console.log(true);
}
else
{
    console.log(false);
}

let startResult = string.startsWith("abc"); //startsWith is a function that return true or false
console.log(startResult);

let includeResult = string.includes("abc"); //includes is a function that return true or false
console.log(includeResult);

let endResult = string.endsWith("xyz"); //endsWith is a function that return true or false
console.log(endResult);


//-exercise-//
let autPostsFilter = posts.filter((post) => //filter the posts json array
{
    if ( post.body.includes("aut") )
    {
        return post;
    }
})

console.log(autPostsFilter);



//-exercise-//

let parametersFunction = (titleStartWith, bodyEndWith, id) => //arrow function
{
    let postsFilter = posts.filter(post => { //filter function
        if ( post.title.startsWith(titleStartWith) || post.body.endsWith(bodyEndWith) || post.id == id)
        {
            return post;
        }
    })
    return postsFilter; //we use return because after that we can use the array for different functions
}

let array = parametersFunction("c", ".", 45); 

console.log("array: ", array);



//-exercise-//

let booleanPosts = posts.map( post => 
{
    if ( post.id == 8 )
    {
        return true;
    }
    return false;
})

console.log("boolean: ", booleanPosts);




//- - - - - - - - - - - array of random numbers - - - - - - - - - - - - -//
let randomArray = [];

let getRandomNumber = (max) =>
{
    let randomResult = Math.floor(Math.random() * max);
    return randomResult;
}

let randomLoop = getRandomNumber(100); //*the number of loops

for ( let i = 0; i < randomLoop; i++ )
{
    randomArray.push(getRandomNumber(1000));
}

console.log("random numbers array: ", randomArray);



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
let names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let phones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

let objectsArray = [];


randomLoop = getRandomNumber(50);


let createObject = (index) =>
{
    let randomName = names[index];
    let randomPhone = phones[index];

    let randomObject = 
    {
        name: randomName,
        phone: randomPhone
    }

    return randomObject;
}

for ( let i = 0; i < randomLoop; i++ )
{
    let randomIndex = getRandomNumber(10);

    objectsArray.push(createObject(randomIndex));
}

console.log(objectsArray);





//- - - - - - - - - - - -  pointers - - - - - - - - - - - - - - - - - - - - - -//

let arr = [];
let ob = {};
//* --> if we do this, the pointers (arr[ob, ob, ob, ...]) will point at the same memory cell (ob{same name, same phone}), and the values are "destroyed"
//* --> to avoid this we should define a new object every call to the function (line 264)

let functionObject = () =>
{
    let object = //every call to the function a new object is created and a new memory cell (the "let" variable is in the function)
    {
        name: //getElementById(...),
        phones: //getElementById(...)
    }
    arr.push(object);
}

