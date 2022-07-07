// array to declare in js
// const names=['jack','joe']
// type ElevatedEmployee = Admin & Employee
var e1 = {
    names: 'Joes',
    privileges: ['create-server'],
    startDate: new Date()
};
function sub(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name:' + emp.names);
    if ('privileges' in emp) {
        console.log('Privileges:' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('start Date:' + emp.startDate);
    }
}
// printEmployeeInfo(e1)
printEmployeeInfo({ names: 'maxi', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('drive slowly...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Drive fast...');
    };
    Truck.prototype.loadedCar = function (amount) {
        console.log('Loading....' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(Vechicle) {
    Vechicle.drive();
    // if('Loadedcar' in  Vechicle){
    if (Vechicle instanceof Truck) {
        Vechicle.loadedCar(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
