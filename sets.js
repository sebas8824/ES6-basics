// Creando sets
{
    let items = new Set();
    items.add(10);
    items.add(11);
    items.add(8);
    items.add(7);
    // Set ignora los duplicados
    items.add(7);
    // En el add hay un Object.is() por eso deja pasar "7"
    items.add("7");
    
    console.log(items);

    let datos = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7]);
    console.log(datos);
    console.log(datos.size);

    console.log(items.has(100));// true
    console.log(items.has("7"));// false
}
// Remover items en Set
{
    let items = new Set([1, 2, 3, 4, 5]);
    console.log(items.size);
    // Si existe lo borra
    items.delete(3);
    console.log(items.size);
    console.log(items);
    // Si no existe, no hace nada
    items.delete(3);
    console.log(items);
    // Borrar todos los items
    items.clear();
    console.log(items);
}

// For each en los Set
{
    let personas = new Set(["Sebastian", "Alejandra", "Judith"]);
    // Valor y llave son duplicados
    personas.forEach(function(valor, llave, setOriginal) {
        console.log(valor, llave, setOriginal);
        console.log(personas == setOriginal);
    });
}

// Convertir Set en Array
{
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9];
    let setNumeros = new Set(numeros);
    console.log(setNumeros);
    let arrayNumeros = [...setNumeros];
    console.log(arrayNumeros);
    function eliminaDuplicados(items) {
        return [...new Set(items)];
    }
    let arrayNumeros2 = eliminaDuplicados(numeros);
    console.log(arrayNumeros2);
}

// WeakSets
/*
Da error si enviamos como parametro algo que no sea un objeto al usar add, has, remove
No tiene manera de hacer repeticiones o ciclos for in, por que no guardan un indice.
No tienen keys, values y no hay manera de saber cuantos elementos hay dentro
No tienen forEach
No tienen size.

Sirven para almacenar referencias de los objetos.
*/ 
{
    let set = new WeakSet();
    let persona1 = {
        nombre: "Juan Carlos"
    };
    let persona2 = {
        nombre2: "Maria Perez"
    }
    set.add(persona1);
    set.add(persona2);
    set.delete(persona1);
    console.log(set);
}
