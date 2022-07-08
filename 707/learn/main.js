function User(name,age){
    this.name=name;
    this.age=age;
}
User.prototype.b=function(){
    console.log("hi,I am "+this.name+",I am "+this.age+" years old");
};
var a=new User("whh",19)
a.b()