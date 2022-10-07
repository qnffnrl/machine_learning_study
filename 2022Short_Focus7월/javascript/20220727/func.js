let myInt = 1;

function increase(value){
    return ++value;
}

console.log(increase(myInt));

let myCar = {
    maker: "benz",
    color: "red"
};

console.log(myCar);

function changeColor(car){
    car.color = "blue";
}

changeColor(myCar);
console.log(myCar.color);