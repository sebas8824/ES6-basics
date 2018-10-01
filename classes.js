// Introduction a clases en js
{
    // ES5
    function Persona(nombre) {
        this.nombre = nombre;
        this.gritarNombre = function() {
            console.log(this.nombre.toUpperCase());
        }
    }

    // Similar al extension de swift
    Persona.prototype.decirNombre = function() {
        console.log(this.nombre);
    }

    // Sin el new ya esta declaracion es undefined, por tanto los instanceof son false.
    let sebastian = new Persona("Sebastian");
    //sebastian.decirNombre();
    //sebastian.gritarNombre();

    console.log(sebastian instanceof Persona);
    console.log(sebastian instanceof Object);
}

// Declaracion de clase en ES6
// Clases funcionan similar a las let
// El codigo funciona dentro de strict
// Metodos son ennumerables
// Metodos no tienen constructor, por tanto van sin new
// new es obligatorio
// Intentar renombrar el nombre de la clase dentro de algun metodo de la misma dara error (OCP Solid)
// Metodos estaticos y privados
{
    class Persona {
        // Permite hacer todas las inicializaciones de la clase
        constructor(nombre) {
            this.nombre = nombre;
        }  

        // Eq: Persona.prototype.decirNombre()...
        decirNombre() {
            console.log(this.nombre);
        }
    }

    // Debe ir con el new por que es lo que define el constructor
    let sebastian = new Persona("Sebastian");
    sebastian.decirNombre();

    console.log(sebastian instanceof Persona);
    console.log(sebastian instanceof Object);
    console.log(typeof Persona);//devuelve function y no class (parte del lenguaje)
    console.log(typeof Persona.prototype.decirNombre) //devuelve function
}

// Clases como expresiones
{
    // Funcion hecha expresión
    let miFuncion = function() {
        console.log("Hola Mundo");
    }

    let otraFunction = miFuncion;
    console.log(typeof otraFunction);
    otraFunction();

    // Clase hecha expresión
    let Persona = class {
        constructor() {
            this.nombre = "";
            this.edad = 30;
            this.direccion = "Calle falsa 123";
        }

        decirSaludo() {
            console.log("Hola!");
        }
    }

    let fernando = new Persona();
    console.log(typeof fernando);
    console.log(fernando instanceof Persona);
}

// Clases como parametros
{
    function creadorClases(definicionClase) {
        return new definicionClase();
    }

    let obj = creadorClases(class {
        constructor() {
            this.nombre = undefined;
            this.edad = 30;
        }

        saludar() {
            console.log("Hola");
        }
    });

    obj.saludar();

    // Otro ejemplo
    class Cuadrado{
        constructor(lado) {
            this.lado = lado;
        }

        getArea() {
            return this.lado * this.lado;
        }
    }

    function imprimirCuadrado(cuadrado) {
        if(!(cuadrado instanceof Cuadrado)) {
            console.error("El parametro enviado no es un cuadrado");
            return;
        }   
        console.log(cuadrado.getArea());     
    }

    let mesa = new Cuadrado(10);
    imprimirCuadrado(mesa);
}