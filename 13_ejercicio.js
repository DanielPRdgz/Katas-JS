//? Ejercicio 13

//? Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(nameFinder, elemento) {
  if (nameFinder.includes(elemento)) {
    //!Si dentro del array incluye el elemento(parametro que vamos a meter luego en la función) entonces hacemos un return de true, y la posicion de dicho elemento
    return [true, nameFinder.indexOf(elemento)]
  } else {
    return false
  }
}

console.log(finderName(nameFinder, 'Bruce'))
console.log(finderName(nameFinder, 'Pepe'))
