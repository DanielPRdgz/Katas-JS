//? Ejercicio 12

//? Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

//? pista (cuando eliminamos algo de un array, su longitud se verá afectada)
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(duplicates) {
  let newArray = []
  for (let i = 0; i < duplicates.length; i++) {
    if (newArray.indexOf(duplicates[i]) === -1) {
      //! Cojo el array vacio y le digo que si no existe en cada vueta(indexof-1) un elemento del array duplicate, que pushee el elemento.
      newArray.push(duplicates[i])
    }
  }
  return newArray //! Devuelvo el nuevo array que hemos conformado sin elementos repetidos.
}
console.log(removeDuplicates(duplicates))
