getData();

function getData(defaultAge) {
    
    const age = getAge(defaultAge);
    const isDataCorrect = confirm(`Вам, ${getAgeByString(age)}?` );

    if (isDataCorrect) {
        console.log('Рады знакомству!');
    } else {
        console.log('Введите данные заново!');
        getData(age);
    }
}
function getAge(minAge=1,maxAge=150) {
const age = prompt("How old are you", "age")

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

console.log(getAgeByString(age));
return age;
}

}
getAge();

function getAgeByString(age){ 

    const ageStr = age.toString();
    const lastNumber = +ageStr[ ageStr.length - 1 ];
    const lastTwoDigits = age % 100;

    if (lastNumber === 1 && lastTwoDigits !==11){
        return age + `год`;
    
    }
    if ((lastNumber > 1 && lastNumber  < 5) && (lastTwoDigits <= 11 || lastTwoDigits >= 15)){
        return `${age} года`;

    }
    return `${age} лет`
}

