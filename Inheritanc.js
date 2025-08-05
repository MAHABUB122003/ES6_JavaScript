//Inheritance

class parents{
    asset1(){
        console.log("Grand father assets");
    }
    asset2(){
        console.log("My father assets")
    }
}
 
class me extends parents {
       myAsset(){

        super.asset1();
        super.asset2();

       }
  }
let my = new me();
my.myAsset()


// second code

class parent{
    asset3(){
        console.log("books, pen, Computer, laptop")
    }
}

class groom extends parent{
   mahabub(){
     super.asset3()
   }

}
const all = new groom();
all.mahabub()


class book {
    fun(){
        console.log("all books");
    }
    fun1(){
        console.log("all pen")

    }
    fun3(){
        console.log("all guide")
    }
}

class computer extends book{
    allC(){
        super.fun();
        super.fun1();
        super.fun3();
    }
}
let Mahabub = new computer();
Mahabub.allC();