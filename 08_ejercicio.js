//? Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//? Puedes usar este array para probar tu función:
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(avengers) {
  let palabraLarga = avengers[0] //! Cojo un elemento del array que me sirva como elemento comparador. Mi objetivo es comparar mis avengers[i] con esta palabra y decirle a la consola que si la longitud(length) de avengers[i] (que son todos los elementos del array) es mayor que Hulk en este caso(Que hemos declarado anteriormente que era la palabraMasLarga para ir suplantandola). Asi funcionaria:
  //! Primera vuelta: Cojo hulk, hulk es mayor que hulk? no, entonces nada. Cojo thor, thor es mayor que hulk? no, entonces nada. Cojo IronMan, IronMan es mayor que Hulk?Sí, pues entonces palabraLarga que era hulk ahora es IronMan. Luego Captain A es mayor que IronMan? si pues ahora ironman pasa a ser Cpt A. y Así hasta pasar por cada uno de los elementos. Despues al finalizar el bucle devolvemos el valor de la palabraLarga.
  for (let i = 0; i < avengers.length; i++) {
    if (avengers[i].length > palabraLarga.length) {
      palabraLarga = avengers[i]
    }
  }
  return palabraLarga
}
console.log(findLongestWord(avengers))
