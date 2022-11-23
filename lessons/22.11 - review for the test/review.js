let usersArrayURL = 'https://jsonplaceholder.typicode.com/users';
let postsArrayURL = 'https://jsonplaceholder.typicode.com/posts';

let usersArray = []; //global array of the users for the use
let posts = []; //global array of the posts for the use

let postsDVTable = document.getElementById('postsTable');

let usersDisplayDV = document.getElementById('usersDV');


function showAllAjax(callbackFunction, url)
{
    console.log(url);
    $.ajax(
    {
            type: 'GET', 
            dataType: 'json',
            url: url, 
        
            success: function(data) 
            {
                callbackFunction(data); //one time the function is for printing users and the second time calling for the posts printing 
            },
            error: function(error) 
            {
                console.log('error: ', error);
            }
    })
}

function setPosts(postsData)
{
    posts = postsData;
}

function printUsersToHTML(usersData)
{
    usersArray = usersData;
    usersArray.map((singleUser, index) => //like for loop
    {
        printSingleToHTML(singleUser);
    }) 
}

function printSingleToHTML(user)
{
    let single = '';
    single += '<div class="mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">';
    single += '<div class="card mb-2" style="width: 15rem; height: 10rem;">';
    single += '<div class="card-body">';
    single += `<h5 class="name">${user.name}</h5>`;
    single += `<button type = "button" class ="btn btn-info" onclick = "postsTableOfTheUser(${user.id})">posts</button>`;
    single += `</div>`;
    single += `</div>`;
    single += `</div>`;

    usersDisplayDV.innerHTML += single;
}

function postsTableOfTheUser(someID)
{
    postsDVTable.innerHTML = '';
    let userPosts = posts.filter ( post => post.userId == someID );
    console.log(someID, userPosts);
    
    userPosts.map ( singlePost => 
    {
        let p =
        `<tr>
            <th scope = " row ">${singlePost.id}</th>
            <th scope = " row ">${singlePost.title}</th>
            <th scope = " row ">${singlePost.body}</th>
            <td></td>
        </tr>`;

        postsDVTable.innerHTML += p;
    })
};

showAllAjax(printUsersToHTML, usersArrayURL);
showAllAjax(setPosts, postsArrayURL); //callback for the function setPosts()


function displayInputResults()
{
    let searchResult = document.getElementById('inputDV');

    usersDisplayDV.innerHTML = '';

    let mappedUsersArray = usersArray.map(oneUser => //המערך הממויין
    {
        if ( oneUser.name.toLowerCase() == searchResult )
        {
            return oneUser.name; //doing the command of postsArray.push(p.id)
        }
        
        return null;
        //if the js not entering to the if block then returned undefined at the array and console log
        //if we do for example: return 1 the array will be with numbers of 1
    })

    printUsersToHTML(mappedUsersArray);
}

