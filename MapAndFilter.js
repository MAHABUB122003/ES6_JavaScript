let arr = [1,2,3,4,5];
let arr1 = [];

arr.forEach((x)=>arr1.push(x));

console.log(arr1)


arr.forEach(fun);

function fun(x){
    arr1.push(x);
}
console.log(arr1)


let arro = [1,2,3,4,5]

let arro1 = arro.map(myfun);

function myfun(x){
    console.log(x)
}

let maha = arro.filter(myfun);

function myfun(x){
    return x<3
}
console.log(maha)