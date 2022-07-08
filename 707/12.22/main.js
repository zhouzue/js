function A(color,weight){
    this.color=color;
    this.weight=weight;
}
A.prototype.eat=function(){
    console.log("miemiemie...");
}
A.prototype.sleep=function(){
    console.log("zzz....");
}
//var a=new A("black",120)
//console.log("a:",a);

function B(color,weight){
    A.call(this,color,weight);
}
B.prototype=Object.create(A.prototype)
B.prototype.constructor=B;
B.prototype.suckle=function(){
    console.log("miamiamia!good");
}
//var b=new B("black",100)
//console.log("b:",b);


function C(color,weight){
    B.call(this,color,weight);
}
C.prototype=Object.create(B.prototype);
C.prototype.constructor=C;
C.prototype.lie=function(){
    console.log("bad");
}
var c=new C("red",100);
var s=new C("YL",80);
console.log("c:",c);
console.log("s:",s);
