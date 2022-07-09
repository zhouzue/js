function yo(){
    console.log("i am "+this.name);
}
var a={
    name:"whh",
}
var b={
    name:"lsd",
}
a.yo=yo;
b.yo=yo;
a.yo();
b.yo();