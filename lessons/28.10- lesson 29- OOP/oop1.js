let id = 1;
let CarsArray = [];

class Car //* class + 'name of the class'
{
    doors = ''; //*one parameter of the object
    engine = '';
    color = '';
    model = '';
    company = ''; //* the parameter 'company' -> (this.company)
    year = '';
    price = '';


    //- - - - - - - - - - -//
    //*constructor function - applies without calling her with the parameters
    constructor(company, color, engine, model, year, price) //!the word 'constructor' is a permanent word
    {
        
        //*          **
        this.company = company; //*this.company -> the characteristic of the class 'company' (line 7)
        //** name -> the parameter name that comes from the calling

        
        //*          **
        this.color = color; //*this.color -> the characteristic of the class 'color' (line 5)
        //** color -> the parameter name that comes from the calling

        this.engine = engine;
        this.model = model;
        this.year = year;
        this.price =price;
    }
}

function submitCar() //*adding new car object with the input values and push into the cars array
{
    let newCar = new Car(id, companyId.value, yearId.value, priceId.value);
    CarsArray.push(newCar);
    console.log(CarsArray);

    id++;
}

