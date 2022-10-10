//    *                       **                  ***            ****
var singleShowID = new URLSearchParams(window.location.search).get('id');

//* var 'selectedShowID' --> a variable that we save in it the parameter of id key
//** URLSearchParams(....) --> JS function: search a parameter...
//*** (window.location.search) --> search on the site URL 
//**** get('id') --> a parameter from the url itself (a string)

var singleContainer = document.getElementById('singleShowContainer');


var singleShowURL = 'https://api.tvmaze.com/shows/' + singleShowID; //combine the shows URL with an id (tvmaze according to specific id API)
var singleShow = {}; //global object for saving

$.ajax ({
    type: 'GET', 
    dataType: 'json',
    url: singleShowURL, 

    success: function(data) 
    {
        singleShow = data; //saving for the variable because 'data' is only for the ajax function
        printSingleShowToHTML(singleShow); 
    },
    error: function(error) 
    {
        console.log('error: ', error);
    }
})

function printSingleShowToHTML(show)
{
    console.log(show);
    var single = '';
    single += '<div class="mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">';
    single += '<div class="card mb-2" style="width: 13rem;">';
    single += `<img src="${show.image.medium}" class="card-img-top" alt="...">`;
    single += '<div class="card-body">';
        single += `<h5 class="name">${show.name}</h5>`;
        single += `<p class="type">${show.type}</p>`;
        single += `<p class="language mt-1">${show.language}</p>`;
        single += '<hr>';
        single += `<div class = "summary">${show.summary}</div>`;
        single += '<hr>';
        single += '<div class = "text-center">';

            //--a button that sends us to another page (a href) with the specific show according to the id--//
            single += `<a href = "showDetailsID.html?id=${show.id}" target = "_blank"><button type = "button" class = "mt-2 btn btn-info">More Details</button></a>`;

        single += '</div>';
    single += `</div>`;
    single += `</div>`;
    single += `</div>`;

    singleContainer.innerHTML += single;
}



