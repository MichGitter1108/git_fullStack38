var num1 = prompt("Please enter first number: ");
var num2 = prompt("Please enter second number: ");

if (num2 > num1)
{
    console.log("NUM2: ", num2);
}

else
{
    console.log(num1);
}

/*************************חישוב עודף ללקוח****************************/

var price = prompt("please enter the price of this product: ");
var payment = prompt("please enter how much the customer paid: ");

if (payment > price)
{
    console.log('you need to give the customer', payment-price, 'shekels');
}

else
{
    console.log('the customer paid exactly the price of the product');
     
}

/**************************שלושה מוצרים, אם התשלום קטן מידי להודיע ללקוח****************************/

var price1 = +prompt("please enter the price of first product: ");
var price2 =  +prompt("please enter the price of second product: ");
var price3 = +prompt("please enter the price of third product: ");

var priceSum = price1 + price2 + price3;

payment = +prompt("please enter your payment: ");

if (payment > priceSum)
{
    var change = payment-priceSum;
    console.log("you need to recieve: ", change , "shekels");
}

else if ( payment == priceSum)
{
    alert('Goodbye, thank you!');
}

else
{
    var more = priceSum - payment;
    alert("you have to pay more ", more , "shekels");
} 









