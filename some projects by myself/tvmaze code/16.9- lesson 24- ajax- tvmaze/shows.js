//prints show by the id key of the show object

var shows = [];

var container = document.getElementById('showsDV');

function showsAjax()
{
    container.innerHTML = '';

    $.ajax ({
        type: 'GET', 
        dataType: 'json',
        url: 'https://api.tvmaze.com/shows', 

        success: function(data) 
        {
            shows = data;
            console.log(shows);
            printShowsToHTML(shows);
        },
        error: function(error) 
        {
            console.log('error: ', error);
        }
    })
}

function printShowsToHTML(showsArray)
{
    for ( var i = 0; i < showsArray.length; i++ )
    {
        printSingleShowToHTML(showsArray[i]);
    }
}


function printSingleShowToHTML(show)
{
    var singleShow = '';
    singleShow += '<div class="mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">';
    singleShow += '<div class="card mb-2" style="width: 13rem;">';
    singleShow += `<img src="${show.image.medium}" class="card-img-top" alt="..."></img>`;
    singleShow += '<div class="card-body">';
        singleShow += `<h5 class="name">${show.name}</h5>`;
        singleShow += `<p class="type">${show.type}</p>`;
        singleShow += `<p class="language mt-1">${show.language}</p>`;
        singleShow += '<hr>';
        singleShow += `<div class = "summary">${show.summary}</div>`;
        singleShow += '<hr>';
        singleShow += '<div class = "text-center">';

            //--a button that sends us to another page (a href) with the specific show according to the id--//
            singleShow += `<a href = "showDetails.html?id=${show.id}" target = "_blank"><button type = "button" class = "mt-2 btn btn-info" onclick = "anotherPage()">More Details</button></a>`;

        singleShow += '</div>';
    singleShow += `</div>`;
    singleShow += `</div>`;
    singleShow += `</div>`;

    container.innerHTML += singleShow;
}

showsAjax();