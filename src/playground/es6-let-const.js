// var allows to be reassigned throughout your code and redefine its value
var nameVar = 'charles';
var nameVar = 'natalie';
console.log('nameVar', nameVar);

//can not redefine the same variable, however can reassign
let nameLet = 'Matthew';
nameLet = 'Aiden';
console.log('nameLet', nameLet);

//can not redefine or reassign
const nameConst = 'Frank';
console.log("nameConst", nameConst);

//function scoping
function getPetName() {
    // var, let, const all have only function scope, not global
    const petName = 'Hal';

    return petName;
}
getPetName();

//block scoping
var fullName = 'Charles Lang';

if(fullName) {
    //const & let variables are only block level scoped, wont work outside of {}
    // var firstName = fullName.split(" ")[0];
    
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
    
}

console.log(firstName);
