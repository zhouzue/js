function 加(a,b){
    return a+b;
}
function 减(a,b){
    var x=a-b;
    return x;
}
function 乘(a,b){
    return a*b;
}
var x=加(55,99);
console.log(x);
var y=乘(2,24);
console.log(y);


function user(name){
    var age,sex;
    return{
        getname:function(){
            return name;
        },
        setname:function(newname){
            name=newname;
        },
        getage:function(){
            return age;
        },
        setage:function(newage){
            age=newage;
        },
        getsex:function(){
            return sex;
        },
        setsex:function(newsex){
            sex=newsex;
        }
    }
}
var whh=user('ss');
whh.setage(21);
whh.setsex('GIRL');
var name=whh.getname();
var age=whh.getage();
var sex=whh.getsex();
console.log(name,age,sex);
