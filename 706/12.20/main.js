function User(name,age,gender){
    this.name =name;
    this.age =age;
    this.gender =gender;
}
var zt =new User('ss',30,'male')
console.log('zt:',zt);

function Dog(){
    this.age =5;
    this.gender ="girl";
    this.call=function(){
        console.log("wangwangwang");
    }
}
var dog=new Dog()
dog.call();
console.log('dog:',dog);

function Book(){
    this.title="lalala";
    this.author="aaaa";
}
var b=new Book();
console.log(b);

function Ss(a,b,c){
    this.a=a;
    this.b=b;
    this.c=c;
}
var ss=new Ss("fun","happy","health");
console.log(ss);
function Mz(){
    this.a=7;
    this.b=11;
    this.c=function(){
        console.log("miaomiaomiao");
    }
}
var mz=new Mz();
mz.c();
console.log(mz);