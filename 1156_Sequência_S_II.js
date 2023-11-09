//1156 - Sequência S II

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var soma = 0;
var y = 1;
 
for(var x =3; x<= 39; x+= 2){
    y *=2;
    soma += (x / y);
}
console.log((soma +1).toFixed(2));