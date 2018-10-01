/*
Prototipos: Conjunto de normas para integrar POO en JS
Se puede realizar:
- Herencia
- Encapsulamiento
- Abstracción
- Polimorfismo

** ES6 introduce clases
*/

{
    let gato = {
        sonido() {
            console.log("Miau!");
        },
        chillido() {
            console.log("MIAUUU!!!");
        }
    };

    let perro = {
        sonido() {
            console.log("Guau");
        }
    };

    let angora = Object.create(gato);
    console.log(Object.getPrototypeOf(angora) === gato);

    angora.sonido();
    angora.chillido();

    // Ubico las propiedades de perro en angora (tipo gato)
    Object.setPrototypeOf(angora, perro);
    console.log(Object.getPrototypeOf(angora) === gato);

    angora.sonido();
    //angora.chillido();
}

// Acceso al prototipo con la referencia SUPER
// ES5
{
    let persona = {
        saludar() {
            return "Hola";
        }
    };
    
    let amigo = {
        saludar() {
            //llamar saludar de persona
            return Object.getPrototypeOf(this)
            //.call se asegura que el scope de this
            // sea el que esta dentro del bloque, ES5
                .saludar.call(this) + ", saludos";
        }
    };

    // ES6
    let amigoES6 = {
        saludar() {
            return super.saludar() + ", saludos";
        }
    }
    
    // Al comentar Object.setPrototypeOf indico que no hay
    // una herencia entre amigo y persona, por tanto va a lanzar un error
    // al usar la palabra super en ES6, ya que no sabe donde ubicar
    // la funcion saludar.
    Object.setPrototypeOf(amigoES6, persona);
    console.log(amigoES6.saludar());
}

// Destructuracion de objetos
{
    let ajustes = {
        nombre: "Sebastian Benitez",
        email: "sebastian@dominio.com",
        facebook: "sebas8824",
        google: "sebas8824@gmail.com",
        premium: true,
        twitter: "miCuenta"
    };
    // ES5
    /*let nombre = ajustes.nombre,
        correo = ajustes.email,
        premium = ajustes.premium;*/

    // ES6
    // Se destructura con el nombre de cada una de las variables
    // Para llamarla de manera distinta, le coloco :<nombreVariable>
    // Y luego la puedo usar
    // tambien le puedo asignar un valor en el cuerpo del objeto
    // Puede usarse con opcionales como twitter ejemplo.
    let { nombre, email, premium:dePago, twitter: cuentaTwitter = "sebas8824" } = ajustes;
    console.log(nombre, email, dePago, cuentaTwitter);
}

// Destructuracion objetos aniados
{
    let autoGuardado = {
        archivo: "app.js",
        cursor: {
            linea: 7,
            columna: 16
        },
        ultimoArchivo: {
            archivo: "index.html",
            cursor: {
                linea: 8,
                columna: 20
            }
        },
        otroNodo: {
            subNodo: {
                cursor: {
                    linea: 11,
                    columna: 11
                }    
            }
        }
    };

    let {cursor:cursorActivo} = autoGuardado;
    console.log(cursorActivo);

    let { ultimoArchivo:{ cursor: ultimoArchivo} } = autoGuardado;
    console.log(ultimoArchivo);

    let {otroNodo: { subNodo: { cursor }}} = autoGuardado;
    console.log(cursor);

    let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
    console.log(otroSuperNodo2);
}

// Destructuración de arreglos
{
    let frutas = ["banano", "pera", "uva"];
    let [fruta1, fruta2] = frutas;
    console.log(fruta1, fruta2);
    let [,,fruta3] = frutas;
    console.log(fruta3);

    // destructuracion puede sobreescribir valores ya existentes
    let otraFruta = "manzana";
    [,otraFruta] = frutas;
    console.log(otraFruta);//pera

    // Cambio de valores
    // ES5
    let a = 1,
        b = 2,
        temp;
        temp = a;
        a = b;
        b = temp;
        console.log(a, b);
    // ES6
    [a,b] = [b,a]
    console.log(a, b);
}

// Destructuracion de arreglos anidados
{
    let colores1 = ["rojo", ["verde", "amarillo"], "morado", "naranja"];
    let [color1, [color2]] = colores1;
    console.log(color1, color2);
    
    let colores2 = [].concat.apply([], colores1);
    // Destructuracion usando REST solo funciona para arreglos, no objetos.
    let [colorPrincipal, colorSecundario, ...demasColores] = colores2;
    console.log(colorPrincipal, colorSecundario, demasColores);

}
// Valores por defecto
{
    // Si tiene valor el segundo elemento, usara pera, de lo contrario, usará manzana.
    let frutas = ["banano", "pera"];
    let [fruta1, fruta2 = "manzana"] = frutas;
    console.log(fruta1, fruta2);

    let opciones = {
        nombre: "Sebastian",
        apellido: "Meme"
    }
    let { nombre, apellido = "Benitez" } = opciones;
    console.log(nombre, apellido);
}
// Destructuración de parametros
{
    /*function crearJugador(nickname, opciones) {
        opciones = opciones || {};
        let hp = opciones.hp,
            sp = opciones.sp,
            clase = opciones.clase;
        console.log(nickname, hp, sp, clase);
    }

    crearJugador("Luna", {
        hp: 100,
        sp: 50,
        clase: "Ranger"
    });*/

    // Se inicializan del lado de la asignación de la variable destructurada.
    function crearJugador(nickname, 
        {hp, sp, clase} = {hp: 100, sp: 100, clase: "Warrior"}) {
        console.log(nickname, hp, sp, clase);
    }

    crearJugador("Luna", {
        hp: 300,
        sp: 250,
        clase: "Ranger"
    });

    crearJugador("Witcher");
}