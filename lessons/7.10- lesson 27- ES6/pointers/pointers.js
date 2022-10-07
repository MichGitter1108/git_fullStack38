let arr = [1, 2, 3, 4];

let arr1 = arr; //arr1 is now "points" on the memory place of arr

arr1.push(5); //arr is now -> arr [1, 2, 3, 4, 5]

let arr2 = [];
for ( let item of arr ) //we can also do: let arr2 = [...arr]- opens a new place in the memory
{
    arr2.push(item);
}

console.log(arr, arr1, arr2); // -> arr [1, 2, 3, 4, 5] arr1[1, 2, 3, 4, 5](same place of arr) arr2[1, 2, 3, 4, 5]



//---------------------------------------------------------//

let user = 
{
    name: "acb",
    phone: "123"
}

let user1 = {...user}; //opens a new place in the memory and duplicate user details to user1 object

user1.mail = 'a@gmail.com';

console.log(user, user1); //same pointer principle


