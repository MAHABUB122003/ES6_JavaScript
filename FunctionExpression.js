//Function Expression

function fun(x,y){
    return x + y;
}
console.log(fun(10,20))


let fun1 = (x,y)=>{
    return x*y;
}
console.log(fun1(10,20))

// single line function expression

let fun3 = (x,y)=> x+y;
console.log(fun3(200, 300))

let fun4 = ()=>{
     console.log("Hello brother");}
     fun4()

const fun5 = ()=> console.log("Hi! Mahabub0") 
fun5()

const fun6 = (x)=>x+10
console.log(fun6(20))
