var shows = [];

var container = document.getElementById('showsDV');

function showsAjax() //show all the shows when refresh
{
    container.innerHTML = '';

    $.ajax(
    {
        type: 'GET',
        dataType: 'json',
        url: 'https://api.tvmaze.com/shows',

        success: function (data) 
        {
            shows = data;
            console.log(shows);
            printShowsToHTML(shows);
        },
        error: function (error) 
        {
            console.log('error: ', error);
        }
    })
}

function printSingleShowToHTML(show) //printing show card
{
    console.log(show);
    var singleShow = '';
    singleShow += '<div class="mt-2 col-xl-2 col-lg-4 col-md-5 col-sm-12">';
    singleShow += '<div class="card mb-2" style="width: 13rem;">';
    singleShow += `<img src="${show.image.medium}" class="card-img-top" alt="..."/>`;
    singleShow += '<div class="card-body">';
    singleShow += `<h5 class="name">${show.name}</h5>`;
    singleShow += `<p class="type">${show.type}</p>`;
    singleShow += `<p class="language mt-1">${show.language}</p>`;
    singleShow += '<hr>';
    singleShow += `<div class = "summary">${show.summary}</div>`;
    singleShow += '<hr>';
    singleShow += '<div class = "text-center">';

    //--a button that sends us to another page (a href) with the specific show according to the id--//
    singleShow += `<button onclick = "singleShowInfoDIV(${show.id})" type = "button" class = "mt-2 btn btn-info">More Details</button>`;

    singleShow += '</div>';
    singleShow += `</div>`;
    singleShow += `</div>`;
    singleShow += `</div>`;

    container.innerHTML += singleShow;
}


function printShowsToHTML(array) //called from the ajax function
{
    for (var i = 0; i < array.length; i++) 
    {
        printSingleShowToHTML(array[i]);
    }
}

showsAjax();


//--------------------------------------------------------------------------------------------//
//--input movies cards printing functions--//

function onSubmit(value) //when click the search button
{
    container.innerHTML = '';

    var originalURL = 'https://api.tvmaze.com/search/shows?q=';
    var searchValue = value;

    var searchResult = originalURL + searchValue;

    $.ajax(
    {
        type: 'GET',
        datatype: 'json',
        url: searchResult,

        success: function (data) 
        {
            shows = data;
            printInputShows(shows);
        },

        error: function (error) 
        {
            console.log('error : ', error);
        },
    })
}

function printInputShows(showsArray) //that function calls for the function that prints shows cards of the input search
{
    console.log("data input array: ", showsArray);
    for (var i = 0; i < showsArray.length; i++) 
    {
        printSingleShowFromInputToHTML(showsArray[i]);
    }
}


function printSingleShowFromInputToHTML(singleInputShow) 
{
    var singleShow = '';
    singleShow += '<div class="mt-2 col-xl-2 col-lg-4 col-md-5 col-sm-12">';
    singleShow += '<div class="card mb-2" style="width: 13rem;">';
    singleShow += `<img src="${singleInputShow.show.image.medium}" class="card-img-top" alt="..."/>`;
    singleShow += '<div class="card-body">';
    singleShow += `<h5 class="name">${singleInputShow.show.name}</h5>`;
    singleShow += `<p class="type">${singleInputShow.show.type}</p>`;
    singleShow += `<p class="language mt-1">${singleInputShow.show.language}</p>`;
    singleShow += '<hr>';
    singleShow += `<div class = "summary">${singleInputShow.show.summary}</div>`;
    singleShow += '<hr>';
    singleShow += '<div class = "text-center">';

    //--a button that sends us to another page (a href) with the specific show according to the id--//
    singleShow += `<button onclick = "singleShowInfoDIV(${singleInputShow.show.id})" type = "button" class = "mt-2 btn btn-info">More Details</button>`;

    singleShow += '</div>';
    singleShow += `</div>`;
    singleShow += `</div>`;
    singleShow += `</div>`;

    container.innerHTML += singleShow;
}





//*- - - - - - - - - - - - showing single show in a div at the same page- - - - - - - - - - - - - - - - - - - - -//

var singleShowInfoDV = document.getElementById('singleShowInformation'); //the div of the single show DV
let baseURL = 'https://api.tvmaze.com/shows/';
function singleShowInfoDIV(singleID)
{
    var singleShowURLandID = baseURL + singleID; //combine the shows URL with an id (tvmaze according to specific id API)
    var singleShowForInfo = {}; //global object for saving

    $.ajax( //ajax for getting the specific url with the id of the single show information
    {
        type: 'GET', 
        dataType: 'json',
        url: singleShowURLandID, 
    
        success: function(data) 
        {
            singleShowForInfo = data; //saving for the variable because 'data' is only for the ajax function
            printSingleShowInfoInADivToHTML(singleShowForInfo); 
        },
        error: function(error) 
        {
            console.log('error: ', error);
        }
    })
}

function printSingleShowInfoInADivToHTML(singleShowOfAnID) //function of printing the specific show
{
    console.log(singleShowOfAnID);

    singleShowInfoDV.innerHTML = '';

    var single = '';

    single += '<div class = "text-center">';

    //*div of the image
    single += '<div style = "width: 50%; float: right;" class = "imgDV">';
    single += `<img src="${singleShowOfAnID.image.medium}" class="card-img-top" alt="...">`;
    single += '</div>';


    //*div of the tv show name
    single += '<div class = "text-center">';
    single += `<h1>${singleShowOfAnID.name}</h1>`;
    single += '</div>';


    //*div of the description
    single += '<div id = "description" class = "text-center">';
    single += `<h5><span style = "text-decoration: underline;">Type:</span> ${singleShowOfAnID.type}</h5>`;
    single += `<h5><span style = "text-decoration: underline;">Language:</span> ${singleShowOfAnID.language}</h5>`;
    single += '</div>';

    single += '<div id = "summary" class = "text-center">';
    single += `<p>${singleShowOfAnID.summary}</p>`;
    single += '</div>';

    single += '</div>';

    singleShowInfoDV.innerHTML += single;
}

