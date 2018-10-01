// Objetos literales
// ES5
 var objeto = {
     nombre: "Sebastian",
     apellido: "Benitez"
 };

 // ES6
 // Si tienen el mismo nombre a la propiedad, va asi.
 // si no hay que ponerle el nombre tal cual se necesita
 function crearPersona(nombre, apellido, edad) {
     return {
         nombre,
         apellido,
         edad
     }
 }

 console.log(crearPersona("Sebastian", "Benitez", 30));

 // Metodos concisos / Simples

 var persona = {
     nombre: "Sebastian",     
     getNombreES5: function() {
         console.log(this.nombre);
     },
     getNombreES6() {
         console.log(this.nombre);
     }
 }

 persona.getNombreES6();

 // Nombre de propiedades computadas
 var persona2 = {}
// ES5
 var apellido = "apellido";
 persona2["primer nombre"] = "Sebastian";
 persona2[apellido] = "Benitez";
 //console.log(persona2["primerNombre"]);
 //console.log(persona2[apellido]);

 // ES6
 var apellido3 = "primer apellido";
 var persona3 = {
     "primer nombre": "Sebastian",
     [apellido]: "Herrera",
 }
 console.log(persona3["primer nombre"]);
 console.log(persona[apellido]);


 // Object.is(): Comparaciones bien minuciosas
 // == : Evaluar dos valores
 // === : Evaluar del mismo tipo y valor
 console.log(+0 == -0);//true
 console.log(+0 === -0);//true
 console.log(Object.is(+0, -0));//false
 console.log("=======");
 console.log(NaN == NaN);//false
 console.log(NaN === NaN);//false
 console.log(Object.is(NaN, NaN));//true
 console.log("=======");
 console.log(5 == 5);//true
 console.log(5 === 5);//true
 console.log(5 === "5");//false
 console.log(Object.is(5, 5));//true
 console.log(Object.is(5, "5"));//false

 // Object.assign(): Agarra todas las props de un objeto y 
 // se las transmite
 // ES5
 function mezclar(objReceptor, objDonador) {
     Object.keys(objDonador).forEach(function(key) {
        objReceptor[key] = objDonador[key];
     });
     return objReceptor;
 }

var objReceptor = {};
var objDonador = {nombre: "mi-archivo.js"};
var objDonadorGet = {
    get nombre() {
        return "mi-archivo.js";
    }
}
console.log(mezclar(objReceptor, objDonador));
// El getter del objeto literal al pasar por mezclar
// no se va a copiar la definicion, si no su valor
console.log(mezclar(objReceptor, objDonadorGet));
console.log(objDonadorGet);// Aparece vacio, pero sale el get nombre

// ES6
// No se pasa el get de la propiedad, si no su valor.
console.log(Object.assign(objReceptor, objDonadorGet));

// Enumeracion de propiedades de objetos
var obj = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
};

obj.d = 1;
obj["2"] = 1;
obj["a"] = 1;
console.log(Object.getOwnPropertyNames(obj).join(","));
console.log(Object.keys(obj));
console.log(JSON.stringify(obj));
for (i in Object.keys(obj)) {
    console.log(Object.keys(obj)[i])
}