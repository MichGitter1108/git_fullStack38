let allCoinsURL = 'https://api.coingecko.com/api/v3/coins/list';

let specificCoinIdURL = 'https://api.coingecko.com/api/v3/coins/';

let coinsDV = document.getElementById('displayBitcoins');

let coinsArray = [];

function ajaxFunction(callbackFunction, someURL)
{
    coinsDV.innerHTML = '';
    
    $.ajax (
    {
        type: 'GET', 
        dataType: 'json',
        url: someURL, 

        success: function(data) 
        {
            coinsArray = data;
            callbackFunction(coinsArray);
        },
        error: function(error) 
        {
            console.log('error: ', error);
        }
    })
}

function printAllCoinsToHtmlCards( coinsData )
{

    for ( let i = 0; i < 50; i++ )
    {
        printSingleCoinToHtmlCard( coinsData[i] );
    }
}

function printSingleCoinToHtmlCard(singleCoin)
{
    let c = '';

    c += '<div class="mt-2 col-xl-3 col-lg-4 col-md-6 col-sm-12">';
    c += '<div class="card mb-2" style="width: 15rem; height: 15rem;">';
    c += '<div class="card-body">';
    c += `<div class = "d-flex p-3">
        <h5>${singleCoin.symbol}</h5>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
    </div>`;
    c += `<p>${singleCoin.name}</p>`;
    c += `<button class="btn btn-warning" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onclick = "displayCollapseInfo()">More info</button>`;
    c += `</div>`;
    c += `</div>`;
    c += `</div>`;

    coinsDV.innerHTML += c;
}

ajaxFunction( printAllCoinsToHtmlCards, allCoinsURL );