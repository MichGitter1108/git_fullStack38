var products = [];

function addProduct() 
{
    var p =
    {
        name: productNameDV.value,

        price: priceDV.value,

        catagory: catagoryDV.value,

        image: imageLinkDV.value
    };

    products.push(p);

    console.log(products);

    document.getElementById('formProducts').reset();

    printAtTable();
}

var singleProduct = '';

var productsTable = document.getElementById("tableBody");

function printAtTable() 
{
    productsTable.innerHTML = '';

    for (var i = 0; i < products.length; i++) 
    {
        printSingleProduct(products[i], i + 1);
    }
}


function printSingleProduct(product, order) 
{
    singleProduct = '';
    singleProduct += '<tr>';
    singleProduct += `<td>${order}</td>`;
    singleProduct += `<td class = "mt-2">${product.name}</td>`;
    singleProduct += `<td class = "mt-2">${product.price}</td>`;
    singleProduct += `<td class = "mt-2">${getCatagoryName(product.catagory)}</td>`;
    singleProduct += `<td class = "mt-2"><img src = '${product.image}' ></td>`;
    singleProduct += `<td><button type = "button" class = "btn btn-danger" onclick ="DeleteProductDIV('${order}')" style = "color: black;">remove product</button></td>`;
    singleProduct += '</tr>';

    productsTable.innerHTML += singleProduct;
}

function getCatagoryName(catagory) 
{
    if (catagory == 1) 
    {
        return 'drinks';
    }

    if (catagory == 2) 
    {
        return 'meat';
    }

    if (catagory == 3) 
    {
        return 'dairy';
    }

    if (catagory == 4) 
    {
        return 'snacks';
    }

    if (catagory == 5) 
    {
        return 'basic';
    }

    return 'clean'
}

function DeleteProductDIV(index)
{
    products.splice((index - 1), 1);
    printAtTable();
}


