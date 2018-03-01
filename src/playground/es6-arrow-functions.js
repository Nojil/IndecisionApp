//es5 function
function square(x) {
    return x * x;
};
console.log(square(8));


//es6 arrow function
const squareArrow = (x) => {
    return x * x;
}; 
console.log(squareArrow(10));


//es6 arrow function expression syntax
const squareArrow2 = (x) => x * x;
console.log(squareArrow2(3));


//challenge
const fullName = 'Charles Lang';
const getFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
};
console.log(getFirstName(fullName));


const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2(fullName));
