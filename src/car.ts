class Car {
    // [nickname: string]: string;
    public static count: number = 0;
    public static addToCount():void{
        Car.count++
    }

    public addToCount():void{
        Car.count++
    }

    constructor(private _make:string, private _model:string, private _year:number){
        Car.count++
    }


    mileage = (): [()=>void,(miles:number)=>void ] => {
        let mileage = 0;

        const getMileage = ():void => {
            console.log(mileage)
        };
        const addMiles = (miles:number):void => {
            mileage+= miles
        };
        return [getMileage, addMiles]
    };

    talk(phrase:string):void {
        console.log(phrase)
    }

    get make(): string {
        return this._make
    }
    set make(newMake: string) {
        if (newMake){
            this._make = newMake
        }
        else{
            console.log('Invalid input. The previous make has not been changed')
        }
    }
    get model():string {
        // handle / validate how we get
        if (this._model){
            return this._model
        }
        else{
            return "No model data available."
        }
    }
    get year():number {
        return this._year
    }



}


const myCar = new Car('Toyota', "Corolla", 2004)
console.log(myCar.make)
myCar.make = 'Honda'
console.log(myCar.make)
myCar.make = ''
console.log(myCar.make)


//index signatures
// SYNTAX:
// [placeHolder:DataTypeOfProperty]: DataTypeContainInProperty
// myCar.nickname = 'Mach 5000'
console.log(myCar)
const [getMileage, addMiles] = myCar.mileage()
getMileage()
addMiles(100)
getMileage()
// console.log(myCar)
addMiles(200)
getMileage()


// Static Methods and properties
console.log(Object.keys(myCar))
Car.count // property
console.log(Car.count)
Car.addToCount() // method
console.log(Car.count)
myCar.addToCount()
console.log(Car.count)
const sarahsCar = new Car('Tesla', "CyberTruck", 2004)
const renatsCar = new Car('Nissan', "360z", 2004)
const troysCar = new Car('Chevy', "C-10", 1964)
console.log(Car.count)