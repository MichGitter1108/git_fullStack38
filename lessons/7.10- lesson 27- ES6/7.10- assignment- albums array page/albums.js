let albumsContainer = document.getElementById('albumsDV');

let albumsArray = [];


//-print all the albums from the json array-//

let showAllAlbumsAjax = () => //*ajax function written as arrow function! show all albums
{
    localStorage.clear();
    albumsContainer.innerHTML = '';

    $.ajax(
        {
            type: 'GET',
            dataType: 'json',
            url: 'https://jsonplaceholder.typicode.com/albums',

            success: function (data) {
                albumsArray = data;
                console.log("the albums JSON array: ", albumsArray);
                printAlbumsToHtml(albumsArray);
            },
            error: function (error) {
                console.log('error: ', error);
            }
        })
}

let printAlbumsToHtml = (JSONarray) => {
    for (let singleAlbum of JSONarray) {
        printSingleAlbumToHTML(singleAlbum);
    }
}

let printSingleAlbumToHTML = (album) => {
    let sAlbum = '';
    sAlbum += '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3">';
    sAlbum += '<div class="card mb-2" style="width: 13rem;">';
    sAlbum += '<div class="card-body">';
    sAlbum += `<h5 class="card-title" style="margin-top: 7px;"> ${album.title} </h5>`;
    sAlbum += `<p class = "card-text"> <span style = "text-decoration: underline;"> id:</span> ${album.id}</p>`;
    //div of the button
    sAlbum += '<div class="text-center">';
    sAlbum += `<button type= "button" onclick = "singleAlbumDetailNewWindow('${album.title}','${album.id}')" class = "btn btn-info p-2">Click me!</button>`;
    sAlbum += '</div>';
    sAlbum += '</div>';
    sAlbum += '</div>';
    sAlbum += '</div>';

    albumsContainer.innerHTML += sAlbum;
}

showAllAlbumsAjax(); //calling the function that shows all th albums




//- - - - - - - - - - - - - - - - - - - - - - - - - - - -//
//*-print albums according to the input value- filter by the input value method//

let displayInputAlbums = (someTitleValue) => {
    albumsContainer.innerHTML = '';

    let albumFilterArray = albumsArray.filter((album) => {
        if (album.title.includes(someTitleValue)) {
            return album;
        }
    })

    console.log("filtered titles array: ", albumFilterArray);

    if (albumFilterArray.length == 0) {
        alert("No results found..!");
    }
    else {
        for (let filteredAlbum of albumFilterArray) {
            printSingleAlbumToHTML(filteredAlbum);
        }
    }
}

//- - - - - - - - - - - - - - - - - - - - - - -//
//function to single album display//
let singleAlbumDetailNewWindow = (title, id) => {
    localStorage.clear();
    saveDataToLocalStorage('singleOneAlbumTitle', title);
    saveDataToLocalStorage('singleOneAlbumId', id);
    window.open("singleAlbumDetails.html");
}

//external function for setItem to LS
let saveDataToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}