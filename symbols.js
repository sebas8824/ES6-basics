// Simbolos y propiedades
{
    // No pueden usarse con new, no tienen constructor por ser primitivos
    let primerNombre = Symbol('primer nombre');
    let segundoNombre = Symbol();
    let persona = {
        [segundoNombre]: "Benitez"
    };
    persona[primerNombre] = "Sebastian";
    console.log(persona[primerNombre], persona[segundoNombre]);
    console.log(primerNombre, segundoNombre);

    let simbolo1 = Symbol('simbolo');
    let simbolo2 = Symbol('simbolo');

    // Los simbolos siempre son diferentes y evita la colision de codigo con el de otra persona
    console.log(simbolo1 == simbolo2);
    console.log(simbolo1 === simbolo2);
    console.log(Object.is(simbolo1,simbolo2));

    console.log(typeof primerNombre);

    // No se puede convertir simbolo a string incluso usando templates
    //console.log(`Mi simbolo ${primerNombre}`);

    console.log('primer nombre' in persona);
    console.log(persona[primerNombre]);
}

// Compartiendo simgolos - Symbol.for y Symbol.keyFor
// Pool de simbolos creados
// Symbol.for() es para validar que no haya sido creado
{
    let userID = Symbol.for('userID');
    let objeto = {};
    objeto[userID]= "123";
    console.log(objeto[userID], userID);

    let userID2 = Symbol.for("userID");
    console.log(userID == userID2);
    console.log(userID === userID2);
    console.log(Object.is(userID, userID2));

    console.log(objeto[userID2]);
    console.log(userID2);

    let id = Symbol.for("idUnico");
    console.log(Symbol.keyFor(id));

    let id2 = Symbol.for("idUnico");
    console.log(Symbol.keyFor(id2));

    console.log(id === id2);

    // No existe nada asociado en la pila por el id3, por que estamos creando un nuevo simbolo.
    let id3 = Symbol("idUnico");
    console.log(Symbol.keyFor(id3));
}
// Coerción de Simbolos: combinar simbolo con otro tipo de dato
{
    let id = Symbol.for("id");
    let numero = 10;
    let texto = "10";
    let bool = true;
    let NotANumber = NaN;

    console.log(numero + texto); // 1010
    console.log(bool + bool); // 2
    //console.log(texto + id); // no va a funcionar al sumarlo pero:*/
    console.log("Mi Simbolo es " + Symbol.keyFor(id)); // Mi Simbolo es id
    console.log("Mi Simbolo es " + String(id)); // Mi Simbolo es Symbol(id)
}
// Recuperando las propiedades simbolo
{

    let id = Symbol.for("id");
    let activo = Symbol.for("activo");
    let persona = {
        [id]: 123,
        ["codigo"]: "XT123",
        nombre: "Sebastian",
        apellido: "Benitez",
        edad: 30,
        [activo]: true
    }
    console.log(persona.id);
    // Simbolos no aparecen
    for(key in persona) {
        console.log(key, persona[key]);
    }

    // Simbolos si aparecen
    let simbolos = Object.getOwnPropertySymbols(persona);
    console.log(simbolos);

    for(i in simbolos) {
        console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
    }
}