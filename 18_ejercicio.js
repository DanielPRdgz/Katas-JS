//? Ejercicio 18

//? Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
let newPlaces = [] //!Creo un nuevo array llamado newPlaces para almacenar el nuevo array sin los ids.
for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id !== 11 && placesToTravel.id !== 40) {
    //!Si Los id's de cada elemento ID de placesToTravel No es 11 ni 40, entonces hago push de estos elementos complletos al nuevo array.
    newPlaces.push(placesToTravel[i])
  }
}
console.log(newPlaces)
