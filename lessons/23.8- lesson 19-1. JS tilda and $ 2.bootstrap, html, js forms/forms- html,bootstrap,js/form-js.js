var users = [];

function onSubmit()
{

    //build an object
    var user = {
        //it does search in all the html form for the element with those ids and insert into the object keys

        //because the ids mailInputDV and passwordDV are parameters, we can do this lines instead of:
        //mail: document.getElementById(mailInputDV).value; -mail
        //password: document.getElementById(passwordDV).value; -password

        mail: mailInputDV.value,
        
        password: passwordDV.value,

        check: Check1.checked //check box- true or false
    };


    //insert the object to an array
    users.push(user);
    
    console.log(users); //console log the array users

    document.getElementById('formEL').reset(); //when submit the form restores- the id of the form

}


