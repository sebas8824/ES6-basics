function obtenerNombre() {
    return "Maria Perez";
}

let nombre= "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let nombre2 = "Maria";
let nombre3 = 'Maria';

console.log(nombre2 === nombre3); // Iguales, su valor depende del contenido de la variable

let nombreCompleto2 = `El nombre completo es: ${nombre} ${apellido}`;
console.log(nombreCompleto2);

let nombreCompleto3 = `El nombre completo es: ${obtenerNombre()} ${1 + 2}`;
console.log(nombreCompleto3);

// JS normal
let multilinea = "<h1>Titulo</h1> \n<p>Hola Mundo</p>";
console.log(multilinea);
// Template literals
let multilinea2 = `<h1 class="algo">Titulo</h1>
    <p>Hola Mundo ${obtenerNombre()}</p>`;
console.log(multilinea2);

// Templates con tags
let unidades = 5,
    costo_unitario = 10;

function etiqueta(literales, ...substituciones) {
    //console.log(arguments); // Arreglo con el contenido del String literal
    let resultado = "";
    console.log(literales);
    console.log(substituciones);

    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }
    console.log(resultado);
    return "otro texto";
}

let mensaje = etiqueta`${unidades} lapices cuestan ${costo_unitario * unidades} cada una`;
console.log(mensaje);

// Raw values
let mensaje2 = "Hola \nmundo\\";
    mensaje3 = String.raw`Hola \nmundo\\`;

    // Los tags solo funcionan con template literals
console.log(mensaje3);

