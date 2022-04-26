
try{
    //console.log(X);
    //console.log("RUN ANYWAWY!!!");
    throw new MyException('exception message');
}
catch(exception){
    
    if(exception instanceof ReferenceError) console.log("It was small Reference Error:");
    else if (typeof exception === "string") console.log("It was small triple Error:");
    else console.log("It was different small Error:");
    
    console.log(exception);
    //console.log("RUN ANYWAWY!!!");
}
finally{
    console.log("RUN ANYWAWY!!!");
}

