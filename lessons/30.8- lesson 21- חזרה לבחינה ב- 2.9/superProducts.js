var products = [];

function onSubmit()
{
    var product = 
    {
        name: productNameDV.value,
        price: priceDV.value,
        catagory: catagoryDV.value
    };

    products.push(product);

    console.log(products);

    document.getElementById('formProducts').reset();
}



var tableBody = document.getElementById('tableBody'); //get and use the html table element to print into it

var singleProduct = ''; //a single product printed every iteration of the function printSingleProduct()

function showProducts(catagory)
{
    tableBody.innerHTML = '';

    for ( var i = 0; i < products.length; i++)
    {
        if ( products[i].catagory == `${catagory}` )
        {
            printSingleProduct(products[i]);
        }
    }
}

function printSingleProduct(product)
{
    singleProduct = ''; //before every product printed we need to recover it
    singleProduct += '<tr>';
    singleProduct += `<td class = "mt-2">${product.name}</td>`;
    singleProduct += `<td class = "mt-2">${product.price}</td>`;
    singleProduct += `<td class = "mt-2">${getCatagoryName(product.catagory)}</td>`;
    singleProduct += '</tr>';

    tableBody.innerHTML += singleProduct;
}

function getCatagoryName(catagory)
{
    if ( catagory == 1 )
    {
        return 'drinks';
    }
    if ( catagory == 2 )
    {
        return 'meat';
    }
    if ( catagory == 3 )
    {
        return 'dairy';
    }
    if ( catagory == 4 )
    {
        return 'snacks';
    }
    if ( catagory == 5 )
    {
        return 'basic';
    }

    return 'clean'
}

