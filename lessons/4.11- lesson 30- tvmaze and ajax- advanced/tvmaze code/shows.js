let singleShowInfoDV = document.getElementById('singleShowInformation'); //the div of the single show DV
let baseTVmazeURL = 'http://api.tvmaze.com/shows';
let shows = [];

let container = document.getElementById('showsDV');

//- - - - - - - - - - - - - - - - - - - - - - - -//
//*display all the shows when refresh: 
function showsAjax(_function, id = 0, value = '') //id = 0 --> default id value
{
    container.innerHTML = '';

    let theURL = '';

    if (id == 0) {
        theURL = baseTVmazeURL;
    }

    if (id != 0) {
        theURL = baseTVmazeURL + '/' + id;
    }

    if (value == '') {
        theURL = baseTVmazeURL;
    }

    else {
        theURL = baseTVmazeURL + '?q=' + value;
    }

    $.ajax(
        {
            type: 'GET',
            datatype: 'json',
            url: theURL,
            success: function (data) {
                console.log(data);
                _function(data);
            },
            error: function (error) {
                console.log('error : ', error);
            },
        })
}

function printShowsToHTML(allShowsArray) //called from the ajax function
{
    for (let i = 0; i < allShowsArray.length; i++) {
        printSingleShowToHTML(allShowsArray[i]);
    }
}

function printSingleShowToHTML(show) //printing show card
{
    console.log(show);
    let singleShow = '';
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

showsAjax(printShowsToHTML, 0);















//--------------------------------------------------------------------------------------------//
//*--input movies cards printing functions:--//

function onSubmit(value) //when click the search button
{
    container.innerHTML = '';

    showsAjax(printInputShows, 0, value);
}

function printInputShows(showsArray) //that function calls for the function that prints shows cards of the input search
{
    console.log("data input array: ", showsArray);
    for (let i = 0; i < showsArray.length; i++) {
        printSingleShowFromInputToHTML(showsArray[i]);
    }
}


function printSingleShowFromInputToHTML(singleInputShow) {
    let singleShow = '';
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


//*- - - - - - - - - - - - showing single show in a div at the same page by clicking- - - - - - - - - - - - - - - - - - - - -//

function singleShowInfoDIV(singleID) {
    showsAjax(printSingleShowInfoInADivToHTML, singleID);
}

function printSingleShowInfoInADivToHTML(singleShowOfAnID) //function of printing the specific show
{
    console.log(singleShowOfAnID);

    singleShowInfoDV.innerHTML = '';

    let single = '';

    single += '<div class = "text-center">';

    //*div of the image

    if ( singleShowOfAnID.image != null )
    {
        single += '<div style = "width: 50%; float: right;" class = "imgDV">';
        single += `<img src="${singleShowOfAnID.image.medium}" class="card-img-top" alt="...">`;
        single += '</div>';
    }


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

