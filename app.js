//Declaring a variable
//keyword identifier/variable =value

let firstName="Stanley";
let lastName="Arthur";
let age=27;
let isMarried=true;
let children=["Stan","Simon","Patrick"]
let other={
    favoriteColor:"Gold",
    favoriteSport:"Soccer",
    favoriteFruit:"Apple",
};
const fullName= firstName +" "+ lastName;//concatenation
const mySelf=`My name is ${firstName} ${ lastName}`;//string interpolation

console.log(mySelf)

//STRINGS

let sentence="This is a story about Stanley Arthur in Blind Spot"
console.log(sentence.length)
console.log(sentence.split(" Stanley"))
console.log(sentence.replace("Stanley","John"))
console.log(sentence.toLowerCase())
console.log(sentence.toUpperCase())
console.log(sentence.startsWith("This"))
console.log(sentence.endsWith("Spot"))
console.log(sentence.includes("off"))


//ARRAY

let days= ["Monday","Tuesday",'Wednesday','Thursday'];
console.log(days.length)
days.push("Friday");
console.log(days)


days.unshift("Sunday");
console.log(days)


days.shift("Monday")
console.log(days)

console.log(days.push("Saturday"))

console.log(days.pop("Saturday"))



console.log(days.indexOf('Wednesday'))

console.log(days[4]) //Retrieving data
days[4]="Sunday"; //change data in the array
console.log(days)


//OBJECTS

let person={
    firstName:"Stanley",
    lastName:"Arthur",
    age:27,
};

console.log(person["firstName"])
console.log(person.firstName)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


