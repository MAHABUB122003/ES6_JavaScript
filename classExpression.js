//class Expression

let person = class{
    constructor(name,age, prof, dept){
        this.Name = name;
        this.Age = age;
        this.Prof = prof;
        this.dept = dept;

    }
}

const newPersotn = new person("Mahabub", 23, "Student", "CSE");
console.log(newPersotn)

console.log(newPersotn.Name);
console.log(newPersotn.Age)

//Static Method 

class book{
    fun(){
        console.log("Hi bro");
    }
}

let bookdet = new book;
bookdet.fun();

//Static Method

class book1{
  static fun1(){
        console.log("Hi! Mahbub")
    }
}
book1.fun1();


//static Method

class doom{
    static func(x,y){
      console.log(x+y)
      console.log(x*y)
      console.log(x/y)
    }
}
doom.func(10,20)


