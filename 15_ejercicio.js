//? Ejercicio 15

//? Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
for (i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    //!Si los productos que recorremos en el array incluyen camiseta entonces: Los imprimimos en consola.
    console.log(products[i])
  }
}
