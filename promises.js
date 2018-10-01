function tareaAsincrona() {
    //ES6
    let promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Proceso Asincrono terminado.");
            resolve()
        }, 1300);
    });
    return promise;
    
}
//.then(resolved, rejected);
tareaAsincrona().then(function(){
    console.log("OK!");
}, function() {
    console.error("Mal, mal, mal, mal, MAL!!!!!");
});
console.log("Proceso secuencial");

/*function resolve() {
    console.log("OK!");
}

function reject() {
    console.log("Mal, mal mal mal!!!");
}*/