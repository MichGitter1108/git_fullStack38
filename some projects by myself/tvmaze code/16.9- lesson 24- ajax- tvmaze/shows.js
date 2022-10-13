var shows = [];

var container = document.getElementById('showsDV');

function showsAjax() //show all the shows when refresh
{
    container.innerHTML = '';

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.tvmaze.com/shows',

        success: function (data) {
            shows = data;
            console.log(shows);
            printShowsToHTML(shows);
        },
        error: function (error) {
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
    singleShow += `<a href = "showDetailsID.html?id=${show.id}" target = "_blank"><button type = "button" class = "mt-2 btn btn-info">More Details</button></a>`;

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

        success: function (data) {
            shows = data;
            printInputShows(shows);
        },

        error: function (error) {
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
    singleShow += `<a href = "showDetailsID.html?id=${singleInputShow.show.id}" target = "_blank"><button type = "button" class = "mt-2 btn btn-info">More Details</button></a>`;

    singleShow += '</div>';
    singleShow += `</div>`;
    singleShow += `</div>`;
    singleShow += `</div>`;

    container.innerHTML += singleShow;
}
