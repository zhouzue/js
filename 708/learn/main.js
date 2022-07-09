function A(color,weight){
    this.color=color;
    this.weight=weight
}
A.prototype.hh=function(){
    console.log("hahahahaha");
}
A.prototype.zz=function(){
    console.log("zzz........");
}
//var q=new A("red",120);
//console.log(q);

function M(color,weight){
    A.call(this,color,weight);
}
M.prototype=Object.create(A.prototype);
M.prototype.constructor=M;
M.prototype.mia=function(){
    console.log("miamiamia....");
};
//var m=new M("black",100);
//console.log(m);

