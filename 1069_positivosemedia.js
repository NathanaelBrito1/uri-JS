//1064 - Positivos e Média
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) {return lines.shift(); };
var n; 
var valorp = 0;
var cont = 0;

for(var i = 0; i < 6; i++){
     n = parseFloat(prompt());
    if (n > 0) {
        valorp += n;
        cont++;
  }
}

var media = valorp/cont;
console.log(cont + " valores positivos");
console.log(media.toFixed(1));