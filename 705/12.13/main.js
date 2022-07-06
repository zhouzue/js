var b=0;
var timer=setInterval(function(){
    b++;
    if(b>3){
        clearInterval(timer);
        return;
    }
    console.log('YO'+b);
},2000)
