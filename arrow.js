var miFuncion2 = function(valor) {
    return valor;
}
// Arrow
let miFuncion1 = valor => valor;

console.log(miFuncion1(2));
console.log(miFuncion2(2));

// 2 parametros
var sumar2 = function(a, b) {
    return a+b;
}

let sumar = (a, b) => a+b;

// sin parametros
var saludar2 = function() {
    return "Hola mundo";
}

let saludar = () => "Hola Mundo";

var saludarPersona2 = function(nombre) {
    var salida = "Hola " + nombre;
    return salida;
}

let saludarPersona = nombre => {
    let salida = `Hola ${nombre}`;
    return salida;
}

console.log(saludarPersona("Sebastian"));
console.log(saludarPersona2("Alejandra"));

//Objeto literal
var obtenerLibro = function(id) {
    return {
        id: id, 
        nombre: "Libro"
    };
}

// Los objetos van dentro de parentesis en un arrow function
let obtenerLibro2 = id => ({
    id: id,
    nombre: "Libro"
});

// Funciones anonimas
// ES5
var saludo3 = function(nombre) {
    return "Hola! " + nombre;
}("Sebastian");
console.log(saludo3)
// ES6
let saludo4 = (nombre => `Hola! ${nombre}`)("Sebastian!")
console.log(saludo4);

// No hay cambios en this

// ES5
var manejador = {
    id: "123",
    init: function() {
        document.addEventListener("click", (function(event) {
            // Sin el bind el hace referencia al document con this
            this.clickEnPagina(event.type);
        }).bind(this), false);
    }, // fin del init
    clickEnPagina: function(type) {
        console.log("manejando " + type + " para el id: " + this.id);
    }
}
//manejador.init();

// ES6
var manejador2 = {
    id: "123",
    init: function() {
        document.addEventListener("click", 
            event => this.clickEnPagina(event.type));
    }, // fin del init
    clickEnPagina: function(type) {
        console.log("manejando " + type + " para el id: " + this.id);
    }
}
manejador2.init();


// Arrow functions arreglos
// ES5
var arreglo = [5, 10, 11, 2, 1, 8, 20];
var ordenado = arreglo.sort(function(a, b) {
    return a-b;
});

console.log(ordenado);

// ES6
let ordenadoES6 = arreglo.sort((a, b) => a-b);
console.log(ordenadoES6);

// Identificando funciones flecha ejemplos
var restar = (a, b) => a-b;
console.log(typeof restar);
console.log(restar instanceof Function);

// No tiene constructor por tanto va sin new
//var restar2 = new restar(2, 3);

// Arguments no esta definido en una funcion anonima dentro del contexto 
function ejemplo(a, b) {
    ((a, b) => {
        console.log(arguments[0])
    })();
}
ejemplo(10, 20);
/*((a, b) => {
    console.log(arguments[0])
})();*/


