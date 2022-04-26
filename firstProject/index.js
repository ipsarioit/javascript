
try{
    console.log(X);
}
catch(exception){
    
    if(exception instanceof ReferenceError) console.log("It was small Reference Error:");
    else console.log("It was different small Error:");
    
    console.log(exception);
}

console.log("Working fine!");