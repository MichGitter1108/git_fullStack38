let singleAlbumDivContainer = document.getElementById('singleAlbumContainer');

// a function that gets data from local storage
let getDataFromLocalStorage = (key) =>
{
    return JSON.parse(localStorage.getItem(key));
}


let albumTitleFromLocalStorage = getDataFromLocalStorage('singleOneAlbumTitle');
let albumIDfromLocalStorage = getDataFromLocalStorage('singleOneAlbumId');

console.log(albumTitleFromLocalStorage, albumIDfromLocalStorage);

let sAlbum = '';
    sAlbum += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 ms-2">';
    sAlbum += '<div class="card mb-2" style="width: 13rem;">';
    sAlbum += '<div class="card-body">'; 
    sAlbum += `<h5 class="card-title" style="margin-top: 7px;"> ${albumTitleFromLocalStorage} </h5>`;
    sAlbum += `<p class = "card-text"> <span style = "text-decoration: underline;"> id:</span> ${albumIDfromLocalStorage}</p>`;
    //div of the button
    sAlbum += '<div class="text-center">'; 
    sAlbum += '</div>';
    sAlbum += '</div>';
    sAlbum += '</div>';
    sAlbum += '</div>';

singleAlbumDivContainer.innerHTML += sAlbum;