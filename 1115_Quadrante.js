//1115 - Quadrante

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var X = 1;
var Y = 1;

while( X != 0 || Y != 0) {
    [X, Y] = prompt ().split(" ").map(Number);
    if(X > 0 && Y > 0){
        console.log("primeiro");
    } else if (X > 0 && Y < 0) {
        console.log("quarto");
    } else if (X < 0 && Y < 0){
        console.log("terceiro");
    } else if (X < 0 && Y > 0){
        console.log("segundo");
    } else if (X === 0 || Y === 0){
        break;
    }
}