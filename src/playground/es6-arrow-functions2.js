//arguments object - no longer bound with arrow functions

//es5
const add = function(a, b) {
    console.log(arguments);
    
    return a + b;
}
console.log(add(55, 1));

//es6
//using arrow function you no longer have acccess to the arguments variable
const add2 = (a, b) => {
    return a + b;
}

//this keyword - no longer bound

const user = {
    name: 'Charles',
    cities: ['Denver', 'Castle Rock', 'Highlands Ranch'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();