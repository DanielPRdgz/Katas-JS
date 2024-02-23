//? Ejercicio 22

//? Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
for (let i = 0; i < foodSchedule.length; i++) {
  comida = foodSchedule[i] //! Creo una variable y le asigno el valor de foodSchedule[i];
  if (comida.isVegan === false) {
    comida.name = fruits.shift()
    comida.isVegan = true
    //!Aqui basicamente lo que he hecho es, si se da esa condicion en las comidas no vegetarianas, cogerle el nombre y cambiarlo por el primero array de fruits(despues segundo, tercero..) y asi en el bucle.
    //!Luego modificamos el estado de isVegan a true.
  }
  console.log(foodSchedule)
}
