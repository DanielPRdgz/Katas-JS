//? Ejercicio 9

//? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(numbers) {
  containerSuma = 0 //!Declaro una variable la cual va a ser el contenedor de la suma de los numeros de mi array.
  for (let i = 0; i < numbers.length; i++) {
    containerSuma = containerSuma + numbers[i]
  }
  return containerSuma
}
//!Recorro el array con el bucle for y le digo que durante dure el bucle tenemos que coger el contenedor ya declarado e ir sumandole cada uno de los elementos del array(containerSuma=containerSuma+numbers[i]) hasta que llegue el final del bucle. Cada vuelta que va dando el bucle se va quedando guardado su valor en el containerSuma. Una vez terminado el bucle le hacemos el return, le devolvemos el valor del containerSuma que ya sabemos que va a ser la suma de todos los elementos recorridos del array.
console.log(sumAll(numbers))
//!Hacemos un consolelog de la función con el parametro del array.
