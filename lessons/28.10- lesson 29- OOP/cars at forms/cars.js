let id = 0;
let CarsArray = [];

class Car
{
    id = 0;
    brand = '';
    price = 0;
    year = 0;
    carService = [];

    constructor(id, brand, price, year)
    {
        this.id = id;
        this.brand = brand;
        this.price = price;
        this.year = year;
    }

    setService( date, km ) //!without the word 'function'
    {
        let service = //*an object to every service
        {
            date: date,
            km: km
        }
        this.carService.push(service);
    }
}

function submitCar()
{
    console.log(id, companyId.value, yearId.value, priceId.value);
    let car = new Car(id, companyId.value, yearId.value, priceId.value);
    CarsArray.push(car);
    id++;
    console.log(CarsArray);
}


function addServiceToCar()
{
    let id = IDinput.value;
    let findCar = CarsArray.find(car =>
        {
            return ( id == car.id );
        }
    )

    findCar.setService(dateId.value, kmId);

    console.log(CarsArray);
}