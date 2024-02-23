//? Ejercicio 11

//? Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//? pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(mixedElements) {
  suma = 0
  contador = 0

  for (let i = 0; i < mixedElements.length; i++) {
    //!Mi objetivo es identifficar un numero para que lo sume. Y si es un string que cuente la longitud del string y lo sume.

    if (typeof mixedElements[i] === 'number') {
      //!Le decimos si cada uno de los elementos que recorremos es estrictamente un numero enbtonces que se sumen y se guarde en suma.
      suma = suma + mixedElements[i]
    } else if (typeof mixedElements[i] === 'string') {
      //! Y si es estrictamente un string pues cogemos y sumamos la longitud del string(Length) y lo almacenamos en otra variable com es contador.
      contador = contador + mixedElements[i].length
    }
  }
  return { suma, contador } //!Este seria el total que se le asigna  a la funcion de los numeros sumados y  las longitudes de los strings.
}
console.log(averageWord(mixedElements))
