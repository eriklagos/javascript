//Concatena datos ingresados por pantalla
let nombre = prompt("Indiqueme su primer nombre")
let apellido = prompt("Ahora su apellido")
let edad = prompt("Por favor indiqueme también su edad")
let rut = prompt("Por ultimo indique su cédula de identidad con guión")
document.write(`Muchas gracias ${nombre} ${apellido} de ${edad} años y rut N°${rut}`)