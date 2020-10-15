
function getAge(minAge=1,maxAge=150) {
const age = prompt("How old are you", "age")
const isDataCorrect = confirm(`Вам ${age} лет?`);
console.log(isDataCorrect);
if (age === null || age <=minAge || age>=maxAge){
console.log("Отказ");
return getAge(minAge=1,maxAge=150);
}
else if (age.length >3){
    console.log ("max 3");
    return getAge();
}
else if (!Number(parseInt(age))){
    console.log ("only numbers");
    return getAge();
}
else {
console.log(`Вам, ${age}` + ' ' + getAgeByString(age));
return age;
}

}
getAge();

function getAgeByString(age){

    const ageStr = age.toString();
    const lastNumber = +ageStr[ ageStr.length - 1 ];
    const lastTwoDigits = age % 100;

    if (lastNumber === 1 && lastTwoDigits !==11){
        return  `год`;
    
    }
    if ((lastNumber > 1 && lastNumber  < 5) (lastTwoDigits <= 11 && lastTwoDigits >= 15)){
        return `года`;

    }
    return `лет`
}

