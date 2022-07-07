function User(name,age){
    this.name=name;
    this.age=age;
}
User.prototype.greet=function(){
    console.log("yo,i am"+this.name+",i am"+this.age+"lal");
}
var whh=new User('whh',lsd);
var lsd=new User("lsd",20);
whh.greet()
lsd.greet()