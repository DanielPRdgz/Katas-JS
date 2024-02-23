//? Ejercicio 14

//?Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(counterWords) {
  let contador = []
  for (let i = 0; i < counterWords.length; i++) {
    let elemento = counterWords[i]

    if (contador[elemento] >= 1) {
      //! Si en el array contador el elemento es mayor o igual a uno: sumatorio
      contador[elemento]++ //!Incrementamos si el elemento ya esta en el array
    } else {
      contador[elemento] = 1
    }
  }
  console.log(contador)
}

repeatCounter(counterWords)
