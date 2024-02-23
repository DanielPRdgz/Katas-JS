//? Ejercicio 21

//? Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

//? "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
for (let i = 0; i < users.length; i++) {
  //!Hago un bucle para recorrer y acceder a todos los elementos del array.
  if (users[i].years >= 18) {
    //! Si los años que tienen los elementos(en este caso usuarios) son >= que 18 entonces imprimo.
    console.log('Usuarios mayores de edad', users[i])
  } else if (users[i].years < 18) {
    //! Aqui pues menores de 18.
    console.log('Estos son menores de edad', users[i])
  }
}
