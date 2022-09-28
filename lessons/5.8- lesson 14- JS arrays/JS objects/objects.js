//define an object
var user1 =
{
    name: 'michal', //"key" -> name, "value" -> michal
    mail: 'michalmi118@gmail.com',
    phone: '054-7290758'
};

user['name'] = 'lior'; //"destroy" the value of name

console.log(user['phone']); //print the value in the 'mail' key of the object

console.log(user);

user['address'] = Nesher; //add a key and value to the object

var user2 =
{
    name: 'tom', //"key" -> name, "value" -> michal
    mail: 'tom@gmail.com',
    phone: '050-7584658'
};

//---------------------------------------------------------------------------------------//
var users = [user1, user2]; //array of users

console.log(users[0]); //prints user1
console.log(users[1]); //prints user2


//--------------------------------------------------------------------------------------//
var pizza1 =
{
    company: 'dominos',
    size: 'M',
    slices: 8
};

console.log(pizza1);

var pizza2 =
{
    company: 'hut',
    size: 's',
    slices: 4
};

var pizzas = [pizza1, pizza2];


console.log(pizzas);

var pizza3 =
{
    company: prompt("please enter the pizza company: "),
    size: prompt("please enter the pizza size: "),
    slices: +prompt("how many slices?: ")
};

var pizza4 =
{
    company: prompt("please enter the pizza company: "),
    size: prompt("please enter the pizza size: "),
    slices: +prompt("how many slices?: ")
};

pizzas.push(pizza3);
pizzas.push(pizza4);

//------------------------------------------------------------------------------//

var cars = [];

for (var i = 0; i < 5; i++)//adding object by for loop with prompt input
{
    var car = {} //empty object
    car.company = prompt('enter the car company: ');
    car.carYear = +prompt('enter the car model: ');
    cars.push(car);
}

console.log(cars);

var year = +prompt("enter the year of car you want to find: ");

for (var i = 0; i < cars.length; i++) {
    if (cars[i].carYear == 2020) {
        console.log("here's your car: ", cars[i]);
    }
}

