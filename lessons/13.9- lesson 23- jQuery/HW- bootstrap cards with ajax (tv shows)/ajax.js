var tvShows = [];

var container = document.getElementById('showsDV');

var url = 'https://api.tvmaze.com/search/shows?q=';

function urlInput(val)
{
    showsDV.innerHTML = '';
    $.ajax ({
        type: 'GET', 
        dataType: 'json',
        url: url + val, 
    
        success: function(data) 
        {
            tvShows = data;
            console.log(tvShows);
            printShowsToHTML(tvShows);
        },
        error: function(error) 
        {
            console.log('error: ', error);
        }
    })
}

urlInput('girls');


function printShowsToHTML(shows)
{
    for (var i = 0; i < shows.length; i++)
    {
        buildAtvShowCard(shows[i]);
    }
}

function buildAtvShowCard(show)
{
    var singleShow = '';
    singleShow += '<div class="mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">';
    singleShow += '<div class="card" style="width: 15rem;">';
    singleShow += `<img src="${show.show.image.medium}" class="card-img-top" alt="..."></img>`;
    singleShow += '<div class="card-body">';
        singleShow += `<h5 class="card-title">${show.show.name}</h5>`;
        singleShow += `<p class="card-text">${show.show.type}</p>`;
        singleShow += `<p class="card-text">${show.show.language}</p>`; 
        singleShow += '<div class = "text-center">';       
            singleShow += '<button class = "btn btn-warning">More Details</button>';
        singleShow += '</div>';
    singleShow += `</div>`;
    singleShow += `</div>`;
    singleShow += `</div>`;

    showsDV.innerHTML += singleShow;
}


