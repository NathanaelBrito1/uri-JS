//1165 - Número Primo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
var n = parseInt(prompt(" "));
var x;
var cont;

for(var i = 0 ; i < n; i++) {
    x = parseInt(prompt(""));
    cont = 0;
    for(var j = 2; j<x; j++){
        if ( x % j === 0){
            cont++;
        }
    }
if(cont ===0){
 console.log(x + " eh primo");
}else{
    console.log(x + " nao eh primo");
}
}