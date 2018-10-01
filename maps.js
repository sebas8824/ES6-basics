// Mapas y sus metodos
{
    let mapa = new Map();
    mapa.set("nombre", "Sebastian");
    mapa.set("edad", 30);
    // Su value es undefined
    mapa.set("apellido");
    mapa.set();//permite agregar vacios
    // permite agregar objetos como llaves y valores
    mapa.set({},{hola: "hola mundo"});
    console.log(mapa);

    console.log(mapa.get("nombre"));
    console.log(mapa.has("nombre"));
    console.log(mapa.has("apellido"));

    mapa.delete("nombre");
    console.log(mapa.has("nombre"));
    console.log(mapa.get("nombre"));

    // Borrar llave y no valor
    mapa.set("edad");
    console.log(mapa);
    // Borrar todo el mapa
    mapa.clear()
    console.log(mapa);
}

// Inicialización de mapas
// Lleva un unico arreglo de arreglos 0 llave, 1 valor en cada uno.
{
    let mapa = new Map([["nombre", "Sebastian"], ["apellido", "Benitez"], [null, undefined]]);
    console.log(mapa);
    // Puede traer el valor de null o de undefined asociada a la posición.
    console.log(mapa.get(null));
}

// For each de los mapas
{
    let mapa = new Map([["nombre", "Sebastian"], ["apellido", "Benitez"]]);
    mapa.forEach(function(valor, llave, mapaOrigen) {
        console.log(`llave: ${llave}, valor: ${valor}`);
        console.log(mapaOrigen);
    });

    mapa.forEach((valor, llave) => console.log(`llave: ${llave}, valor: ${valor}`));
}

// Ciclo for-of
{
    let numeros = [100, 20, 30, 50, 200];
    // Clásico for
    for(let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
    
    // for-in loop
    for (let i in numeros) {
        console.log(numeros[i]);
    }

    // for-of loop
    for (let numero of numeros) {
        console.log(numero);
    }

    let personas = [
        {
            nombre: "Sebastian",
            edad: 30
        },
        {
            nombre: "Alejandra",
            edad: 21
        },
        {
            nombre: "Judith",
            edad: 64
        }
    ]

    for (persona of personas) {
        console.log(persona.nombre, persona.edad);
    }

    let setPersonas = new Set();
    setPersonas.add({nombre: "Sebastian", edad: 30});
    setPersonas.add({nombre: "Alicia", edad: 27});
    setPersonas.add({nombre: "Angela", edad: 29});

    for(let persona of setPersonas) {
        console.log(persona.nombre, persona.edad);
    }

    // Sale el ultimo valor, por que los mapas son objetos de datos y si tienen la misma llave se reemplazan
    // Sirve para iterar un elemento del map.
    let mapPersonas = new Map([["nombre", "Sebastian"], ["apellido", "Benitez"]]);
    // Se usa let para limitar la variable al scope de ese bloque
    for(persona of mapPersonas) {
        console.log(persona);
    }
}