var a=1
console.log(typeof a)

var ssy=false;
if(ssy){
    console.log('is ss')
}
else{
    console.log('not ss')
}

var day=2
switch(day){
    case 1 :
        console.log('food')
    break;
    case 2 :
        console.log('water')
    break;
    case 3 :
        console.log('run')
    break;
    default :
    console.log('happy')  
    break; 
}

var zz = 2;
zz++;
console.log("zz:",zz);

var ss=5;
ss--;
console.log('ss:',ss);

console.log(1>=2)
console.log("1"===1)

var ss=true,
    zz=false;
if(ss && zz){
    console.log('happy');
}else{
    console.log('sad');
}
var i;
for(i=1;i<+100;i+=2){
    console.log(i)
}

var r;
var result =[
    'ss',
    'zz',
    'mz',
    'gg'
];
for(r=0; r<2; r++){
    console.log(result[r]);
}
var i;
var result =[
    'baidu',
    'google',
    'youku',
    'aiqiyi'
];
for(i=0; i<result.length;i++){
    console.log(result[i]);
};
var attempt=0;
while (attempt<5){
    attempt++;
    console.log(attempt)
}
console.log("loop stopped")

var q=0;
while(q<10){
    q++;
    console.log(q);
}
console.log('look stopped');