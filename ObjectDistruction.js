
const obj = {
    name:"Mahabub",
    age:23,
    Id: 223071107
}
//Basic Object
console.log(obj);
console.log(obj.name)
console.log(obj.Id)

//object Distruction

const {name, age, Id} = obj;
console.log(name)
console.log(age)
console.log(Id)


let object = {
    id:23,
    country:"Bangladesh",
    prof:"Student"
}

let { id,country,prof} = object;
console.log(country)