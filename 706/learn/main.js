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
var whh=user('lsd');
whh.setsex('girl');
whh.setage('18');
var name=whh.getname();
var age=whh.getage();
var sex=whh.getsex();
console.log(name,age,sex);

setTimeout(function(){
    console.log("come here");
},2000)
var c=1;
var d=setInterval(function(){
    c++;
    if(c>10){
        clearInterval(d);
        return;
    }
    console.log(c);
},2000)