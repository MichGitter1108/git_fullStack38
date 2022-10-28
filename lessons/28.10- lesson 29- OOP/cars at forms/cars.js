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

//*create a new object with passed parameters
let mazda = new Car(1, 'Mazda', 90000, 2022);
let honda = new Car(2, 'Honda', 98000, 2021);

CarsArray[mazda, honda]; //*short of pushing objects into the array
console.log(CarsArray);


//*two parameters and we gonna insert them into the carService array
let date = '20.10.2022';
let km = '50,000';


let searchID = +prompt('enter id for search: ');
let inputDate = prompt('please enter a date: ');
let inputKM = prompt('please enter km: ');

let carFind = CarsArray.find( car =>
{
    if (car.id == searchID)
    {
        car.setService(inputDate, inputKM);
    }
})