//? Ejercicio 10

//? Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numbers) {
  //!Voy a necesitar una suma y una media.
  let suma = 0
  let media = 0
  for (let i = 0; i < numbers.length; i++) {
    suma = suma + numbers[i] //!Le decimos que vaya guardando en el contenedor suma cada uno de sus numeros en cada vuelta del bucle.
    media = suma / numbers.length //!Aqui cojemos la variable media para guardar la suma anteriormente realizada de todos sus numero y la dividimos entre 7(length)
  }
  return media //!Devolvemos la media ya que es el valor que buscamos
}
//! Hacemos console.log llamando a la funcion
console.log(average(numbers))
