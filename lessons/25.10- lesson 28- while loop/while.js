//~ ~while loop~ ~//

//*~guessing a number~

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

let counter = 0;

let guess = 0;

while ( guess != randomNumber )
{
    guess = +prompt("please enter a number: ");
    counter ++;
}

alert("end of the function, you guessed the number");
console.log("you have tried: ", counter, " times");

