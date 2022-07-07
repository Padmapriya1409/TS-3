// array to declare in js
// const names=['jack','joe']

// Array to declare in ts

// interface & admin type
// type Admin={

interface Admin{
    names:string;
    privileges:string[]
}

// type Employee= { 

interface Employee {
    names:string;
    startDate:Date;
}

interface ElevatedEmployee extends Employee,Admin{}

// type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee ={
    names:'Joes',
    privileges:['create-server'],
    startDate:new Date()
}


type combinable = string | number;
type Numeric = number| boolean;
// we combine both together
type Unique = combinable | Numeric

function sub(a:combinable,b:combinable){
    if (typeof a==='string' || typeof b==='string'){
        return a.toString() + b.toString()
    }
    return a+b;
}
// in type
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp:UnknownEmployee){
    console.log('Name:' + emp.names)
    if ('privileges'in emp) {
        console.log('Privileges:'+emp.privileges)
        }
    if ('startDate' in emp) {
        console.log('start Date:'+ emp.startDate)
    }    
}
// printEmployeeInfo(e1)
printEmployeeInfo({names:'maxi',startDate:new Date()})

class Car{
    drive(){
        console.log('drive slowly...')
    }
}

class Truck{
    drive(){
        console.log('Drive fast...')
    }
loadedCar (amount: number){
    console.log('Loading....'+amount)
}
}
// instanceof type
type Vechicle = Car|Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(Vechicle : Vechicle){
    Vechicle.drive()
    // if('Loadedcar' in  Vechicle){
        if(Vechicle instanceof Truck){
       Vechicle.loadedCar(1000)
    }
}
useVehicle(v1)
useVehicle(v2)





