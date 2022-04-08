//Transforma una cantidad de números en años, semanas y días
let dias = prompt("Indiqueme una cantidad de días");
let años =Math.floor(dias/365);
let semanas=Math.floor((dias%365)/7);
let dias_resto=Math.floor((dias%365)%7);
document.write(`<h1>Corresponde a ${años} años ${semanas} semanas y ${dias_resto} dias</h1>`)
