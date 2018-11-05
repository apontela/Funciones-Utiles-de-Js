// 1. Make a function that organizes these into individual array that is ordered

let randomStuff = [1, 3, 5, 234, 634, 2, 14,"Banana", "Orange", "Apple", "Mango", "Banana", 23, 43, 1, 3, 2, 1, 8, 34, 4, 1, "ds", "a", "2", 9, 6, 34, 5, 2, 1, 6, 568, 7, 9,{juan : "gonzalez",pedro:"mujica",mariana:"sistori"}];

// Paso 1: Organizar el array de menor a mayor

// No sé por qué, pero la función .sort hace cosas diferentes si la corres varias veces. Por lo menos cuando le pides "a-b"

// randomStuff.sort((a, b) => {
//     return (a - b);
// });

// randomStuff.sort((a, b) => {
//     return (a - b);
// });

console.log(randomStuff);

// Paso 2: Crear una nueva array con los numeros que son iguales;

let number1 = randomStuff.filter(number => number === 1);

number1;

// Esto es lo que debo hacer con todos los elementos de la lista

// Paso 3: crear una nueva array con los numeros no repetidos de la lista

let sinRepetir = [...new Set(randomStuff)];

// Este pedazo de codigo es asombroso, no dejes que se te olvide como usarlo
let sinRepetir2 = randomStuff.reduce((acc, item) => {
    if (acc.indexOf(item) === -1) {
        acc.push(item);
    }
    return acc;
}, [])

console.log(sinRepetir);

console.log(sinRepetir2);

// Paso 4: Iterar sobre los elementos de la lista y compararlos con los de la lista sin repetir, e ir ordenandolos en listas

let ordenarArrays = sinRepetir.map(number => {
    return randomStuff.filter(item => number === item);
});

// Esto es a mayor escala lo que hice en el paso 3

// Paso 5: Sacar los elementos que están solos de la lista

let finalArray = ordenarArrays.map(array => {
    if (array.length === 1) { return array[0] };
    return array
});

console.log(ordenarArrays);

console.log(finalArray);

// Paso 6: Convertir en una función reutilizable

// Paso 6.1: Convertir los pasos en funciones pequeñas

// 6.1.1 "Sort"

const sortArray = (array) => array.sort((a, b) => (a - b));

// 6.1.2 "Sin repetir"

const unrepeatedArray = (array) => {
    return [...new Set(array)]
};

// 6.1.3 Ordenar el array

const groupedArray = (array) => {
    sortArray(array);
    let indexArray = unrepeatedArray(array);
    return indexArray.map(indexNumber => {
        return array.filter(number => indexNumber === number)
    })
}

// 6.1.4 Sacar los array de un solo elemento al array mayor

const singleItemArray = (array) => {
    return array.map(innerArray => {
        if (innerArray.length === 1) { return innerArray[0] };
        return innerArray
    })
}

// 6.2: Dejar todo en una sola función

const orderedArray = (array) => {
    const array2 = array.slice(0)
    const sortArray = (array2) => array2.sort((a, b) => (a - b));
    const unrepeatedArray = (array2) => {
        return [...new Set(array2)]
    };
    const groupedArray = (array2) => {
        sortArray(array2);
        sortArray(array2);
        // Por alguna razon tengo que ordenar las listas dos veces para que funcione en algunos casos
        let indexArray = unrepeatedArray(array2);
        return indexArray.map(number => {
            return array2.filter(item => number === item)
        })
    };
    const singleItemArray = (array2) => {
        return array2.map(innerArray => {
            if (innerArray.length === 1) { return innerArray[0] };
            return innerArray
        })
    };
    const newArray = groupedArray(array2);
    return singleItemArray(newArray);
}

console.log(orderedArray(randomStuff))