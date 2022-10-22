var names = ["ronen", "michal", "amir"];

//--saving the array to the local storage--//
//                      *            **
localStorage.setItem('names', JSON.stringify(names));
//* --> "names" is the the key of the local storage variable we save the array in, it can be any name we give it.
//** -->  the array 'names' is an object, and because the local storage can receive only strings, we have to do 'JSON.stringify(OBJECT)'.


//--get the array object from the local storage--//
//            *                
var get = JSON.parse(localStorage.getItem('names'));
//* --> JSON.parse()- the array 'names' at the local storage is a string, so if we want to bring it back to us as an object, we have to do this command


//--remove the array from the local storage--//
//                         *
//localStorage.removeItem('names');
// * --> 'names'- the key name of the object/element as in the local storage


//--remove all the elements from the local storage--//
//localStorage.clear();

