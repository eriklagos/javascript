//Suma cinco números y calcula el promedio
alert("Deberá ingresar 5 números")
let uno = prompt("Indiqueme el primer número")
let dos = prompt("Indiqueme el segundo número")
let tres = prompt("Indiqueme el tercer número")
let cuatro = prompt("Indiqueme el cuarto número")
let cinco = prompt("Y por ultimo indique el quinto número")
uno=parseInt(uno)
dos = parseInt(dos)
tres = parseInt(tres)
cuatro = parseInt(cuatro)
cinco = parseInt(cinco)
suma =uno+dos+tres+cuatro+cinco
let prom = Math.round(suma/5)
document.write(`La suma es ${suma} y el promedio es ${prom}`)