// Opcionales en ES6

// Primero parametros que siempre van a ir y luego los opcionales.
// De lo contrario se debe crear otra funcion que defina su valor
// y que luego llame saludo("", 0)
function saludo( mensaje = "Hola Mundo", tiempo = 1500) {
    // ES5
    //mensaje = mensaje || "Hola mundo";
    //mensaje = ( typeof mensaje !== "undefined" ? mensaje : "Hola Mundo again");
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

saludo();

// Sin usar funcion definida previamente
//function saludar( fn = function() { console.log("Hola otra vez");}) {

//Usando funcion definida.
function saludar(fn =  fnTemporal, persona = {nombre: "Sebastian"}) {
    console.log(typeof fn);
    if(typeof fn === "undefined") {
        console.error("No es una funcion");
        return;
    }
    fn();
    console.log(persona);
}

function fnTemporal() {
    console.log("Hola mundo fn");
}

var persona = {nombre: "Toby"};
saludar(fnTemporal, persona);

// Objeto arguments: ES6
function sumar(a = 1, b = 2) {
    console.log(arguments);
}

sumar(5, 6);

// Parametro REST

// ES5
function agregar_alumno() {
    console.log(arguments);
    for (var i = 1; i< arguments.length; i++) {
        arguments[0].push(arguments[i]);
    }
    return arguments[0];
}
var alumnos_arr = ["Sebastian"];
var alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro", "Susana", "Juan");
console.log(alumnos_arr2);

// ES6
// Solo debe existir un parametro en la funcion
// El parametro rest es el ultimo parametro
function add_alumno (arr_alumnos, ...alumnos) {
    console.log(arguments);
    for (let i = 0; i< alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

let alumnos_arr3 = add_alumno(
    alumnos_arr, "Maria", "Pedro", "Susana", "Juan"
)
console.log(alumnos_arr3);


// Operador spread
//ES5
var num1 = 20,
    num2 = 30,
    numeros = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 200];

var max = Math.max(num1, num2);
var max2 = Math.max.apply(Math, numeros);
console.log(max2);
// ES6
let numeros2 = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 200];
let max3 = Math.max(...numeros);
console.log(max3);
