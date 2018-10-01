// Metodos estaticos y miembros/metodos computados
{
    // Miembro computado
    let nombreMetodo = "gritarNombre";

    class Persona {
        constructor(nombre) {
            this.nombre = nombre;
        }
        decirNombre() {
            console.log(this.nombre);
        }
        // Metodo computado: Metodos que pueden definirse por medio del nombre de una variable
        [nombreMetodo]() {
            console.log(this.nombre.toUpperCase());
        }
        // Metodo estatico
        static crear(nombre) {
            return new Persona(nombre);
        }
    }

    // Se puede usar sin instanciar Persona (new)
    let yo = Persona.crear("Sebastian");
    console.log(yo.gritarNombre());

    // No va a funcionar por que yo no es una instancia de Persona, por lo que no puede usar el metodo estatico
    //let otraPersona = yo.crear("Juan");
    //console.log(otraPersona);
}

// Herencia de clases
{
    class Rectangulo{
        constructor(largo, alto) {
            this.alto = alto;
            this.largo = largo;
        }

        getArea() {
            return "Rectangulo: " + (this.alto * this.largo);
        }
    }

    let rectangulo = new Rectangulo(3, 2);
    console.log(rectangulo.getArea());

    // permite heredar los atributos y metodos de la clase padre
    class Cuadrado extends Rectangulo {
        constructor(alto) {
            //super() -> Ejecuta el constructor del padre
            super(alto, alto);
        }

        //Sobreescribiendo funciones del padre
        getArea() {
            //return "Cuadrado: " + (this.alto * this.alto);
            return super.getArea();// Va al getArea del padre.
        }
    }

    let cuadrado = new Cuadrado(2);
    console.log(cuadrado.getArea());
    console.log(cuadrado instanceof Cuadrado);//true
    console.log(cuadrado instanceof Rectangulo);//true
}

