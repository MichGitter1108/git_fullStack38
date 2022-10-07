let arr = [1, 2, 3, 4];

let arr1 = arr; //arr1 is now "points" on the memory place of arr

arr1.push(5); //arr is now -> arr [1, 2, 3, 4, 5]

let arr2 = [];
for ( let item of arr )
{
    arr2.push(item);
}

console.log(arr, arr1, arr2); // -> arr [1, 2, 3, 4, 5] arr1[1, 2, 3, 4, 5](same place of arr) arr2[1, 2, 3, 4, 5]

