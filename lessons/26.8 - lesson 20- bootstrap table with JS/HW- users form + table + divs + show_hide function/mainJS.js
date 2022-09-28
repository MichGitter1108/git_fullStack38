var users = [];

function onSubmit()
{
    var user =
    {
        username: usernameDV.value,

        Email: emailDV.value,

        phone: phoneNumberDV.value,

        city: document.getElementById ("cityDV").value = cityDV.options[cityDV.selectedIndex].text
    };

    console.log(user);

    users.push(user);

    console.log(users);

    document.getElementById('formUsers').reset();

}

var tableBody = document.getElementById("tableBody"); 

var singleUser = '';


//--now we print the user/s in the table- button function--//
function printAtTable()
{
    tableBody.innerHTML = '';
    for ( var i = 0; i < users.length; i++)
    {
        printSingleUser(users[i], i+1);
    }
}


function printSingleUser(user, order)
{
    
    singleUser += '<tr>';
    singleUser += `<td>${order}</td>`;
    singleUser += `<td class = "mt-2">${user.username}</td>`;
    singleUser += `<td class = "mt-2">${user.Email}</td>`;
    singleUser += `<td class = "mt-2">${user.phone}</td>`;
    singleUser += `<td class = "mt-2">${user.city}</td>`;
    singleUser += `<td><button type = "button" class = "btn btn-outline-light" onclick ="singleUserDIV('${user.username}', '${user.Email}', '${user.phone}', '${user.city}')">click to view user details</button></td>`;
    singleUser += '</tr>';

    tableBody.innerHTML = singleUser;
}

//hide and show table function
var flag = true;

function HideShowTable()
{
    if ( flag == true )
    {
    tableBody.style.visibility="hidden";
    }

    else
    {
    tableBody.style.visibility="visible";
    }

    flag = !flag; //from true to false and opposite
}


var userDetails = document.getElementById("userDetails"); //the html element we are going to insert the printed user's div

function singleUserDIV(u, m, p, c)
{
    userDetails.innerHTML = '';
    var userDiv = '';
    userDiv += '<div class = "user mb-3">';
    userDiv += '<div class = "headTitle"><i class="bi bi-person" style = "font-size: 25px; color: white;"></i></div>';
    userDiv += '<div class ="h3">user details: </div>';
    userDiv += `<div class = "mt-2"><span style = "text-decoration: underline;">username</span>: ${u}</div>`;
    userDiv += `<div class = "mt-2"><span style = "text-decoration: underline;">Email</span>: ${m}</div>`;
    userDiv += `<div class = "mt-2"><span style = "text-decoration: underline;">Phone number</span>: ${p}</div>`;
    userDiv += `<div class = "mt-2"><span style = "text-decoration: underline;">City</span>: ${c}</div>`;
    userDiv += '</div>';
    userDiv += '</div>';

    userDetails.innerHTML += userDiv;
}

