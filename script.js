let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this Duck is " + this.name +".";}
};

let dog = {
    name:" Spot",
    numLegs: 4,
    sayName: function() {return "The name of this Dog is " + this.name +".";}
};

//only change code below this like
duck.numLegs = duck.numLegs;
console.log("you have "+ duck.numLegs+" legs. " + duck.sayName());

dog.numLegs = dog.numLegs;
console.log("you have "+ dog.numLegs+" legs. " + dog.sayName());

document.getElementById('Duck').innerHTML = dog.numLegs + dog.sayName();
