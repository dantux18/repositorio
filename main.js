import {secundaria} from "./practica1.js"

let principal = 100
console.log(secundaria)

let comp = 1

function factorial(numero) {
   if (numero >= 1) {
    return numero*factorial(numero-1)
    }
    return 1;
}

function suma(lista) {
    let resultado = 0
    for (let i = 0; i < lista.lenght; i++){
        resultado = resultado + lista[i]
    }
    return resultado
}


let numeros = [120, 200, 5, 48, 190, -49];
console.log ("la suma de la lista es: ", suma(numeros))