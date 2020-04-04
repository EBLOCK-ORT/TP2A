let data = require('./data');

// separo por lineas
let arrayLineas = data.split("\n");

console.log('Datos by linea: \n');
console.log(arrayLineas);

let flexLineas = arrayLineas.filter(t => t.toUpperCase().includes('FLEXBOX VIDEO'));

console.log('Solo Flexbox: \n');
console.log(flexLineas);

let tiempoString = flexLineas.map(function (t) {
    return t.split('"')[1];
});

console.log('Tiempo String \n');
console.log(tiempoString);

let tiemposBySegundo = tiempoString.map( function(ts) {
    let minAndSegs = ts.split(':');
    return parseInt(minAndSegs[0]) * 60 + parseInt(minAndSegs[1]);
});

let totalSegundos = tiemposBySegundo.reduce((total, currentSeg) => {
    return total + currentSeg;
}, 0);

console.log('Total segundos: '+ totalSegundos)


