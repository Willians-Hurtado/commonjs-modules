const{Name} = require('./names.js')
const{myHobbies} = require('./hobbies.js')


console.log(Name, myHobbies);

function me(){
    return{
        fullname: Name,
        hobbies: myHobbies
    } 
    
}

console.log(me());
