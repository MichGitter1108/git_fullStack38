function printName(myName) {
    var name1 = 'shay';
    console.log(name1, myName);
}


var myName = 'michal';
printName('michal'); //the parameter myName -> 'michal'
printName('shay'); //the parameter myName -> 'shay'
printName('guy'); //the parameter myName -> 'guy'

//*******************************************************//
var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function loop() //don't need to receive array because it is a global variable
{
    for ( var i = 0; i < array.length; i++ )
    {
        multiple(array[i]);
    }
}

function multiple(num)
{
    num *= 5;
    console.log(num);
}

loop();

//*******************************************************************************************************//

var posts = 
[
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
];

for ( var i = 0; i < posts.length; i++ )
{
    title( posts[i].title )
    body( posts[i].body )
}

function title( title )
{
    console.log( "the title: ", title );
}

function body( body )
{
    console.log( "the body: ", body );
}

//**************************************************************************************************//
var completed = [];
var uncompleted = [];

var todos = 
[
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    }
]

for ( var i = 0; i < todos.length; i++ )
{
    IfCompletee( todos[i].completed );
}

function IfComplete( task )
{
    if ( task )
    {
        completed.push( todos[i] );
    }
    else 
    {
        uncompleted.push( todos[i] );
    }
}

console.log("these are the completed tasks: ", completed);
console.log("----------------------------------------------");
console.log("you have to complete this tasks: ", uncompleted);

