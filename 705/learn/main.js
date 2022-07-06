function buy(hadgood){
    console.log("good")
    if(hadgood){
        hadgood();
    }
}
function food(){
    console.log('food');
    console.log('tell ss');
}
buy(food);