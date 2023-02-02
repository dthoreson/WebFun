function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1= pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2= pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3= pizzaOven("stuffed", "pesto", ["parmesan", "cheddar"], ["chicken", "onions", "peppers"]);
console.log(p3);

var p4= pizzaOven("thin crust", "garlic aoli", ["cheddar", "feta"], ["sausage", "jalepenos", "anchovies"]);
console.log(p4);


var crustType = [
    "deep dish",
    "hand tosses",
    "stuffed",
    "thin crust"
]; 

var sauceType = [
    "traditional",
    "marinara",
    "pesto",
    "garlic aoli"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "parmesan",
    "feta"
]; 

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "olives",
    "peppers",
    "anchovies",
    "mushrooms",
    "onions"
];


function random(array) {
    var i = Math.floor(array.length*Math.random());
    return array[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = random(crustType);
    pizza.sauceType = random(sauceType);
    pizza.cheeses = random(cheeses);
    pizza.toppings = random(toppings);

    return pizza;
}

console.log(randomPizza());
