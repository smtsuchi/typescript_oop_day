abstract class Duck {
    public static className: string = "Duck";
    color?: string;
    constructor(protected _age:number){
    }

    get age():number{
        return this._age
    }

    public quack():void{
        console.log("Generic quack sound")
    }

    public swim():void{
        console.log('regular swim :)')
    }

};

class MallardDuck extends Duck{
    public static className: string = "Mallard Duck";


    constructor(public color: string,  age:number){
        super(age)
    }

    override get age():number{
        return this._age + 5
    }

    public override quack(): void {
        console.log('Mallards Quack')
    }

    fly=()=> {
        console.log('weeeeeeeeeeeeeeeeee')
    }

  
};


class CanvasbackDuck extends Duck{
    public static className: string = "Canvasback Duck";


    constructor(public color: string,  age:number){
        super(age)
    }

    override get age():number{
        return this._age - 1
    }

    public override quack(): void {
        console.log('Canvasback Quack')
    }

   
};

// const daffy = new Duck(20)
// console.log(daffy.age)
// daffy.quack()
// daffy.swim()
const sho = new MallardDuck('brown', 20)
console.log(Duck.className)
console.log(MallardDuck.className)
console.log(sho)

sho.quack()
sho.swim()
console.log(sho.age)


console.log('=========POLYMORPHISM==============')
// POLYMORPHISM 
let duckArr: Duck[] = [new MallardDuck('black', 23), new CanvasbackDuck('white', 23)]
for (let duck of duckArr){
    console.log(duck.age)
    duck.quack()
    duck.swim()
    console.log(duck.color)
};

// GOAL IS TO CREATE AN OOP DESIGN PATTERN THAT FOLLOWS RULES BUT IS ALSO FLEXIBLE.
interface Quckable {
    quack():void
};
interface Swimmable {
    swim():void
};
interface Flyable {
    fly():void
};

class Quacks implements Quckable {
    quack(): void {
        console.log('Quack')
    }
};
class Squeaks implements Quckable {
    quack(): void {
        console.log('Sqeuak')
    }
};
class Floats implements Swimmable{
    swim(): void {
        console.log('Look i am floating')
    }
}
class Swims implements Swimmable{
    swim(): void {
        console.log('look i am swimming')
    }
}
class FlyWithWings implements Flyable{
    fly(): void {
        console.log('soar to the sun')
    }
};
class NeverFly implements Flyable{
    fly(): void {
        console.log('.. grounded ..')
    }
}

abstract class NewDuck implements Quckable, Swimmable, Flyable {
    protected _swimAbility: Swimmable;
    protected _quackAbility: Quckable;
    protected _flyAbility: Flyable;


    constructor(protected _age: number){}
    get age(){return this._age}

    set flyAbility(fa: Flyable){
        this._flyAbility = fa
    };
    set quackAbility(qa: Quckable){
        this._quackAbility = qa
    };
    set swimAbility(sa: Swimmable){
        this._swimAbility = sa
    };

    swim(): void {
        this._swimAbility.swim()
    }
    quack(): void {
        this._quackAbility.quack()
    }
    fly(): void {
        this._flyAbility.fly()
    }
};


class NewMallardDuck extends NewDuck  {
    _swimAbility = new Swims()
    _flyAbility = new FlyWithWings()
    _quackAbility = new Quacks()
};
class NewCanvasbackDuck extends NewDuck  {
    _swimAbility = new Swims()
    _flyAbility = new FlyWithWings()
    _quackAbility = new Squeaks()
};
// rubber ducks do not fly
class NewRubberDuck extends NewDuck {
    _swimAbility = new Floats()
    _flyAbility = new NeverFly()
    _quackAbility = new Squeaks()
};

let newDuckArr: NewDuck[] = [new NewMallardDuck(20), new NewCanvasbackDuck(20), new NewRubberDuck(20)];
let flyableDuckArr: Flyable[] = [new NewMallardDuck(20), new NewCanvasbackDuck(20)];

console.log('=================================')

for (let duck of newDuckArr){
    duck.fly()
    duck.swim()
    duck.quack()
}

